import { FilterableTaxRateProps } from "@medusajs/framework/types";
export type ListTaxRateIdsStepInput = {
    selector: FilterableTaxRateProps;
};
export declare const listTaxRateIdsStepId = "list-tax-rate-ids";
/**
 * This step retrieves the IDs of tax rates matching the specified filters.
 */
export declare const listTaxRateIdsStep: import("@medusajs/framework/workflows-sdk").StepFunction<ListTaxRateIdsStepInput, string[]>;
//# sourceMappingURL=list-tax-rate-ids.d.ts.map