import { BigNumberInput, OrderDTO, PaymentDTO } from "@medusajs/framework/types";
/**
 * This step validates that the refund is valid for the order
 */
export declare const validateRefundStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    payment: PaymentDTO;
    amount?: BigNumberInput;
}, unknown>;
export declare const refundPaymentWorkflowId = "refund-payment-workflow";
/**
 * This workflow refunds a payment.
 */
export declare const refundPaymentWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    payment_id: string;
    created_by?: string;
    amount?: BigNumberInput;
}, any, []>;
//# sourceMappingURL=refund-payment.d.ts.map