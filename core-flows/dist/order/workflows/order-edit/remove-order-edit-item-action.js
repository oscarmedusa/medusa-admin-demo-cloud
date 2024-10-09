"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemOrderEditActionWorkflow = exports.removeItemOrderEditActionWorkflowId = exports.removeOrderEditItemActionValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that a new item can be removed from an order edit.
 */
exports.removeOrderEditItemActionValidationStep = (0, workflows_sdk_1.createStep)("remove-item-order-edit-action-validation", async function ({ order, orderChange, input, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No item found for order ${input.order_id} in order change ${orderChange.id}`);
    }
    else if (![utils_1.ChangeActionType.ITEM_ADD, utils_1.ChangeActionType.ITEM_UPDATE].includes(associatedAction.action)) {
        throw new Error(`Action ${associatedAction.id} is not adding or updating an item`);
    }
});
exports.removeItemOrderEditActionWorkflowId = "remove-item-order edit-action";
/**
 * This workflow removes a new item in an order edit.
 */
exports.removeItemOrderEditActionWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.removeItemOrderEditActionWorkflowId, function (input) {
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
    (0, exports.removeOrderEditItemActionValidationStep)({
        order,
        input,
        orderChange,
    });
    (0, steps_1.deleteOrderChangeActionsStep)({ ids: [input.action_id] });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=remove-order-edit-item-action.js.map