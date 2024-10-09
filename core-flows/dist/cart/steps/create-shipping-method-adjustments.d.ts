import { CreateShippingMethodAdjustmentDTO } from "@medusajs/framework/types";
export interface CreateShippingMethodAdjustmentsStepInput {
    shippingMethodAdjustmentsToCreate: CreateShippingMethodAdjustmentDTO[];
}
export declare const createShippingMethodAdjustmentsStepId = "create-shipping-method-adjustments";
/**
 * This step creates shipping method adjustments for a cart.
 */
export declare const createShippingMethodAdjustmentsStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateShippingMethodAdjustmentsStepInput, undefined>;
//# sourceMappingURL=create-shipping-method-adjustments.d.ts.map