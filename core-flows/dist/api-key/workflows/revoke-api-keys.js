"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeApiKeysWorkflow = exports.revokeApiKeysWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.revokeApiKeysWorkflowId = "revoke-api-keys";
/**
 * This workflow revokes one or more API keys.
 */
exports.revokeApiKeysWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.revokeApiKeysWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.revokeApiKeysStep)(input));
});
//# sourceMappingURL=revoke-api-keys.js.map