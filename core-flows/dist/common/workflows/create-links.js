"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinksWorkflow = exports.createLinksWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const create_remote_links_1 = require("../steps/create-remote-links");
exports.createLinksWorkflowId = "create-link";
/**
 * This workflow creates one or more links between records.
 */
exports.createLinksWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createLinksWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, create_remote_links_1.createRemoteLinkStep)(input));
});
//# sourceMappingURL=create-links.js.map