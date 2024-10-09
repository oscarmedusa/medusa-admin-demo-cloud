"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.archiveOrderWorkflow = exports.archiveOrderWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.archiveOrderWorkflowId = "archive-order-workflow";
/**
 * This workflow archives an order.
 */
exports.archiveOrderWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.archiveOrderWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.archiveOrdersStep)(input));
});
//# sourceMappingURL=archive-orders.js.map