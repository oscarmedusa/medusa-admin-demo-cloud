"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductsWorkflow = exports.updateProductsWorkflowId = void 0;
const update_products_1 = require("../steps/update-products");
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const upsert_variant_prices_1 = require("./upsert-variant-prices");
function prepareUpdateProductInput({ input, }) {
    if ("products" in input) {
        if (!input.products.length) {
            return { products: [] };
        }
        return {
            products: input.products.map((p) => ({
                ...p,
                sales_channels: undefined,
                variants: p.variants?.map((v) => ({
                    ...v,
                    prices: undefined,
                })),
            })),
        };
    }
    return {
        selector: input.selector,
        update: {
            ...input.update,
            sales_channels: undefined,
            variants: input.update?.variants?.map((v) => ({
                ...v,
                prices: undefined,
            })),
        },
    };
}
function updateProductIds({ updatedProducts, input, }) {
    let productIds = updatedProducts.map((p) => p.id);
    if ("products" in input) {
        const discardedProductIds = input.products
            .filter((p) => !p.sales_channels)
            .map((p) => p.id);
        return (0, utils_1.arrayDifference)(productIds, discardedProductIds);
    }
    return !input.update?.sales_channels ? [] : productIds;
}
function prepareSalesChannelLinks({ input, updatedProducts, }) {
    if ("products" in input) {
        if (!input.products.length) {
            return [];
        }
        return input.products
            .filter((p) => p.sales_channels)
            .flatMap((p) => p.sales_channels.map((sc) => ({
            [utils_1.Modules.PRODUCT]: {
                product_id: p.id,
            },
            [utils_1.Modules.SALES_CHANNEL]: {
                sales_channel_id: sc.id,
            },
        })));
    }
    if (input.selector && input.update?.sales_channels?.length) {
        return updatedProducts.flatMap((p) => input.update.sales_channels.map((channel) => ({
            [utils_1.Modules.PRODUCT]: {
                product_id: p.id,
            },
            [utils_1.Modules.SALES_CHANNEL]: {
                sales_channel_id: channel.id,
            },
        })));
    }
    return [];
}
function prepareVariantPrices({ input, updatedProducts, }) {
    if ("products" in input) {
        if (!input.products.length) {
            return [];
        }
        // Note: We rely on the ordering of input and update here.
        return input.products.flatMap((product, i) => {
            if (!product.variants?.length) {
                return [];
            }
            const updatedProduct = updatedProducts[i];
            return product.variants.map((variant, j) => {
                const updatedVariant = updatedProduct.variants[j];
                return {
                    product_id: updatedProduct.id,
                    variant_id: updatedVariant.id,
                    prices: variant.prices,
                };
            });
        });
    }
    if (input.selector && input.update?.variants?.length) {
        return updatedProducts.flatMap((p) => {
            return input.update.variants.map((variant, i) => ({
                product_id: p.id,
                variant_id: p.variants[i].id,
                prices: variant.prices,
            }));
        });
    }
    return [];
}
function prepareToDeleteSalesChannelLinks({ currentSalesChannelLinks, }) {
    if (!currentSalesChannelLinks.length) {
        return [];
    }
    return currentSalesChannelLinks.map(({ product_id, sales_channel_id }) => ({
        [utils_1.Modules.PRODUCT]: {
            product_id,
        },
        [utils_1.Modules.SALES_CHANNEL]: {
            sales_channel_id,
        },
    }));
}
exports.updateProductsWorkflowId = "update-products";
/**
 * This workflow updates one or more products.
 */
exports.updateProductsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateProductsWorkflowId, (input) => {
    // We only get the variant ids of products that are updating the variants and prices.
    const variantIdsSelector = (0, workflows_sdk_1.transform)({ input }, (data) => {
        if ("products" in data.input) {
            return {
                filters: {
                    id: data.input.products
                        .filter((p) => !!p.variants)
                        .map((p) => p.id),
                },
            };
        }
        return {
            filters: data.input.update?.variants ? data.input.selector : { id: [] },
        };
    });
    const previousProductsWithVariants = (0, common_1.useRemoteQueryStep)({
        entry_point: "product",
        fields: ["variants.id"],
        variables: variantIdsSelector,
    }).config({ name: "get-previous-products-variants-step" });
    const previousVariantIds = (0, workflows_sdk_1.transform)({ previousProductsWithVariants }, (data) => {
        return data.previousProductsWithVariants.flatMap((p) => p.variants?.map((v) => v.id));
    });
    const toUpdateInput = (0, workflows_sdk_1.transform)({ input }, prepareUpdateProductInput);
    const updatedProducts = (0, update_products_1.updateProductsStep)(toUpdateInput);
    const updatedProductIds = (0, workflows_sdk_1.transform)({ updatedProducts, input }, updateProductIds);
    const salesChannelLinks = (0, workflows_sdk_1.transform)({ input, updatedProducts }, prepareSalesChannelLinks);
    const variantPrices = (0, workflows_sdk_1.transform)({ input, updatedProducts }, prepareVariantPrices);
    const currentSalesChannelLinks = (0, common_1.useRemoteQueryStep)({
        entry_point: "product_sales_channel",
        fields: ["product_id", "sales_channel_id"],
        variables: { filters: { product_id: updatedProductIds } },
    }).config({ name: "get-current-sales-channel-links-step" });
    const toDeleteSalesChannelLinks = (0, workflows_sdk_1.transform)({ currentSalesChannelLinks }, prepareToDeleteSalesChannelLinks);
    upsert_variant_prices_1.upsertVariantPricesWorkflow.runAsStep({
        input: { variantPrices, previousVariantIds },
    });
    (0, common_1.dismissRemoteLinkStep)(toDeleteSalesChannelLinks);
    const productIdEvents = (0, workflows_sdk_1.transform)({ updatedProductIds }, ({ updatedProductIds }) => {
        return updatedProductIds?.map((id) => {
            return { id };
        });
    });
    (0, workflows_sdk_1.parallelize)((0, common_1.createRemoteLinkStep)(salesChannelLinks), (0, common_1.emitEventStep)({
        eventName: utils_1.ProductWorkflowEvents.UPDATED,
        data: productIdEvents,
    }));
    const productsUpdated = (0, workflows_sdk_1.createHook)("productsUpdated", {
        products: updatedProducts,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedProducts, {
        hooks: [productsUpdated],
    });
});
//# sourceMappingURL=update-products.js.map