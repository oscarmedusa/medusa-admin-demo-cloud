import { OrderClaimDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a confirmed claim can be canceled.
 */
export declare const cancelClaimValidateOrderStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    orderClaim: OrderClaimDTO;
    input: OrderWorkflow.CancelOrderClaimWorkflowInput;
}, unknown>;
export declare const cancelOrderClaimWorkflowId = "cancel-claim";
/**
 * This workflow cancels a confirmed order claim.
 */
export declare const cancelOrderClaimWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CancelOrderClaimWorkflowInput, unknown, any[]>;
//# sourceMappingURL=cancel-claim.d.ts.map