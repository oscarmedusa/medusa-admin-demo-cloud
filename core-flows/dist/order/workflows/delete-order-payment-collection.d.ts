import { PaymentCollectionDTO } from "@medusajs/framework/types";
/**
 * This step validates that the order doesn't have an active payment collection.
 */
export declare const throwUnlessStatusIsNotPaid: import("@medusajs/framework/workflows-sdk").StepFunction<{
    paymentCollection: PaymentCollectionDTO;
}, unknown>;
export declare const deleteOrderPaymentCollectionsId = "delete-order-payment-collectionworkflow";
/**
 * This workflow deletes one or more invites.
 */
export declare const deleteOrderPaymentCollections: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    id: string;
}, unknown, any[]>;
//# sourceMappingURL=delete-order-payment-collection.d.ts.map