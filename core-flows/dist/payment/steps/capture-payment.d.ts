import { BigNumberInput } from "@medusajs/framework/types";
export type CapturePaymentStepInput = {
    payment_id: string;
    captured_by?: string;
    amount?: BigNumberInput;
};
export declare const capturePaymentStepId = "capture-payment-step";
/**
 * This step captures a payment.
 */
export declare const capturePaymentStep: import("@medusajs/framework/workflows-sdk").StepFunction<CapturePaymentStepInput, import("@medusajs/framework/types").PaymentDTO>;
//# sourceMappingURL=capture-payment.d.ts.map