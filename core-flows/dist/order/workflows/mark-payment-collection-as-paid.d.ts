import { PaymentCollectionDTO } from "@medusajs/framework/types";
/**
 * This step validates that the payment collection is not_paid
 */
export declare const throwUnlessPaymentCollectionNotPaid: import("@medusajs/framework/workflows-sdk").StepFunction<{
    paymentCollection: PaymentCollectionDTO;
}, unknown>;
export declare const markPaymentCollectionAsPaidId = "mark-payment-collection-as-paid";
/**
 * This workflow marks a payment collection for an order as paid.
 */
export declare const markPaymentCollectionAsPaid: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    payment_collection_id: string;
    order_id: string;
    captured_by?: string;
}, import("@medusajs/framework/types").PaymentDTO, []>;
//# sourceMappingURL=mark-payment-collection-as-paid.d.ts.map