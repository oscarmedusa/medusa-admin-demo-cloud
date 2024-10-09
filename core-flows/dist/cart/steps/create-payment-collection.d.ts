import { BigNumberInput } from "@medusajs/framework/types";
export type CreatePaymentCollectionCartStepInput = {
    region_id: string;
    currency_code: string;
    amount: BigNumberInput;
    metadata?: Record<string, unknown>;
};
export declare const createPaymentCollectionsStepId = "create-payment-collections";
/**
 * This step creates payment collections in a cart.
 */
export declare const createPaymentCollectionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreatePaymentCollectionCartStepInput[], import("@medusajs/framework/types").PaymentCollectionDTO[]>;
//# sourceMappingURL=create-payment-collection.d.ts.map