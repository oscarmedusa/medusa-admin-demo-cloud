"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPromotionsWorkflow = exports.createPromotionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createPromotionsWorkflowId = "create-promotions";
/**
 * This workflow creates one or more promotions.
 */
exports.createPromotionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createPromotionsWorkflowId, (input) => {
    const createdPromotions = (0, steps_1.createPromotionsStep)(input.promotionsData);
    const promotionsCreated = (0, workflows_sdk_1.createHook)("promotionsCreated", {
        promotions: createdPromotions,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(createdPromotions, {
        hooks: [promotionsCreated],
    });
});
//# sourceMappingURL=create-promotions.js.map