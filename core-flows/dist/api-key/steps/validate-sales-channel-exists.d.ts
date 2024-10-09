export interface ValidateSalesChannelsExistStepInput {
    sales_channel_ids: string[];
}
export declare const validateSalesChannelsExistStepId = "validate-sales-channels-exist";
/**
 * This step validates that a sales channel exists before linking it to an API key.
 */
export declare const validateSalesChannelsExistStep: import("@medusajs/framework/workflows-sdk").StepFunction<ValidateSalesChannelsExistStepInput, string[]>;
//# sourceMappingURL=validate-sales-channel-exists.d.ts.map