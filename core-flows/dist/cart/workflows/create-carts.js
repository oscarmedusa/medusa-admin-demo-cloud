"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCartWorkflow = exports.createCartWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const use_remote_query_1 = require("../../common/steps/use-remote-query");
const steps_1 = require("../steps");
const validate_variant_prices_1 = require("../steps/validate-variant-prices");
const fields_1 = require("../utils/fields");
const prepare_line_item_data_1 = require("../utils/prepare-line-item-data");
const confirm_variant_inventory_1 = require("./confirm-variant-inventory");
const refresh_payment_collection_1 = require("./refresh-payment-collection");
const update_cart_promotions_1 = require("./update-cart-promotions");
const update_tax_lines_1 = require("./update-tax-lines");
// TODO: The createCartWorkflow are missing the following steps:
// - Refresh/delete shipping methods (fulfillment module)
exports.createCartWorkflowId = "create-cart";
/**
 * This workflow creates a cart.
 */
exports.createCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createCartWorkflowId, (input) => {
    const variantIds = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return (data.input.items ?? []).map((i) => i.variant_id);
    });
    const [salesChannel, region, customerData] = (0, workflows_sdk_1.parallelize)((0, steps_1.findSalesChannelStep)({
        salesChannelId: input.sales_channel_id,
    }), (0, steps_1.findOneOrAnyRegionStep)({
        regionId: input.region_id,
    }), (0, steps_1.findOrCreateCustomerStep)({
        customerId: input.customer_id,
        email: input.email,
    }));
    // TODO: This is on par with the context used in v1.*, but we can be more flexible.
    const pricingContext = (0, workflows_sdk_1.transform)({ input, region, customerData }, (data) => {
        if (!data.region) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "No regions found");
        }
        return {
            currency_code: data.input.currency_code ?? data.region.currency_code,
            region_id: data.region.id,
            customer_id: data.customerData.customer?.id,
        };
    });
    const variants = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "variants",
        fields: fields_1.productVariantsFields,
        variables: {
            id: variantIds,
            calculated_price: {
                context: pricingContext,
            },
        },
        throw_if_key_not_found: true,
    });
    (0, validate_variant_prices_1.validateVariantPricesStep)({ variants });
    confirm_variant_inventory_1.confirmVariantInventoryWorkflow.runAsStep({
        input: {
            sales_channel_id: salesChannel.id,
            variants,
            items: input.items,
        },
    });
    const priceSets = (0, steps_1.getVariantPriceSetsStep)({
        variantIds,
        context: pricingContext,
    });
    const cartInput = (0, workflows_sdk_1.transform)({ input, region, customerData, salesChannel }, (data) => {
        if (!data.region) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "No regions found");
        }
        const data_ = {
            ...data.input,
            currency_code: data.input.currency_code ?? data.region.currency_code,
            region_id: data.region.id,
        };
        if (data.customerData.customer?.id) {
            data_.customer_id = data.customerData.customer.id;
            data_.email = data.input?.email ?? data.customerData.customer.email;
        }
        if (data.salesChannel?.id) {
            data_.sales_channel_id = data.salesChannel.id;
        }
        return data_;
    });
    const lineItems = (0, workflows_sdk_1.transform)({ priceSets, input, variants }, (data) => {
        const items = (data.input.items ?? []).map((item) => {
            const variant = data.variants.find((v) => v.id === item.variant_id);
            return (0, prepare_line_item_data_1.prepareLineItemData)({
                variant: variant,
                unitPrice: item.unit_price ||
                    data.priceSets[item.variant_id].calculated_amount,
                isTaxInclusive: item.is_tax_inclusive ||
                    data.priceSets[item.variant_id].is_calculated_price_tax_inclusive,
                quantity: item.quantity,
                metadata: item?.metadata ?? {},
            });
        });
        return items;
    });
    const cartToCreate = (0, workflows_sdk_1.transform)({ lineItems, cartInput }, (data) => {
        return {
            ...data.cartInput,
            items: data.lineItems,
        };
    });
    const carts = (0, steps_1.createCartsStep)([cartToCreate]);
    const cart = (0, workflows_sdk_1.transform)({ carts }, (data) => data.carts?.[0]);
    update_tax_lines_1.updateTaxLinesWorkflow.runAsStep({
        input: {
            cart_id: cart.id,
        },
    });
    update_cart_promotions_1.updateCartPromotionsWorkflow.runAsStep({
        input: {
            cart_id: cart.id,
            promo_codes: input.promo_codes,
        },
    });
    refresh_payment_collection_1.refreshPaymentCollectionForCartWorkflow.runAsStep({
        input: {
            cart_id: cart.id,
        },
    });
    const cartCreated = (0, workflows_sdk_1.createHook)("cartCreated", {
        cart,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(cart, {
        hooks: [cartCreated],
    });
});
//# sourceMappingURL=create-carts.js.map