import { OrderChangeDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return's shipping method can be updated.
 */
export declare const updateReturnShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    input: {
        return_id: string;
        action_id: string;
    };
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const updateReturnShippingMethodWorkflowId = "update-return-shipping-method";
/**
 * This workflow updates the shipping method of a return.
 */
export declare const updateReturnShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateReturnShippingMethodWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-return-shipping-method.d.ts.map