export type CreateVariantPricingLinkStepInput = {
    links: {
        variant_id: string;
        price_set_id: string;
    }[];
};
export declare const createVariantPricingLinkStepId = "create-variant-pricing-link";
/**
 * This step creates links between variant and price set records.
 */
export declare const createVariantPricingLinkStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateVariantPricingLinkStepInput, undefined>;
//# sourceMappingURL=create-variant-pricing-link.d.ts.map