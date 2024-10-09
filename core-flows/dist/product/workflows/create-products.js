"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductsWorkflow = exports.createProductsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const sales_channel_1 = require("../../sales-channel");
const create_products_1 = require("../steps/create-products");
const create_product_variants_1 = require("./create-product-variants");
exports.createProductsWorkflowId = "create-products";
/**
 * This workflow creates one or more products.
 */
exports.createProductsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createProductsWorkflowId, (input) => {
    // Passing prices to the product module will fail, we want to keep them for after the product is created.
    const productWithoutExternalRelations = (0, workflows_sdk_1.transform)({ input }, (data) => data.input.products.map((p) => ({
        ...p,
        sales_channels: undefined,
        variants: undefined,
    })));
    const createdProducts = (0, create_products_1.createProductsStep)(productWithoutExternalRelations);
    const salesChannelLinks = (0, workflows_sdk_1.transform)({ input, createdProducts }, (data) => {
        return data.createdProducts
            .map((createdProduct, i) => {
            const inputProduct = data.input.products[i];
            return (inputProduct.sales_channels?.map((salesChannel) => ({
                sales_channel_id: salesChannel.id,
                product_id: createdProduct.id,
            })) ?? []);
        })
            .flat();
    });
    (0, sales_channel_1.associateProductsWithSalesChannelsStep)({ links: salesChannelLinks });
    const variantsInput = (0, workflows_sdk_1.transform)({ input, createdProducts }, (data) => {
        // TODO: Move this to a unified place for all product workflow types
        const productVariants = [];
        data.createdProducts.forEach((product, i) => {
            const inputProduct = data.input.products[i];
            for (const inputVariant of inputProduct.variants || []) {
                (0, utils_1.isPresent)(inputVariant) &&
                    productVariants.push({
                        product_id: product.id,
                        ...inputVariant,
                    });
            }
        });
        return {
            input: { product_variants: productVariants },
        };
    });
    const createdVariants = create_product_variants_1.createProductVariantsWorkflow.runAsStep(variantsInput);
    const response = (0, workflows_sdk_1.transform)({ createdVariants, input, createdProducts }, (data) => {
        const variantMap = {};
        for (const variant of data.createdVariants) {
            const array = variantMap[variant.product_id] || [];
            array.push(variant);
            variantMap[variant.product_id] = array;
        }
        for (const product of data.createdProducts) {
            product.variants = variantMap[product.id] || [];
        }
        return data.createdProducts;
    });
    const productIdEvents = (0, workflows_sdk_1.transform)({ response }, ({ response }) => {
        return response.map((v) => {
            return { id: v.id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.ProductWorkflowEvents.CREATED,
        data: productIdEvents,
    });
    const productsCreated = (0, workflows_sdk_1.createHook)("productsCreated", {
        products: response,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(response, {
        hooks: [productsCreated],
    });
});
//# sourceMappingURL=create-products.js.map