import { OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step confirms that a claim's items can be removed.
 */
export declare const removeClaimItemActionValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.DeleteOrderClaimItemActionWorkflowInput;
}, unknown>;
export declare const removeItemClaimActionWorkflowId = "remove-item-claim-action";
/**
 * This workflow removes claim items.
 */
export declare const removeItemClaimActionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteOrderClaimItemActionWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-claim-item-action.d.ts.map