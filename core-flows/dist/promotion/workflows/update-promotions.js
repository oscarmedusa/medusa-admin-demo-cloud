"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePromotionsWorkflow = exports.updatePromotionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updatePromotionsWorkflowId = "update-promotions";
/**
 * This workflow updates one or more promotions.
 */
exports.updatePromotionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updatePromotionsWorkflowId, (input) => {
    const updatedPromotions = (0, steps_1.updatePromotionsStep)(input.promotionsData);
    const promotionsUpdated = (0, workflows_sdk_1.createHook)("promotionsUpdated", {
        promotions: updatedPromotions,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedPromotions, {
        hooks: [promotionsUpdated],
    });
});
//# sourceMappingURL=update-promotions.js.map