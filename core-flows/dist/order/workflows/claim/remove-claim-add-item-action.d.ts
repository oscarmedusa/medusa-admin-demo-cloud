import { OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that new items can be removed from a claim.
 */
export declare const removeClaimAddItemActionValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.DeleteOrderClaimItemActionWorkflowInput;
}, unknown>;
export declare const removeAddItemClaimActionWorkflowId = "remove-item-claim-add-action";
/**
 * This workflow removes new items from a claim.
 */
export declare const removeAddItemClaimActionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteOrderClaimItemActionWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-claim-add-item-action.d.ts.map