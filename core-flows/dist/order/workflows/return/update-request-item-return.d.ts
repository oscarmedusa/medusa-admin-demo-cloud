import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that an item in a return can be updated.
 */
export declare const updateRequestItemReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.UpdateRequestItemReturnWorkflowInput;
}, unknown>;
export declare const updateRequestItemReturnWorkflowId = "update-request-item-return";
/**
 * This workflow updates an item in a return.
 */
export declare const updateRequestItemReturnWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateRequestItemReturnWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-request-item-return.d.ts.map