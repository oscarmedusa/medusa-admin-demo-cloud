import { OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a claim's item can be updated.
 */
export declare const updateClaimItemValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.UpdateClaimItemWorkflowInput;
}, unknown>;
export declare const updateClaimItemWorkflowId = "update-claim-item";
/**
 * This workflow updates a claim item.
 */
export declare const updateClaimItemWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateClaimItemWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-claim-item.d.ts.map