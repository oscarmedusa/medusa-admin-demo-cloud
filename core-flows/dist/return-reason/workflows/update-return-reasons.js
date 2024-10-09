"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReturnReasonsWorkflow = exports.updateReturnReasonsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateReturnReasonsWorkflowId = "update-return-reasons";
/**
 * This workflow updates return reasons matching the specified filters.
 */
exports.updateReturnReasonsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateReturnReasonsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateReturnReasonsStep)(input));
});
//# sourceMappingURL=update-return-reasons.js.map