"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExchangeShippingMethodWorkflow = exports.updateExchangeShippingMethodWorkflowId = exports.updateExchangeShippingMethodValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const preview_order_change_1 = require("../../steps/preview-order-change");
const order_validation_1 = require("../../utils/order-validation");
const prepare_shipping_method_1 = require("../../utils/prepare-shipping-method");
/**
 * This step validates that an exchange's shipping method can be updated.
 */
exports.updateExchangeShippingMethodValidationStep = (0, workflows_sdk_1.createStep)("validate-update-exchange-shipping-method", async function ({ orderChange, orderExchange, input, }) {
    (0, order_validation_1.throwIfIsCancelled)(orderExchange, "Exchange");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No shipping method found for exchange ${input.exchange_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.SHIPPING_ADD) {
        throw new Error(`Action ${associatedAction.id} is not adding a shipping method`);
    }
});
exports.updateExchangeShippingMethodWorkflowId = "update-exchange-shipping-method";
/**
 * This workflow updates an exchange's shipping method.
 */
exports.updateExchangeShippingMethodWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateExchangeShippingMethodWorkflowId, function (input) {
    const orderExchange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_exchange",
        fields: [
            "id",
            "status",
            "order_id",
            "canceled_at",
            "order.currency_code",
        ],
        variables: { id: input.exchange_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version", "actions.*"],
        variables: {
            filters: {
                order_id: orderExchange.order_id,
                exchange_id: orderExchange.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    const shippingOptions = (0, workflows_sdk_1.when)({ input }, ({ input }) => {
        return input.data?.custom_amount === null;
    }).then(() => {
        const action = (0, workflows_sdk_1.transform)({ orderChange, input, orderExchange }, ({ orderChange, input, orderExchange }) => {
            const originalAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
            return {
                shipping_method_id: originalAction.reference_id,
                currency_code: orderExchange.order.currency_code,
            };
        });
        const shippingMethod = (0, common_1.useRemoteQueryStep)({
            entry_point: "order_shipping_method",
            fields: ["id", "shipping_option_id"],
            variables: {
                id: action.shipping_method_id,
            },
            list: false,
        }).config({ name: "fetch-shipping-method" });
        return (0, common_1.useRemoteQueryStep)({
            entry_point: "shipping_option",
            fields: [
                "id",
                "name",
                "calculated_price.calculated_amount",
                "calculated_price.is_calculated_price_tax_inclusive",
            ],
            variables: {
                id: shippingMethod.shipping_option_id,
                calculated_price: {
                    context: { currency_code: action.currency_code },
                },
            },
        }).config({ name: "fetch-shipping-option" });
    });
    (0, exports.updateExchangeShippingMethodValidationStep)({
        orderExchange,
        orderChange,
        input,
    });
    const updateData = (0, workflows_sdk_1.transform)({ orderChange, input, shippingOptions }, prepare_shipping_method_1.prepareShippingMethodUpdate);
    (0, workflows_sdk_1.parallelize)((0, steps_1.updateOrderChangeActionsStep)([updateData.action]), (0, steps_1.updateOrderShippingMethodsStep)([updateData.shippingMethod]));
    return new workflows_sdk_1.WorkflowResponse((0, preview_order_change_1.previewOrderChangeStep)(orderExchange.order_id));
});
//# sourceMappingURL=update-exchange-shipping-method.js.map