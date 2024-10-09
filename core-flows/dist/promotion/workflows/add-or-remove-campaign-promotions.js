"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrRemoveCampaignPromotionsWorkflow = exports.addOrRemoveCampaignPromotionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.addOrRemoveCampaignPromotionsWorkflowId = "add-or-remove-campaign-promotions";
/**
 * This workflow adds or removes promotions from campaigns.
 */
exports.addOrRemoveCampaignPromotionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.addOrRemoveCampaignPromotionsWorkflowId, (input) => {
    (0, workflows_sdk_1.parallelize)((0, steps_1.addCampaignPromotionsStep)(input), (0, steps_1.removeCampaignPromotionsStep)(input));
});
//# sourceMappingURL=add-or-remove-campaign-promotions.js.map