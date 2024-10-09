import { OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO } from "@medusajs/framework/types";
export type ConfirmClaimRequestWorkflowInput = {
    claim_id: string;
    confirmed_by?: string;
};
/**
 * This step validates that a requested claim can be confirmed.
 */
export declare const confirmClaimRequestValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const confirmClaimRequestWorkflowId = "confirm-claim-request";
/**
 * This workflow confirms a requested claim.
 */
export declare const confirmClaimRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ConfirmClaimRequestWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=confirm-claim-request.d.ts.map