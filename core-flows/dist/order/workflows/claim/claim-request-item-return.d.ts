import { OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that items can be requested to return as part of a claim.
 */
export declare const orderClaimRequestItemReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
    items: OrderWorkflow.OrderClaimRequestItemReturnWorkflowInput["items"];
}, unknown>;
export declare const orderClaimRequestItemReturnWorkflowId = "claim-request-item-return";
/**
 * This workflow requests one or more items to be returned as part of a claim.
 */
export declare const orderClaimRequestItemReturnWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.OrderClaimRequestItemReturnWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=claim-request-item-return.d.ts.map