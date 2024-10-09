import { FilterableTaxRateRuleProps } from "@medusajs/framework/types";
export type ListTaxRateRuleIdsStepInput = {
    selector: FilterableTaxRateRuleProps;
};
export declare const listTaxRateRuleIdsStepId = "list-tax-rate-rule-ids";
/**
 * This step retrieves the IDs of tax rate rules matching the specified filters.
 */
export declare const listTaxRateRuleIdsStep: import("@medusajs/framework/workflows-sdk").StepFunction<ListTaxRateRuleIdsStepInput, string[]>;
//# sourceMappingURL=list-tax-rate-rule-ids.d.ts.map