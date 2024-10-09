"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeOrderWorkflow = exports.completeOrderWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.completeOrderWorkflowId = "complete-order-workflow";
/**
 * This workflow completes one or more orders.
 */
exports.completeOrderWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.completeOrderWorkflowId, (input) => {
    const completedOrders = (0, steps_1.completeOrdersStep)(input);
    const ordersCompleted = (0, workflows_sdk_1.createHook)("ordersCompleted", {
        orders: completedOrders,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(completedOrders, {
        hooks: [ordersCompleted],
    });
});
//# sourceMappingURL=complete-orders.js.map