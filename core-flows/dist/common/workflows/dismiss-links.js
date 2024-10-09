"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dismissLinksWorkflow = exports.dismissLinksWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const dismiss_remote_links_1 = require("../steps/dismiss-remote-links");
exports.dismissLinksWorkflowId = "dismiss-link";
/**
 * This workflow dismisses one or more links between records.
 */
exports.dismissLinksWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.dismissLinksWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, dismiss_remote_links_1.dismissRemoteLinkStep)(input));
});
//# sourceMappingURL=dismiss-links.js.map