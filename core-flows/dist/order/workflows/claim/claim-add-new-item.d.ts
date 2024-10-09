import { OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a new item can be added to the claim.
 */
export declare const orderClaimAddNewItemValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const orderClaimAddNewItemWorkflowId = "claim-add-new-item";
/**
 * This workflow adds a new item to a claim.
 */
export declare const orderClaimAddNewItemWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.OrderClaimAddNewItemWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=claim-add-new-item.d.ts.map