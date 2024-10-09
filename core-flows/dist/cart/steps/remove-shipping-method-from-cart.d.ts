export interface RemoveShippingMethodFromCartStepInput {
    shipping_method_ids: string[];
}
export declare const removeShippingMethodFromCartStepId = "remove-shipping-method-to-cart-step";
/**
 * This step removes shipping methods from a cart.
 */
export declare const removeShippingMethodFromCartStep: import("@medusajs/framework/workflows-sdk").StepFunction<RemoveShippingMethodFromCartStepInput, void | Record<string, string[]>>;
//# sourceMappingURL=remove-shipping-method-from-cart.d.ts.map