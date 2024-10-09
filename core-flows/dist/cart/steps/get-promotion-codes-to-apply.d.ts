import { PromotionActions } from "@medusajs/framework/utils";
export interface GetPromotionCodesToApplyStepInput {
    cart: {
        items?: {
            adjustments?: {
                code?: string;
            }[];
        }[];
        shipping_methods?: {
            adjustments?: {
                code?: string;
            }[];
        }[];
    };
    promo_codes?: string[];
    action?: PromotionActions.ADD | PromotionActions.REMOVE | PromotionActions.REPLACE;
}
export declare const getPromotionCodesToApplyId = "get-promotion-codes-to-apply";
/**
 * This step retrieves the promotion codes to apply on a cart.
 */
export declare const getPromotionCodesToApply: import("@medusajs/framework/workflows-sdk").StepFunction<GetPromotionCodesToApplyStepInput, string[]>;
//# sourceMappingURL=get-promotion-codes-to-apply.d.ts.map