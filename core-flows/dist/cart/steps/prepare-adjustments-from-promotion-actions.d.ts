import { ComputeActions } from "@medusajs/framework/types";
export interface PrepareAdjustmentsFromPromotionActionsStepInput {
    actions: ComputeActions[];
}
export declare const prepareAdjustmentsFromPromotionActionsStepId = "prepare-adjustments-from-promotion-actions";
/**
 * This step prepares the line item or shipping method adjustments using
 * actions computed by the Promotion Module.
 */
export declare const prepareAdjustmentsFromPromotionActionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<PrepareAdjustmentsFromPromotionActionsStepInput, {
    lineItemAdjustmentsToCreate: {
        code: string;
        amount: import("@medusajs/framework/types").BigNumberInput;
        item_id: string;
        promotion_id: string | undefined;
    }[];
    lineItemAdjustmentIdsToRemove: string[];
    shippingMethodAdjustmentsToCreate: {
        code: string;
        amount: import("@medusajs/framework/types").BigNumberInput;
        shipping_method_id: string;
        promotion_id: string | undefined;
    }[];
    shippingMethodAdjustmentIdsToRemove: string[];
    computedPromotionCodes: string[];
}>;
//# sourceMappingURL=prepare-adjustments-from-promotion-actions.d.ts.map