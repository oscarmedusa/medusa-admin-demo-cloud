import { OrderChangeDTO, OrderClaimDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a claim's shipping method can be updated.
 */
export declare const updateClaimShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    input: {
        claim_id: string;
        action_id: string;
    };
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const updateClaimShippingMethodWorkflowId = "update-claim-shipping-method";
/**
 * This workflow updates a claim's shipping method.
 */
export declare const updateClaimShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateClaimShippingMethodWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-claim-shipping-method.d.ts.map