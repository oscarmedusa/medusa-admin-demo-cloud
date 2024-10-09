export interface ValidateDeletedPaymentSessionsStepInput {
    idsToDelete: string[];
    idsDeleted: string[];
}
export declare const validateDeletedPaymentSessionsStepId = "validate-deleted-payment-sessions";
/**
 * This step validates that the specified payment session IDs were deleted.
 */
export declare const validateDeletedPaymentSessionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<ValidateDeletedPaymentSessionsStepInput, undefined>;
//# sourceMappingURL=validate-deleted-payment-sessions.d.ts.map