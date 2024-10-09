export declare const createOrderPaymentCollectionWorkflowId = "create-order-payment-collection";
/**
 * This workflow creates a payment collection for an order.
 */
export declare const createOrderPaymentCollectionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    order_id: string;
    amount: number;
}, import("@medusajs/types").PaymentCollectionDTO[], []>;
//# sourceMappingURL=create-order-payment-collection.d.ts.map