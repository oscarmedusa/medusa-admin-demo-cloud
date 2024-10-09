import { CartWorkflowDTO } from "@medusajs/framework/types";
export interface ValidateCartPaymentsStepInput {
    cart: CartWorkflowDTO;
}
export declare const validateCartPaymentsStepId = "validate-cart-payments";
/**
 * This step validates a cart's payment sessions. Their status must
 * be `pending` or `requires_more`.
 */
export declare const validateCartPaymentsStep: import("@medusajs/framework/workflows-sdk").StepFunction<ValidateCartPaymentsStepInput, import("@medusajs/framework/types").PaymentSessionDTO[]>;
//# sourceMappingURL=validate-cart-payments.d.ts.map