export interface DeletePaymentSessionsWorkflowInput {
    ids: string[];
}
export declare const deletePaymentSessionsWorkflowId = "delete-payment-sessions";
/**
 * This workflow deletes one or more payment sessions.
 */
export declare const deletePaymentSessionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeletePaymentSessionsWorkflowInput, string[], []>;
//# sourceMappingURL=delete-payment-sessions.d.ts.map