import { OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that claim items can be added to a claim.
 */
export declare const orderClaimItemValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const orderClaimItemWorkflowId = "claim-item";
/**
 * This workflow adds claim items to a claim.
 */
export declare const orderClaimItemWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.OrderClaimItemWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=claim-item.d.ts.map