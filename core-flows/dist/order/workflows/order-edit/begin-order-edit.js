"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beginOrderEditOrderWorkflow = exports.beginOrderEditOrderWorkflowId = exports.beginOrderEditValidationStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const create_order_change_1 = require("../../steps/create-order-change");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that an order-edit can be requested for an order.
 */
exports.beginOrderEditValidationStep = (0, workflows_sdk_1.createStep)("begin-order-edit-validation", async function ({ order }) {
    (0, order_validation_1.throwIfOrderIsCancelled)({ order });
});
exports.beginOrderEditOrderWorkflowId = "begin-order-edit-order";
/**
 * This workflow requests an order order-edit.
 */
exports.beginOrderEditOrderWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.beginOrderEditOrderWorkflowId, function (input) {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status"],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.beginOrderEditValidationStep)({ order });
    const orderChangeInput = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return {
            change_type: "edit",
            order_id: input.order_id,
            created_by: input.created_by,
            description: input.description,
            internal_note: input.internal_note,
        };
    });
    return new workflows_sdk_1.WorkflowResponse((0, create_order_change_1.createOrderChangeStep)(orderChangeInput));
});
//# sourceMappingURL=begin-order-edit.js.map