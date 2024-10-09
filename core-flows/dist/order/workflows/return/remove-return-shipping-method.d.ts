import { OrderChangeDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a shipping method can be removed from a return.
 */
export declare const removeReturnShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    input: {
        return_id: string;
        action_id: string;
    };
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const removeReturnShippingMethodWorkflowId = "remove-return-shipping-method";
/**
 * This workflow removes a shipping method from a return.
 */
export declare const removeReturnShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteReturnShippingMethodWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-return-shipping-method.d.ts.map