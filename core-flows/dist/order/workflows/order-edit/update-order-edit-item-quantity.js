"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderEditItemQuantityWorkflow = exports.updateOrderEditItemQuantityWorkflowId = exports.updateOrderEditItemQuantityValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that an item can be updated from an order edit.
 */
exports.updateOrderEditItemQuantityValidationStep = (0, workflows_sdk_1.createStep)("update-order-edit-update-quantity-validation", async function ({ order, orderChange, input, }, context) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No request to update item quantity for order ${input.order_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.ITEM_UPDATE) {
        throw new Error(`Action ${associatedAction.id} is not updating an item`);
    }
});
exports.updateOrderEditItemQuantityWorkflowId = "update-order-edit-update-quantity";
/**
 * This workflow updates a new item in the order edit.
 */
exports.updateOrderEditItemQuantityWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateOrderEditItemQuantityWorkflowId, function (input) {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "canceled_at", "items.*"],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version", "actions.*"],
        variables: {
            filters: {
                order_id: input.order_id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.updateOrderEditItemQuantityValidationStep)({
        order,
        input,
        orderChange,
    });
    const updateData = (0, workflows_sdk_1.transform)({ orderChange, input }, ({ input, orderChange }) => {
        const originalAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
        const data = input.data;
        return {
            id: input.action_id,
            details: {
                quantity: data.quantity ?? originalAction.details?.quantity,
            },
            internal_note: data.internal_note,
        };
    });
    (0, steps_1.updateOrderChangeActionsStep)([updateData]);
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=update-order-edit-item-quantity.js.map