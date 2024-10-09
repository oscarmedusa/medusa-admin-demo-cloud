import { OrderDTO } from "@medusajs/framework/types";
export type CompleteCartWorkflowInput = {
    id: string;
};
export declare const completeCartWorkflowId = "complete-cart";
/**
 * This workflow completes a cart.
 */
export declare const completeCartWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CompleteCartWorkflowInput, OrderDTO, []>;
//# sourceMappingURL=complete-cart.d.ts.map