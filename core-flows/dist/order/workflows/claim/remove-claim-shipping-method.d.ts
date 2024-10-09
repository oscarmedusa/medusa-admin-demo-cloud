import { OrderChangeDTO, OrderClaimDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a claim's shipping method can be removed.
 */
export declare const removeClaimShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    input: {
        claim_id: string;
        action_id: string;
    };
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const removeClaimShippingMethodWorkflowId = "remove-claim-shipping-method";
/**
 * This workflow removes the shipping method of a claim.
 */
export declare const removeClaimShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteClaimShippingMethodWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-claim-shipping-method.d.ts.map