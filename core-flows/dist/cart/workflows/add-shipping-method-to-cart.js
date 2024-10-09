"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addShippingMethodToWorkflow = exports.addShippingMethodToCartWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const use_remote_query_1 = require("../../common/steps/use-remote-query");
const steps_1 = require("../steps");
const validate_cart_1 = require("../steps/validate-cart");
const fields_1 = require("../utils/fields");
const update_cart_promotions_1 = require("./update-cart-promotions");
const update_tax_lines_1 = require("./update-tax-lines");
exports.addShippingMethodToCartWorkflowId = "add-shipping-method-to-cart";
/**
 * This workflow adds shipping methods to a cart.
 */
exports.addShippingMethodToWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.addShippingMethodToCartWorkflowId, (input) => {
    const cart = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.cartFieldsForRefreshSteps,
        variables: { id: input.cart_id },
        list: false,
    });
    (0, validate_cart_1.validateCartStep)({ cart });
    const optionIds = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return (data.input.options ?? []).map((i) => i.id);
    });
    (0, steps_1.validateCartShippingOptionsStep)({
        option_ids: optionIds,
        cart,
        shippingOptionsContext: { is_return: "false", enabled_in_store: "true" },
    });
    const shippingOptions = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "shipping_option",
        fields: [
            "id",
            "name",
            "calculated_price.calculated_amount",
            "calculated_price.is_calculated_price_tax_inclusive",
        ],
        variables: {
            id: optionIds,
            calculated_price: {
                context: { currency_code: cart.currency_code },
            },
        },
    }).config({ name: "fetch-shipping-option" });
    const shippingMethodInput = (0, workflows_sdk_1.transform)({ input, shippingOptions }, (data) => {
        const options = (data.input.options ?? []).map((option) => {
            const shippingOption = data.shippingOptions.find((so) => so.id === option.id);
            if (!shippingOption?.calculated_price) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Shipping option with ID ${shippingOption.id} do not have a price`);
            }
            return {
                shipping_option_id: shippingOption.id,
                amount: shippingOption.calculated_price.calculated_amount,
                is_tax_inclusive: !!shippingOption.calculated_price
                    .is_calculated_price_tax_inclusive,
                data: option.data ?? {},
                name: shippingOption.name,
                cart_id: data.input.cart_id,
            };
        });
        return options;
    });
    const currentShippingMethods = (0, workflows_sdk_1.transform)({ cart }, ({ cart }) => {
        return cart.shipping_methods.map((sm) => sm.id);
    });
    (0, steps_1.removeShippingMethodFromCartStep)({
        shipping_method_ids: currentShippingMethods,
    });
    const shippingMethodsToAdd = (0, steps_1.addShippingMethodToCartStep)({
        shipping_methods: shippingMethodInput,
    });
    update_tax_lines_1.updateTaxLinesWorkflow.runAsStep({
        input: {
            cart_id: input.cart_id,
            shipping_methods: shippingMethodsToAdd,
        },
    });
    update_cart_promotions_1.updateCartPromotionsWorkflow.runAsStep({
        input: {
            cart_id: input.cart_id,
        },
    });
});
//# sourceMappingURL=add-shipping-method-to-cart.js.map