import { CartDTO } from "@medusajs/framework/types";
export interface ValidateCartShippingOptionsStepInput {
    cart: CartDTO;
    shippingOptionsContext: {
        enabled_in_store?: "true" | "false";
        is_return?: "true" | "false";
    };
    option_ids: string[];
}
export declare const validateCartShippingOptionsStepId = "validate-cart-shipping-options";
/**
 * This step validates shipping options to ensure they can be applied on a cart.
 */
export declare const validateCartShippingOptionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<ValidateCartShippingOptionsStepInput, undefined>;
//# sourceMappingURL=validate-cart-shipping-options.d.ts.map