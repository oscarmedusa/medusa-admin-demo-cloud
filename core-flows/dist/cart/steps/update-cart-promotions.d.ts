import { PromotionActions } from "@medusajs/framework/utils";
export interface UpdateCartPromotionStepInput {
    id: string;
    promo_codes?: string[];
    action?: PromotionActions.ADD | PromotionActions.REMOVE | PromotionActions.REPLACE;
}
export declare const updateCartPromotionsStepId = "update-cart-promotions";
/**
 * This step updates the promotions applied on a cart.
 */
export declare const updateCartPromotionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateCartPromotionStepInput, null>;
//# sourceMappingURL=update-cart-promotions.d.ts.map