"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLinksWorkflow = exports.updateLinksWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const update_remote_links_1 = require("../steps/update-remote-links");
exports.updateLinksWorkflowId = "update-link";
/**
 * This workflow updates one or more links between records.
 */
exports.updateLinksWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateLinksWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, update_remote_links_1.updateRemoteLinksStep)(input));
});
//# sourceMappingURL=update-links.js.map