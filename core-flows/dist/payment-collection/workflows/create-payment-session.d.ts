import { PaymentProviderContext, PaymentSessionDTO } from "@medusajs/framework/types";
export interface CreatePaymentSessionsWorkflowInput {
    payment_collection_id: string;
    provider_id: string;
    data?: Record<string, unknown>;
    context?: PaymentProviderContext;
}
export declare const createPaymentSessionsWorkflowId = "create-payment-sessions";
/**
 * This workflow creates payment sessions.
 */
export declare const createPaymentSessionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreatePaymentSessionsWorkflowInput, PaymentSessionDTO, []>;
//# sourceMappingURL=create-payment-session.d.ts.map