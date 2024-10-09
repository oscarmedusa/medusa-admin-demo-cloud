import { CartDTO } from "@medusajs/framework/types";
export interface GetActionsToComputeFromPromotionsStepInput {
    cart: CartDTO;
    promotionCodesToApply: string[];
}
export declare const getActionsToComputeFromPromotionsStepId = "get-actions-to-compute-from-promotions";
/**
 * This step retrieves the actions to compute based on the promotions
 * applied on a cart.
 */
export declare const getActionsToComputeFromPromotionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<GetActionsToComputeFromPromotionsStepInput, import("@medusajs/framework/types").ComputeActions[]>;
//# sourceMappingURL=get-actions-to-compute-from-promotions.d.ts.map