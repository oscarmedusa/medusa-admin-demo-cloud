import { FilterableTaxRateProps, UpdateTaxRateDTO } from "@medusajs/framework/types";
export type UpdateTaxRatesStepInput = {
    selector: FilterableTaxRateProps;
    update: UpdateTaxRateDTO;
};
export declare const updateTaxRatesStepId = "update-tax-rates";
/**
 * This step updates tax rates matching the specified filters.
 */
export declare const updateTaxRatesStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateTaxRatesStepInput, import("@medusajs/framework/types").TaxRateDTO[]>;
//# sourceMappingURL=update-tax-rates.d.ts.map