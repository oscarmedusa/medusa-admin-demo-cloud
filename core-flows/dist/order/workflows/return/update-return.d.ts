import { OrderChangeDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return can be updated
 */
export declare const updateReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const updateReturnWorkflowId = "update-return";
/**
 * This workflow updates a return.
 */
export declare const updateReturnWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateReturnWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-return.d.ts.map