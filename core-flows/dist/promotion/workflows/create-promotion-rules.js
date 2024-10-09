"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPromotionRulesWorkflow = exports.createPromotionRulesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createPromotionRulesWorkflowId = "create-promotion-rules-workflow";
/**
 * This workflow creates one or more promotion rules.
 */
exports.createPromotionRulesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createPromotionRulesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.addRulesToPromotionsStep)(input));
});
//# sourceMappingURL=create-promotion-rules.js.map