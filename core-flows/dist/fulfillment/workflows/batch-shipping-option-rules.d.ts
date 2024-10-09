import { BatchWorkflowInput, BatchWorkflowOutput, CreateShippingOptionRuleDTO, ShippingOptionRuleDTO, UpdateShippingOptionRuleDTO } from "@medusajs/framework/types";
export declare const batchShippingOptionRulesWorkflowId = "batch-shipping-option-rules";
/**
 * This workflow manages shipping option rules by creating, updating, or deleting them.
 */
export declare const batchShippingOptionRulesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<BatchWorkflowInput<CreateShippingOptionRuleDTO, UpdateShippingOptionRuleDTO>, BatchWorkflowOutput<ShippingOptionRuleDTO>, []>;
//# sourceMappingURL=batch-shipping-option-rules.d.ts.map