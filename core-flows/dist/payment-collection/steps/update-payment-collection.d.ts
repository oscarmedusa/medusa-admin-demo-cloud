import { FilterablePaymentCollectionProps, PaymentCollectionUpdatableFields } from "@medusajs/framework/types";
export interface UpdatePaymentCollectionStepInput {
    selector: FilterablePaymentCollectionProps;
    update: PaymentCollectionUpdatableFields;
}
export declare const updatePaymentCollectionStepId = "update-payment-collection";
/**
 * This step updates payment collections matching the specified filters.
 */
export declare const updatePaymentCollectionStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdatePaymentCollectionStepInput, import("@medusajs/framework/types").PaymentCollectionDTO[]>;
//# sourceMappingURL=update-payment-collection.d.ts.map