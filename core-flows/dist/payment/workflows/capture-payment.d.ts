import { BigNumberInput, PaymentDTO } from "@medusajs/framework/types";
export declare const capturePaymentWorkflowId = "capture-payment-workflow";
/**
 * This workflow captures a payment.
 */
export declare const capturePaymentWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    payment_id: string;
    captured_by?: string;
    amount?: BigNumberInput;
}, PaymentDTO, []>;
//# sourceMappingURL=capture-payment.d.ts.map