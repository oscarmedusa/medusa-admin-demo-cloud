import { CartDTO, CreatePaymentCollectionForCartWorkflowInputDTO } from "@medusajs/framework/types";
/**
 * This step validates that a cart doesn't have a payment collection.
 */
export declare const validateExistingPaymentCollectionStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    cart: CartDTO & {
        payment_collection?: any;
    };
}, unknown>;
export declare const createPaymentCollectionForCartWorkflowId = "create-payment-collection-for-cart";
/**
 * This workflow creates a payment collection for a cart.
 */
export declare const createPaymentCollectionForCartWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreatePaymentCollectionForCartWorkflowInputDTO, unknown, any[]>;
//# sourceMappingURL=create-payment-collection-for-cart.d.ts.map