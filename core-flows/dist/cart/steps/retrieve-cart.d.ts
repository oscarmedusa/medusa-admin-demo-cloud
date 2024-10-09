import { CartDTO, FindConfig } from "@medusajs/framework/types";
export interface RetrieveCartStepInput {
    id: string;
    config?: FindConfig<CartDTO>;
}
export declare const retrieveCartStepId = "retrieve-cart";
/**
 * This step retrieves a cart's details.
 */
export declare const retrieveCartStep: import("@medusajs/framework/workflows-sdk").StepFunction<RetrieveCartStepInput, CartDTO>;
//# sourceMappingURL=retrieve-cart.d.ts.map