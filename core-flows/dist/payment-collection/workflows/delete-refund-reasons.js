"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRefundReasonsWorkflow = exports.deleteRefundReasonsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteRefundReasonsWorkflowId = "delete-refund-reasons-workflow";
/**
 * This workflow deletes one or more refund reasons.
 */
exports.deleteRefundReasonsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteRefundReasonsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.deleteRefundReasonsStep)(input.ids));
});
//# sourceMappingURL=delete-refund-reasons.js.map