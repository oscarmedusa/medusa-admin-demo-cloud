export interface GetVariantPriceSetsStepInput {
    variantIds: string[];
    context?: Record<string, unknown>;
}
export declare const getVariantPriceSetsStepId = "get-variant-price-sets";
/**
 * This step retrieves the calculated price sets of the specified variants.
 */
export declare const getVariantPriceSetsStep: import("@medusajs/framework/workflows-sdk").StepFunction<GetVariantPriceSetsStepInput, any>;
//# sourceMappingURL=get-variant-price-sets.d.ts.map