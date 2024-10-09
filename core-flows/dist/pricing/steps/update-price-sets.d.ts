import { PricingTypes } from "@medusajs/framework/types";
export type UpdatePriceSetsStepInput = {
    selector?: PricingTypes.FilterablePriceSetProps;
    update?: PricingTypes.UpdatePriceSetDTO;
} | {
    price_sets: PricingTypes.UpsertPriceSetDTO[];
};
export declare const updatePriceSetsStepId = "update-price-sets";
/**
 * This step updates price sets.
 */
export declare const updatePriceSetsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdatePriceSetsStepInput, PricingTypes.PriceSetDTO[]>;
//# sourceMappingURL=update-price-sets.d.ts.map