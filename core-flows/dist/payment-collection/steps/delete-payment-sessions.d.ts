export interface DeletePaymentSessionStepInput {
    ids: string[];
}
export declare const deletePaymentSessionsStepId = "delete-payment-sessions";
/**
 * This step deletes one or more payment sessions.
 *
 * Note: This step should not be used alone as it doesn't consider a revert
 * Use deletePaymentSessionsWorkflow instead that uses this step
 */
export declare const deletePaymentSessionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<DeletePaymentSessionStepInput, string[]>;
//# sourceMappingURL=delete-payment-sessions.d.ts.map