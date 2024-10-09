import { OrderChangeDTO, OrderClaimDTO, OrderDTO } from "@medusajs/framework/types";
export type CancelBeginOrderClaimWorkflowInput = {
    claim_id: string;
};
/**
 * This step validates that the requested claim can be canceled by checking that it's not canceled,
 * its order isn't canceled, and it hasn't been confirmed.
 */
export declare const cancelBeginOrderClaimValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const cancelBeginOrderClaimWorkflowId = "cancel-begin-order-claim";
/**
 * This workflow cancels a requested order claim.
 */
export declare const cancelBeginOrderClaimWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CancelBeginOrderClaimWorkflowInput, unknown, any[]>;
//# sourceMappingURL=cancel-begin-order-claim.d.ts.map