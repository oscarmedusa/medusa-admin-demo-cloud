import { OrderChangeDTO, OrderDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that the order associated with the claim isn't canceled.
 */
export declare const beginClaimOrderValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
}, unknown>;
export declare const beginClaimOrderWorkflowId = "begin-claim-order";
/**
 * This workflow creates an order claim in requested state.
 */
export declare const beginClaimOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.BeginOrderClaimWorkflowInput, OrderChangeDTO, []>;
//# sourceMappingURL=begin-order-claim.d.ts.map