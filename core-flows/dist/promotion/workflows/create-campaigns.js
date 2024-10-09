"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCampaignsWorkflow = exports.createCampaignsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createCampaignsWorkflowId = "create-campaigns";
/**
 * This workflow creates one or more campaigns.
 */
exports.createCampaignsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createCampaignsWorkflowId, (input) => {
    const createdCampaigns = (0, steps_1.createCampaignsStep)(input.campaignsData);
    const campaignsCreated = (0, workflows_sdk_1.createHook)("campaignsCreated", {
        campaigns: createdCampaigns,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(createdCampaigns, {
        hooks: [campaignsCreated],
    });
});
//# sourceMappingURL=create-campaigns.js.map