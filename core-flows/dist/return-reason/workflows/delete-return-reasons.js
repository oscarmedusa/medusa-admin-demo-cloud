"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReturnReasonsWorkflow = exports.deleteReturnReasonsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteReturnReasonsWorkflowId = "delete-return-reasons";
/**
 * This workflow deletes one or more return reasons.
 */
exports.deleteReturnReasonsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteReturnReasonsWorkflowId, (input) => {
    return (0, steps_1.deleteReturnReasonStep)(input.ids);
});
//# sourceMappingURL=delete-return-reasons.js.map