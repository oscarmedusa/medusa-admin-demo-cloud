export interface SetRegionsPaymentProvidersStepInput {
    input: {
        id: string;
        payment_providers?: string[];
    }[];
}
export declare const setRegionsPaymentProvidersStepId = "add-region-payment-providers-step";
/**
 * This step sets the payment providers in regions.
 */
export declare const setRegionsPaymentProvidersStep: import("@medusajs/framework/workflows-sdk").StepFunction<SetRegionsPaymentProvidersStepInput, undefined>;
//# sourceMappingURL=set-regions-payment-providers.d.ts.map