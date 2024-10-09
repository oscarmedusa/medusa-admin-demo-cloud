"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderClaimRequestItemReturnWorkflow = exports.orderClaimRequestItemReturnWorkflowId = exports.orderClaimRequestItemReturnValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const update_order_claims_1 = require("../../steps/claim/update-order-claims");
const preview_order_change_1 = require("../../steps/preview-order-change");
const create_returns_1 = require("../../steps/return/create-returns");
const update_order_changes_1 = require("../../steps/update-order-changes");
const order_validation_1 = require("../../utils/order-validation");
const create_order_change_actions_1 = require("../create-order-change-actions");
/**
 * This step validates that items can be requested to return as part of a claim.
 */
exports.orderClaimRequestItemReturnValidationStep = (0, workflows_sdk_1.createStep)("claim-request-item-return-validation", async function ({ order, orderChange, orderReturn, orderClaim, items, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderClaim, "Claim");
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
    (0, order_validation_1.throwIfItemsDoesNotExistsInOrder)({ order, inputItems: items });
});
exports.orderClaimRequestItemReturnWorkflowId = "claim-request-item-return";
/**
 * This workflow requests one or more items to be returned as part of a claim.
 */
exports.orderClaimRequestItemReturnWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.orderClaimRequestItemReturnWorkflowId, function (input) {
    const orderClaim = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_claim",
        fields: ["id", "order_id", "return_id", "canceled_at"],
        variables: { id: input.claim_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "claim-query" });
    const existingOrderReturn = (0, workflows_sdk_1.when)({ orderClaim }, ({ orderClaim }) => {
        return orderClaim.return_id;
    }).then(() => {
        return (0, common_1.useRemoteQueryStep)({
            entry_point: "return",
            fields: ["id", "status", "order_id", "canceled_at"],
            variables: { id: orderClaim.return_id },
            list: false,
            throw_if_key_not_found: true,
        }).config({ name: "return-query" });
    });
    const createdReturn = (0, workflows_sdk_1.when)({ orderClaim }, ({ orderClaim }) => {
        return !orderClaim.return_id;
    }).then(() => {
        return (0, create_returns_1.createReturnsStep)([
            {
                order_id: orderClaim.order_id,
                claim_id: orderClaim.id,
            },
        ]);
    });
    const orderReturn = (0, workflows_sdk_1.transform)({ createdReturn, existingOrderReturn }, ({ createdReturn, existingOrderReturn }) => {
        return existingOrderReturn ?? createdReturn?.[0];
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "items.*"],
        variables: { id: orderClaim.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "canceled_at", "confirmed_at", "declined_at"],
        variables: {
            filters: {
                order_id: orderClaim.order_id,
                claim_id: orderClaim.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({
        name: "order-change-query",
    });
    (0, workflows_sdk_1.when)({ createdReturn }, ({ createdReturn }) => {
        return !!createdReturn?.length;
    }).then(() => {
        (0, update_order_changes_1.updateOrderChangesStep)([
            {
                id: orderChange.id,
                return_id: createdReturn?.[0]?.id,
            },
        ]);
    });
    (0, exports.orderClaimRequestItemReturnValidationStep)({
        order,
        items: input.items,
        orderClaim,
        orderReturn,
        orderChange,
    });
    (0, workflows_sdk_1.when)({ orderClaim }, ({ orderClaim }) => {
        return !orderClaim.return_id;
    }).then(() => {
        const createdReturnId = (0, workflows_sdk_1.transform)({ createdReturn }, ({ createdReturn }) => {
            return createdReturn?.[0].id;
        });
        (0, update_order_claims_1.updateOrderClaimsStep)([
            {
                id: orderClaim.id,
                return_id: createdReturnId,
            },
        ]);
    });
    const orderChangeActionInput = (0, workflows_sdk_1.transform)({ order, orderChange, orderClaim, orderReturn, items: input.items }, ({ order, orderChange, orderClaim, orderReturn, items }) => {
        return items.map((item) => ({
            order_change_id: orderChange.id,
            order_id: order.id,
            claim_id: orderClaim.id,
            return_id: orderReturn.id,
            version: orderChange.version,
            action: utils_1.ChangeActionType.RETURN_ITEM,
            internal_note: item.internal_note,
            reference: "return",
            reference_id: orderReturn.id,
            details: {
                reference_id: item.id,
                quantity: item.quantity,
                reason_id: item.reason_id,
                metadata: item.metadata,
            },
        }));
    });
    create_order_change_actions_1.createOrderChangeActionsWorkflow.runAsStep({
        input: orderChangeActionInput,
    });
    return new workflows_sdk_1.WorkflowResponse((0, preview_order_change_1.previewOrderChangeStep)(orderClaim.order_id));
});
//# sourceMappingURL=claim-request-item-return.js.map