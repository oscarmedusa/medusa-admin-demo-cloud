export interface AddShippingMethodToCartWorkflowInput {
    cart_id: string;
    options: {
        id: string;
        data?: Record<string, unknown>;
    }[];
}
export declare const addShippingMethodToCartWorkflowId = "add-shipping-method-to-cart";
/**
 * This workflow adds shipping methods to a cart.
 */
export declare const addShippingMethodToWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<AddShippingMethodToCartWorkflowInput, unknown, any[]>;
//# sourceMappingURL=add-shipping-method-to-cart.d.ts.map