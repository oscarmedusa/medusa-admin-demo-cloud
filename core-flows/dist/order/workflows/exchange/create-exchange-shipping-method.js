"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExchangeShippingMethodWorkflow = exports.createExchangeShippingMethodWorkflowId = exports.createExchangeShippingMethodValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const create_order_shipping_methods_1 = require("../../steps/create-order-shipping-methods");
const order_validation_1 = require("../../utils/order-validation");
const prepare_shipping_method_1 = require("../../utils/prepare-shipping-method");
const create_order_change_actions_1 = require("../create-order-change-actions");
const update_tax_lines_1 = require("../update-tax-lines");
/**
 * This step validates that a shipping method can be created for an exchange.
 */
exports.createExchangeShippingMethodValidationStep = (0, workflows_sdk_1.createStep)("validate-create-exchange-shipping-method", async function ({ order, orderChange, orderExchange, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderExchange, "Exchange");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
});
exports.createExchangeShippingMethodWorkflowId = "create-exchange-shipping-method";
/**
 * This workflow creates a shipping method for an exchange.
 */
exports.createExchangeShippingMethodWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createExchangeShippingMethodWorkflowId, function (input) {
    const orderExchange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_exchange",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.exchange_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "currency_code", "canceled_at"],
        variables: { id: orderExchange.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const shippingOptions = (0, common_1.useRemoteQueryStep)({
        entry_point: "shipping_option",
        fields: [
            "id",
            "name",
            "calculated_price.calculated_amount",
            "calculated_price.is_calculated_price_tax_inclusive",
        ],
        variables: {
            id: input.shipping_option_id,
            calculated_price: {
                context: { currency_code: order.currency_code },
            },
        },
    }).config({ name: "fetch-shipping-option" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version"],
        variables: {
            filters: {
                order_id: orderExchange.order_id,
                exchange_id: orderExchange.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.createExchangeShippingMethodValidationStep)({
        order,
        orderExchange,
        orderChange,
    });
    const shippingMethodInput = (0, workflows_sdk_1.transform)({
        relatedEntity: orderExchange,
        shippingOptions,
        customPrice: input.custom_amount,
        orderChange,
        input,
    }, (0, prepare_shipping_method_1.prepareShippingMethod)("exchange_id"));
    const createdMethods = (0, create_order_shipping_methods_1.createOrderShippingMethods)({
        shipping_methods: [shippingMethodInput],
    });
    const shippingMethodIds = (0, workflows_sdk_1.transform)(createdMethods, (createdMethods) => {
        return createdMethods.map((item) => item.id);
    });
    const isReturn = (0, workflows_sdk_1.transform)(input, (data) => {
        return !!data.return_id;
    });
    update_tax_lines_1.updateOrderTaxLinesWorkflow.runAsStep({
        input: {
            order_id: order.id,
            shipping_method_ids: shippingMethodIds,
            is_return: isReturn,
        },
    });
    const orderChangeActionInput = (0, workflows_sdk_1.transform)({
        order,
        orderExchange,
        shippingOptions,
        createdMethods,
        customPrice: input.custom_amount,
        orderChange,
        input,
    }, ({ shippingOptions, orderExchange, order, createdMethods, customPrice, orderChange, input, }) => {
        const shippingOption = shippingOptions[0];
        const createdMethod = createdMethods[0];
        const methodPrice = customPrice ?? shippingOption.calculated_price.calculated_amount;
        return {
            action: utils_1.ChangeActionType.SHIPPING_ADD,
            reference: "order_shipping_method",
            order_change_id: orderChange.id,
            reference_id: createdMethod.id,
            amount: methodPrice,
            order_id: order.id,
            return_id: input.return_id,
            exchange_id: orderExchange.id,
        };
    });
    create_order_change_actions_1.createOrderChangeActionsWorkflow.runAsStep({
        input: [orderChangeActionInput],
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=create-exchange-shipping-method.js.map