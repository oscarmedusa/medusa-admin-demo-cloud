"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRequestItemReturnWorkflow = exports.updateRequestItemReturnWorkflowId = exports.updateRequestItemReturnValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
const validate_return_reason_1 = require("../../utils/validate-return-reason");
/**
 * This step validates that an item in a return can be updated.
 */
exports.updateRequestItemReturnValidationStep = (0, workflows_sdk_1.createStep)("update-request-item-return-validation", async function ({ order, orderChange, orderReturn, input, }, context) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No request return found for return ${input.return_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.RETURN_ITEM) {
        throw new Error(`Action ${associatedAction.id} is not requesting item return`);
    }
    if (input.data.reason_id) {
        await (0, validate_return_reason_1.validateReturnReasons)({
            orderId: order.id,
            inputItems: [{ reason_id: input.data.reason_id }],
        }, context);
    }
});
exports.updateRequestItemReturnWorkflowId = "update-request-item-return";
/**
 * This workflow updates an item in a return.
 */
exports.updateRequestItemReturnWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateRequestItemReturnWorkflowId, function (input) {
    const orderReturn = (0, common_1.useRemoteQueryStep)({
        entry_point: "return",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.return_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "canceled_at", "items.*"],
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
                claim_id: input.claim_id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.updateRequestItemReturnValidationStep)({
        order,
        input,
        orderReturn,
        orderChange,
    });
    const updateData = (0, workflows_sdk_1.transform)({ orderChange, input }, ({ input, orderChange }) => {
        const originalAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
        const data = input.data;
        return {
            id: input.action_id,
            details: {
                quantity: data.quantity ?? originalAction.details?.quantity,
                reason_id: (0, utils_1.isDefined)(data.reason_id)
                    ? data.reason_id
                    : originalAction.details?.reason_id,
            },
            internal_note: data.internal_note,
        };
    });
    (0, steps_1.updateOrderChangeActionsStep)([updateData]);
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=update-request-item-return.js.map