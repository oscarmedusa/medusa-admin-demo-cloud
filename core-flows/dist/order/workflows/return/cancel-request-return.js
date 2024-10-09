"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelReturnRequestWorkflow = exports.cancelReturnRequestWorkflowId = exports.cancelRequestReturnValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that a requested return can be canceled.
 */
exports.cancelRequestReturnValidationStep = (0, workflows_sdk_1.createStep)("validate-cancel-return-shipping-method", async function ({ order, orderChange, orderReturn, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
});
exports.cancelReturnRequestWorkflowId = "cancel-return-request";
/**
 * This workflow cancels a requested return.
 */
exports.cancelReturnRequestWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.cancelReturnRequestWorkflowId, function (input) {
    const orderReturn = (0, common_1.useRemoteQueryStep)({
        entry_point: "return",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.return_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "version", "canceled_at"],
        variables: { id: orderReturn.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version", "actions.*"],
        variables: {
            filters: {
                order_id: orderReturn.order_id,
                return_id: orderReturn.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.cancelRequestReturnValidationStep)({ order, orderReturn, orderChange });
    const shippingToRemove = (0, workflows_sdk_1.transform)({ orderChange, input }, ({ orderChange, input }) => {
        return (orderChange.actions ?? [])
            .filter((a) => a.action === utils_1.ChangeActionType.SHIPPING_ADD)
            .map(({ id }) => id);
    });
    (0, workflows_sdk_1.parallelize)((0, steps_1.deleteReturnsStep)({ ids: [orderReturn.id] }), (0, steps_1.deleteOrderChangesStep)({ ids: [orderChange.id] }), (0, steps_1.deleteOrderShippingMethods)({ ids: shippingToRemove }));
});
//# sourceMappingURL=cancel-request-return.js.map