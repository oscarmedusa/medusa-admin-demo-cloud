import { BigNumberInput } from "@medusajs/framework/types";
export interface ValidateVariantPricesStepInput {
    variants: {
        id: string;
        calculated_price?: {
            calculated_amount?: BigNumberInput | null;
        };
    }[];
}
export declare const validateVariantPricesStepId = "validate-variant-prices";
/**
 * This step validates the specified variant objects to ensure they have prices.
 */
export declare const validateVariantPricesStep: import("@medusajs/framework/workflows-sdk").StepFunction<ValidateVariantPricesStepInput, unknown>;
//# sourceMappingURL=validate-variant-prices.d.ts.map