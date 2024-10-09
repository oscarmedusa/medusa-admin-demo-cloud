"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiKeysWorkflow = exports.createApiKeysWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createApiKeysWorkflowId = "create-api-keys";
/**
 * This workflow creates one or more API keys.
 */
exports.createApiKeysWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createApiKeysWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createApiKeysStep)(input));
});
//# sourceMappingURL=create-api-keys.js.map