"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLineItemInCartWorkflow = exports.updateLineItemInCartWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const use_remote_query_1 = require("../../common/steps/use-remote-query");
const steps_1 = require("../../line-item/steps");
const steps_2 = require("../steps");
const validate_cart_1 = require("../steps/validate-cart");
const validate_variant_prices_1 = require("../steps/validate-variant-prices");
const fields_1 = require("../utils/fields");
const confirm_variant_inventory_1 = require("./confirm-variant-inventory");
const refresh_payment_collection_1 = require("./refresh-payment-collection");
const update_cart_promotions_1 = require("./update-cart-promotions");
// TODO: The UpdateLineItemsWorkflow are missing the following steps:
// - Validate shipping methods for new items (fulfillment module)
exports.updateLineItemInCartWorkflowId = "update-line-item-in-cart";
/**
 * This workflow updates a cart's line item.
 */
exports.updateLineItemInCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateLineItemInCartWorkflowId, (input) => {
    (0, validate_cart_1.validateCartStep)(input);
    const variantIds = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return [data.input.item.variant_id];
    });
    // TODO: This is on par with the context used in v1.*, but we can be more flexible.
    const pricingContext = (0, workflows_sdk_1.transform)({ cart: input.cart }, (data) => {
        return {
            currency_code: data.cart.currency_code,
            region_id: data.cart.region_id,
            customer_id: data.cart.customer_id,
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
    const items = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return [data.input.item];
    });
    confirm_variant_inventory_1.confirmVariantInventoryWorkflow.runAsStep({
        input: {
            sales_channel_id: input.cart.sales_channel_id,
            variants,
            items,
        },
    });
    const lineItemUpdate = (0, workflows_sdk_1.transform)({ input, variants }, (data) => {
        const variant = data.variants[0];
        const item = data.input.item;
        return {
            data: {
                ...data.input.update,
                unit_price: variant.calculated_price.calculated_amount,
                is_tax_inclusive: !!variant.calculated_price.is_calculated_price_tax_inclusive,
            },
            selector: {
                id: item.id,
            },
        };
    });
    const result = (0, steps_1.updateLineItemsStepWithSelector)(lineItemUpdate);
    const cart = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.cartFieldsForRefreshSteps,
        variables: { id: input.cart.id },
        list: false,
    }).config({ name: "refetch–cart" });
    (0, steps_2.refreshCartShippingMethodsStep)({ cart });
    update_cart_promotions_1.updateCartPromotionsWorkflow.runAsStep({
        input: {
            cart_id: input.cart.id,
        },
    });
    refresh_payment_collection_1.refreshPaymentCollectionForCartWorkflow.runAsStep({
        input: { cart_id: input.cart.id },
    });
    const updatedItem = (0, workflows_sdk_1.transform)({ result }, (data) => data.result?.[0]);
    return new workflows_sdk_1.WorkflowResponse(updatedItem);
});
//# sourceMappingURL=update-line-item-in-cart.js.map