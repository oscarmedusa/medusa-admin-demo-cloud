import { CreateLineItemAdjustmentDTO } from "@medusajs/framework/types";
export interface CreateLineItemAdjustmentsCartStepInput {
    lineItemAdjustmentsToCreate: CreateLineItemAdjustmentDTO[];
}
export declare const createLineItemAdjustmentsStepId = "create-line-item-adjustments";
/**
 * This step creates line item adjustments in a cart.
 */
export declare const createLineItemAdjustmentsStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateLineItemAdjustmentsCartStepInput, undefined>;
//# sourceMappingURL=create-line-item-adjustments.d.ts.map