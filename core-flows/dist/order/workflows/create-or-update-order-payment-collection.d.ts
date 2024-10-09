import { PaymentCollectionDTO } from "@medusajs/framework/types";
export declare const createOrUpdateOrderPaymentCollectionWorkflowId = "create-or-update-order-payment-collection";
/**
 * This workflow creates or updates payment collection for an order.
 */
export declare const createOrUpdateOrderPaymentCollectionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    order_id: string;
    amount?: number;
}, PaymentCollectionDTO[], []>;
//# sourceMappingURL=create-or-update-order-payment-collection.d.ts.map