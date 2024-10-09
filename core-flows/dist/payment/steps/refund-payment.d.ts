import { BigNumberInput } from "@medusajs/framework/types";
export type RefundPaymentStepInput = {
    payment_id: string;
    created_by?: string;
    amount?: BigNumberInput;
};
export declare const refundPaymentStepId = "refund-payment-step";
/**
 * This step refunds a payment.
 */
export declare const refundPaymentStep: import("@medusajs/framework/workflows-sdk").StepFunction<RefundPaymentStepInput, import("@medusajs/framework/types").PaymentDTO>;
//# sourceMappingURL=refund-payment.d.ts.map