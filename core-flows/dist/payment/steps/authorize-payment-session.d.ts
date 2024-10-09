import { PaymentDTO } from "@medusajs/framework/types";
export type AuthorizePaymentSessionStepInput = {
    id: string;
    context: Record<string, unknown>;
};
export declare const authorizePaymentSessionStepId = "authorize-payment-session-step";
/**
 * This step authorizes a payment session.
 */
export declare const authorizePaymentSessionStep: import("@medusajs/framework/workflows-sdk").StepFunction<AuthorizePaymentSessionStepInput, PaymentDTO>;
//# sourceMappingURL=authorize-payment-session.d.ts.map