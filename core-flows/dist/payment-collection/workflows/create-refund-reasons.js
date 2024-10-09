"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefundReasonsWorkflow = exports.createRefundReasonsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const create_refund_reasons_1 = require("../steps/create-refund-reasons");
exports.createRefundReasonsWorkflowId = "create-refund-reasons-workflow";
/**
 * This workflow creates one or more refund reasons.
 */
exports.createRefundReasonsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createRefundReasonsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, create_refund_reasons_1.createRefundReasonStep)(input.data));
});
//# sourceMappingURL=create-refund-reasons.js.map