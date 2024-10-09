import { CreateTaxRateRuleDTO, TaxRateRuleDTO } from "@medusajs/framework/types";
export type CreateTaxRateRulesWorkflowInput = {
    rules: CreateTaxRateRuleDTO[];
};
export declare const createTaxRateRulesWorkflowId = "create-tax-rate-rules";
/**
 * This workflow creates one or more tax rate rules.
 */
export declare const createTaxRateRulesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateTaxRateRulesWorkflowInput, TaxRateRuleDTO[], []>;
//# sourceMappingURL=create-tax-rate-rules.d.ts.map