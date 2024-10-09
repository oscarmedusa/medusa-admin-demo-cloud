import { CartDTO } from "@medusajs/framework/types";
export interface RefreshCartShippingMethodsStepInput {
    cart: CartDTO;
}
export declare const refreshCartShippingMethodsStepId = "refresh-cart-shipping-methods";
/**
 * This step refreshes the shipping methods of a cart.
 */
export declare const refreshCartShippingMethodsStep: import("@medusajs/framework/workflows-sdk").StepFunction<RefreshCartShippingMethodsStepInput, undefined>;
//# sourceMappingURL=refresh-cart-shipping-methods.d.ts.map