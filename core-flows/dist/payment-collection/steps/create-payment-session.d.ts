import { BigNumberInput, PaymentProviderContext } from "@medusajs/framework/types";
export interface CreatePaymentSessionStepInput {
    payment_collection_id: string;
    provider_id: string;
    amount: BigNumberInput;
    currency_code: string;
    context?: PaymentProviderContext;
    data?: Record<string, unknown>;
}
export declare const createPaymentSessionStepId = "create-payment-session";
/**
 * This step creates a payment session.
 */
export declare const createPaymentSessionStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreatePaymentSessionStepInput, import("@medusajs/framework/types").PaymentSessionDTO>;
//# sourceMappingURL=create-payment-session.d.ts.map