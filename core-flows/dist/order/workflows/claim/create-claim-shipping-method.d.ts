import { BigNumberInput, OrderChangeDTO, OrderClaimDTO, OrderDTO, OrderPreviewDTO } from "@medusajs/framework/types";
/**
 * This step confirms that a shipping method can be created for a claim.
 */
export declare const createClaimShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderClaim: OrderClaimDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const createClaimShippingMethodWorkflowId = "create-claim-shipping-method";
/**
 * This workflow creates a shipping method for a claim.
 */
export declare const createClaimShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    return_id?: string;
    claim_id?: string;
    shipping_option_id: string;
    custom_amount?: BigNumberInput | null;
}, OrderPreviewDTO, []>;
//# sourceMappingURL=create-claim-shipping-method.d.ts.map