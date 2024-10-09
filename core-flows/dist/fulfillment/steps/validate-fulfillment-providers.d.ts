export type FulfillmentProviderValidationWorkflowInput = {
    id?: string;
    service_zone_id?: string;
    provider_id?: string;
};
export declare const validateFulfillmentProvidersStepId = "validate-fulfillment-providers-step";
/**
 * This step validates that the specified fulfillment providers are available in the
 * specified service zones.
 */
export declare const validateFulfillmentProvidersStep: import("@medusajs/framework/workflows-sdk").StepFunction<FulfillmentProviderValidationWorkflowInput[], undefined>;
//# sourceMappingURL=validate-fulfillment-providers.d.ts.map