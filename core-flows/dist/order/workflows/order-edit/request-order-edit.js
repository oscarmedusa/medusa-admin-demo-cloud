"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestOrderEditRequestWorkflow = exports.requestOrderEditRequestWorkflowId = exports.requestOrderEditRequestValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const update_order_changes_1 = require("../../steps/update-order-changes");
const order_validation_1 = require("../../utils/order-validation");
const create_or_update_order_payment_collection_1 = require("../create-or-update-order-payment-collection");
/**
 * This step validates that a order edit can be requested.
 */
exports.requestOrderEditRequestValidationStep = (0, workflows_sdk_1.createStep)("validate-order-edit-request", async function ({ order, orderChange, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
});
exports.requestOrderEditRequestWorkflowId = "order-edit-request";
/**
 * This workflow requests an order edit request.
 */
exports.requestOrderEditRequestWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.requestOrderEditRequestWorkflowId, function (input) {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "version", "canceled_at"],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "canceled_at"],
        variables: {
            filters: {
                order_id: input.order_id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.requestOrderEditRequestValidationStep)({
        order,
        orderChange,
    });
    (0, update_order_changes_1.updateOrderChangesStep)([
        {
            id: orderChange.id,
            status: utils_1.OrderChangeStatus.REQUESTED,
            requested_at: new Date(),
            requested_by: input.requested_by,
        },
    ]);
    create_or_update_order_payment_collection_1.createOrUpdateOrderPaymentCollectionWorkflow.runAsStep({
        input: {
            order_id: order.id,
        },
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=request-order-edit.js.map