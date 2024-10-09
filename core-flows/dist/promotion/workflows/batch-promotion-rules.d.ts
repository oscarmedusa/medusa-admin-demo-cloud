import { BatchWorkflowInput, BatchWorkflowOutput, CreatePromotionRuleDTO, PromotionRuleDTO, UpdatePromotionRuleDTO } from "@medusajs/framework/types";
import { RuleType } from "@medusajs/framework/utils";
export declare const batchPromotionRulesWorkflowId = "batch-promotion-rules";
/**
 * This workflow creates, updates, or deletes promotion rules.
 */
export declare const batchPromotionRulesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<BatchWorkflowInput<CreatePromotionRuleDTO, UpdatePromotionRuleDTO> & {
    id: string;
    rule_type: RuleType;
}, BatchWorkflowOutput<PromotionRuleDTO>, []>;
//# sourceMappingURL=batch-promotion-rules.d.ts.map