import { OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a claim's new item can be updated.
 */
export declare const updateClaimAddItemValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.UpdateClaimAddNewItemWorkflowInput;
}, unknown>;
export declare const updateClaimAddItemWorkflowId = "update-claim-add-item";
/**
 * This workflow updates a claim's new item.
 */
export declare const updateClaimAddItemWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateClaimAddNewItemWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-claim-add-item.d.ts.map