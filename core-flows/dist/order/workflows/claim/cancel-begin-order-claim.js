"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelBeginOrderClaimWorkflow = exports.cancelBeginOrderClaimWorkflowId = exports.cancelBeginOrderClaimValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that the requested claim can be canceled by checking that it's not canceled,
 * its order isn't canceled, and it hasn't been confirmed.
 */
exports.cancelBeginOrderClaimValidationStep = (0, workflows_sdk_1.createStep)("validate-cancel-begin-order-claim", async function ({ order, orderChange, orderClaim, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderClaim, "Claim");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
});
exports.cancelBeginOrderClaimWorkflowId = "cancel-begin-order-claim";
/**
 * This workflow cancels a requested order claim.
 */
exports.cancelBeginOrderClaimWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.cancelBeginOrderClaimWorkflowId, function (input) {
    const orderClaim = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_claim",
        fields: ["id", "status", "order_id", "return_id", "canceled_at"],
        variables: { id: input.claim_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "version", "canceled_at"],
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
    (0, exports.cancelBeginOrderClaimValidationStep)({ order, orderClaim, orderChange });
    const shippingToRemove = (0, workflows_sdk_1.transform)({ orderChange, input }, ({ orderChange, input }) => {
        return (orderChange.actions ?? [])
            .filter((a) => a.action === utils_1.ChangeActionType.SHIPPING_ADD)
            .map(({ id }) => id);
    });
    (0, workflows_sdk_1.parallelize)((0, steps_1.deleteReturnsStep)({ ids: [orderClaim.return_id] }), (0, steps_1.deleteClaimsStep)({ ids: [orderClaim.id] }), (0, steps_1.deleteOrderChangesStep)({ ids: [orderChange.id] }), (0, steps_1.deleteOrderShippingMethods)({ ids: shippingToRemove }));
});
//# sourceMappingURL=cancel-begin-order-claim.js.map