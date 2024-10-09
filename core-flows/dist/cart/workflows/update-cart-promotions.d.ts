import { PromotionActions } from "@medusajs/framework/utils";
export type UpdateCartPromotionsWorkflowInput = {
    cart_id: string;
    promo_codes?: string[];
    action?: PromotionActions.ADD | PromotionActions.REMOVE | PromotionActions.REPLACE;
};
export declare const updateCartPromotionsWorkflowId = "update-cart-promotions";
/**
 * This workflow updates a cart's promotions.
 */
export declare const updateCartPromotionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateCartPromotionsWorkflowInput, unknown, any[]>;
//# sourceMappingURL=update-cart-promotions.d.ts.map