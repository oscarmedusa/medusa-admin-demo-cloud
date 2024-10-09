"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRefundReasonsWorkflow = exports.updateRefundReasonsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateRefundReasonsWorkflowId = "update-refund-reasons";
/**
 * This workflow updates one or more refund reasons.
 */
exports.updateRefundReasonsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateRefundReasonsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateRefundReasonsStep)(input));
});
//# sourceMappingURL=update-refund-reasons.js.map