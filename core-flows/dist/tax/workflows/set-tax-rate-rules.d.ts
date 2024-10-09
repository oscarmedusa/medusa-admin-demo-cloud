import { CreateTaxRateRuleDTO, TaxRateRuleDTO } from "@medusajs/framework/types";
export type SetTaxRatesRulesWorkflowInput = {
    tax_rate_ids: string[];
    rules: Omit<CreateTaxRateRuleDTO, "tax_rate_id">[];
};
export declare const setTaxRateRulesWorkflowId = "set-tax-rate-rules";
/**
 * This workflow sets the rules of tax rates.
 */
export declare const setTaxRateRulesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<SetTaxRatesRulesWorkflowInput, TaxRateRuleDTO[], []>;
//# sourceMappingURL=set-tax-rate-rules.d.ts.map