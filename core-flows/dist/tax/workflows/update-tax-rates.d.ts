import { FilterableTaxRateProps, TaxRateDTO, UpdateTaxRateDTO } from "@medusajs/framework/types";
export type UpdateTaxRatesWorkflowInput = {
    selector: FilterableTaxRateProps;
    update: UpdateTaxRateDTO;
};
export type MaybeListTaxRateRuleIdsStepInput = {
    tax_rate_ids: string[];
    update: UpdateTaxRateDTO;
};
/**
 * This step lists the rules to update in a tax rate update object.
 */
export declare const maybeListTaxRateRuleIdsStep: import("@medusajs/framework/workflows-sdk").StepFunction<MaybeListTaxRateRuleIdsStepInput, string[]>;
export declare const updateTaxRatesWorkflowId = "update-tax-rates";
/**
 * This workflow updates tax rates matching specified filters.
 */
export declare const updateTaxRatesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateTaxRatesWorkflowInput, TaxRateDTO[], []>;
//# sourceMappingURL=update-tax-rates.d.ts.map