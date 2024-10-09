"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchPromotionRulesWorkflow = exports.batchPromotionRulesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const delete_promotion_rules_workflow_1 = require("../steps/delete-promotion-rules-workflow");
const create_promotion_rules_1 = require("./create-promotion-rules");
const update_promotion_rules_1 = require("./update-promotion-rules");
exports.batchPromotionRulesWorkflowId = "batch-promotion-rules";
/**
 * This workflow creates, updates, or deletes promotion rules.
 */
exports.batchPromotionRulesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.batchPromotionRulesWorkflowId, (input) => {
    const createInput = (0, workflows_sdk_1.transform)({ input }, (data) => ({
        rule_type: data.input.rule_type,
        data: { id: data.input.id, rules: data.input.create ?? [] },
    }));
    const updateInput = (0, workflows_sdk_1.transform)({ input }, (data) => ({
        data: data.input.update ?? [],
    }));
    const deleteInput = (0, workflows_sdk_1.transform)({ input }, (data) => ({
        rule_type: data.input.rule_type,
        data: { id: data.input.id, rule_ids: data.input.delete ?? [] },
    }));
    const [created, updated, deleted] = (0, workflows_sdk_1.parallelize)(create_promotion_rules_1.createPromotionRulesWorkflow.runAsStep({
        input: createInput,
    }), update_promotion_rules_1.updatePromotionRulesWorkflow.runAsStep({
        input: updateInput,
    }), (0, delete_promotion_rules_workflow_1.deletePromotionRulesWorkflowStep)(deleteInput));
    return new workflows_sdk_1.WorkflowResponse((0, workflows_sdk_1.transform)({ created, updated, deleted }, (data) => data));
});
//# sourceMappingURL=batch-promotion-rules.js.map