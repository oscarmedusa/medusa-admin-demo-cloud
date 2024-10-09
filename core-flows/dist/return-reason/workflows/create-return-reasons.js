"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReturnReasonsWorkflow = exports.createReturnReasonsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createReturnReasonsWorkflowId = "create-return-reasons";
/**
 * This workflow creates one or more return reasons.
 */
exports.createReturnReasonsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createReturnReasonsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createReturnReasonsStep)(input.data));
});
//# sourceMappingURL=create-return-reasons.js.map