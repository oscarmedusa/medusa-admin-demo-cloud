"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartWorkflow = exports.addToCartWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const use_remote_query_1 = require("../../common/steps/use-remote-query");
const steps_1 = require("../steps");
const validate_cart_1 = require("../steps/validate-cart");
const validate_variant_prices_1 = require("../steps/validate-variant-prices");
const fields_1 = require("../utils/fields");
const prepare_line_item_data_1 = require("../utils/prepare-line-item-data");
const confirm_variant_inventory_1 = require("./confirm-variant-inventory");
const refresh_payment_collection_1 = require("./refresh-payment-collection");
const update_cart_promotions_1 = require("./update-cart-promotions");
const update_tax_lines_1 = require("./update-tax-lines");
exports.addToCartWorkflowId = "add-to-cart";
/**
 * This workflow adds items to a cart.
 */
exports.addToCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.addToCartWorkflowId, (input) => {
    (0, validate_cart_1.validateCartStep)(input);
    const variantIds = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return (data.input.items ?? []).map((i) => i.variant_id);
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
    const lineItems = (0, workflows_sdk_1.transform)({ input, variants }, (data) => {
        const items = (data.input.items ?? []).map((item) => {
            const variant = data.variants.find((v) => v.id === item.variant_id);
            return (0, prepare_line_item_data_1.prepareLineItemData)({
                variant: variant,
                unitPrice: item.unit_price || variant.calculated_price.calculated_amount,
                isTaxInclusive: item.is_tax_inclusive ||
                    variant.calculated_price.is_calculated_price_tax_inclusive,
                quantity: item.quantity,
                metadata: item?.metadata ?? {},
                cartId: data.input.cart.id,
            });
        });
        return items;
    });
    const { itemsToCreate = [], itemsToUpdate = [] } = (0, steps_1.getLineItemActionsStep)({
        id: input.cart.id,
        items: lineItems,
    });
    confirm_variant_inventory_1.confirmVariantInventoryWorkflow.runAsStep({
        input: {
            sales_channel_id: input.cart.sales_channel_id,
            variants,
            items: input.items,
            itemsToUpdate,
        },
    });
    const [createdItems, updatedItems] = (0, workflows_sdk_1.parallelize)((0, steps_1.createLineItemsStep)({
        id: input.cart.id,
        items: itemsToCreate,
    }), (0, steps_1.updateLineItemsStep)({
        id: input.cart.id,
        items: itemsToUpdate,
    }));
    const items = (0, workflows_sdk_1.transform)({ createdItems, updatedItems }, (data) => {
        return [...(data.createdItems || []), ...(data.updatedItems || [])];
    });
    const cart = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.cartFieldsForRefreshSteps,
        variables: { id: input.cart.id },
        list: false,
    }).config({ name: "refetch–cart" });
    (0, steps_1.refreshCartShippingMethodsStep)({ cart });
    update_tax_lines_1.updateTaxLinesWorkflow.runAsStep({
        input: {
            cart_id: input.cart.id,
            items,
        },
    });
    update_cart_promotions_1.updateCartPromotionsWorkflow.runAsStep({
        input: {
            cart_id: input.cart.id,
        },
    });
    refresh_payment_collection_1.refreshPaymentCollectionForCartWorkflow.runAsStep({
        input: {
            cart_id: input.cart.id,
        },
    });
    return new workflows_sdk_1.WorkflowResponse(items);
});
//# sourceMappingURL=add-to-cart.js.map