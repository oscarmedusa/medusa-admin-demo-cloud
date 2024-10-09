"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCampaignsWorkflow = exports.updateCampaignsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateCampaignsWorkflowId = "update-campaigns";
/**
 * This workflow updates one or more campaigns.
 */
exports.updateCampaignsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateCampaignsWorkflowId, (input) => {
    const updatedCampaigns = (0, steps_1.updateCampaignsStep)(input.campaignsData);
    const campaignsUpdated = (0, workflows_sdk_1.createHook)("campaignsUpdated", {
        campaigns: updatedCampaigns,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedCampaigns, {
        hooks: [campaignsUpdated],
    });
});
//# sourceMappingURL=update-campaigns.js.map