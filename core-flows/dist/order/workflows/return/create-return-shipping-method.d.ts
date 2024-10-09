import { BigNumberInput, OrderChangeDTO, OrderDTO, OrderPreviewDTO, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a shipping method can be created for a return.
 */
export declare const createReturnShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const createReturnShippingMethodWorkflowId = "create-return-shipping-method";
/**
 * This workflow creates a shipping method for a return.
 */
export declare const createReturnShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    return_id: string;
    claim_id?: string;
    exchange_id?: string;
    shipping_option_id: string;
    custom_amount?: BigNumberInput | null;
}, OrderPreviewDTO, []>;
//# sourceMappingURL=create-return-shipping-method.d.ts.map