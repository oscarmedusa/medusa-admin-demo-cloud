"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeReturnShippingMethodWorkflow = exports.removeReturnShippingMethodWorkflowId = exports.removeReturnShippingMethodValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const delete_order_change_actions_1 = require("../../steps/delete-order-change-actions");
const preview_order_change_1 = require("../../steps/preview-order-change");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that a shipping method can be removed from a return.
 */
exports.removeReturnShippingMethodValidationStep = (0, workflows_sdk_1.createStep)("validate-remove-return-shipping-method", async function ({ orderChange, orderReturn, input, }) {
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No shipping method found for return ${input.return_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.SHIPPING_ADD) {
        throw new Error(`Action ${associatedAction.id} is not adding a shipping method`);
    }
});
exports.removeReturnShippingMethodWorkflowId = "remove-return-shipping-method";
/**
 * This workflow removes a shipping method from a return.
 */
exports.removeReturnShippingMethodWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.removeReturnShippingMethodWorkflowId, function (input) {
    const orderReturn = (0, common_1.useRemoteQueryStep)({
        entry_point: "return",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.return_id },
        list: false,
        throw_if_key_not_found: true,
    });
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
    (0, exports.removeReturnShippingMethodValidationStep)({
        orderReturn,
        orderChange,
        input,
    });
    const dataToRemove = (0, workflows_sdk_1.transform)({ orderChange, input }, ({ orderChange, input }) => {
        const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
        return {
            actionId: associatedAction.id,
            shippingMethodId: associatedAction.reference_id,
        };
    });
    (0, workflows_sdk_1.parallelize)((0, delete_order_change_actions_1.deleteOrderChangeActionsStep)({ ids: [dataToRemove.actionId] }), (0, steps_1.deleteOrderShippingMethods)({ ids: [dataToRemove.shippingMethodId] }));
    return new workflows_sdk_1.WorkflowResponse((0, preview_order_change_1.previewOrderChangeStep)(orderReturn.order_id));
});
//# sourceMappingURL=remove-return-shipping-method.js.map