"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAddItemClaimActionWorkflow = exports.removeAddItemClaimActionWorkflowId = exports.removeClaimAddItemActionValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
const remove_claim_shipping_method_1 = require("./remove-claim-shipping-method");
/**
 * This step validates that new items can be removed from a claim.
 */
exports.removeClaimAddItemActionValidationStep = (0, workflows_sdk_1.createStep)("remove-item-claim-add-action-validation", async function ({ order, orderChange, orderClaim, input, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderClaim, "Claim");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    const associatedAction = (orderChange.actions ?? []).find((a) => a.id === input.action_id);
    if (!associatedAction) {
        throw new Error(`No item claim found for claim ${input.claim_id} in order change ${orderChange.id}`);
    }
    else if (associatedAction.action !== utils_1.ChangeActionType.ITEM_ADD) {
        throw new Error(`Action ${associatedAction.id} is not adding an item`);
    }
});
exports.removeAddItemClaimActionWorkflowId = "remove-item-claim-add-action";
/**
 * This workflow removes new items from a claim.
 */
exports.removeAddItemClaimActionWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.removeAddItemClaimActionWorkflowId, function (input) {
    const orderClaim = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_claim",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.claim_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "canceled_at", "items.*"],
        variables: { id: orderClaim.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version", "actions.*"],
        variables: {
            filters: {
                order_id: orderClaim.order_id,
                claim_id: orderClaim.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.removeClaimAddItemActionValidationStep)({
        order,
        input,
        orderClaim,
        orderChange,
    });
    (0, steps_1.deleteOrderChangeActionsStep)({ ids: [input.action_id] });
    const updatedOrderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: [
            "actions.action",
            "actions.claim_id",
            "actions.id",
            "actions.return_id",
        ],
        variables: {
            filters: {
                order_id: orderClaim.order_id,
                claim_id: orderClaim.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "updated-order-change-query" });
    const actionIdToDelete = (0, workflows_sdk_1.transform)({ updatedOrderChange, orderClaim }, ({ updatedOrderChange: { actions = [] }, orderClaim: { id: orderClaimId }, }) => {
        const itemActions = actions.filter((c) => c.action === "ITEM_ADD");
        if (itemActions.length) {
            return null;
        }
        const shippingAction = actions.find((c) => c.action === "SHIPPING_ADD" &&
            c.claim_id === orderClaimId &&
            !c.return_id);
        if (!shippingAction) {
            return null;
        }
        return shippingAction.id;
    });
    (0, workflows_sdk_1.when)({ actionIdToDelete }, ({ actionIdToDelete }) => {
        return !!actionIdToDelete;
    }).then(() => {
        remove_claim_shipping_method_1.removeClaimShippingMethodWorkflow.runAsStep({
            input: {
                claim_id: orderClaim.id,
                action_id: actionIdToDelete,
            },
        });
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=remove-claim-add-item-action.js.map