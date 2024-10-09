import { CreateShippingMethodDTO } from "@medusajs/framework/types";
export interface AddShippingMethodToCartStepInput {
    shipping_methods: CreateShippingMethodDTO[];
}
export declare const addShippingMethodToCartStepId = "add-shipping-method-to-cart-step";
/**
 * This step adds shipping methods to a cart.
 */
export declare const addShippingMethodToCartStep: import("@medusajs/framework/workflows-sdk").StepFunction<AddShippingMethodToCartStepInput, import("@medusajs/framework/types").CartShippingMethodDTO[]>;
//# sourceMappingURL=add-shipping-method-to-cart.d.ts.map