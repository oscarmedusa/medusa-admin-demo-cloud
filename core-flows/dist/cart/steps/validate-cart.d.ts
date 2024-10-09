import { CartDTO, CartWorkflowDTO } from "@medusajs/framework/types";
export interface ValidateCartStepInput {
    cart: CartWorkflowDTO | CartDTO;
}
export declare const validateCartStepId = "validate-cart";
/**
 * This step validates a cart's before editing it.
 */
export declare const validateCartStep: import("@medusajs/framework/workflows-sdk").StepFunction<ValidateCartStepInput, unknown>;
//# sourceMappingURL=validate-cart.d.ts.map