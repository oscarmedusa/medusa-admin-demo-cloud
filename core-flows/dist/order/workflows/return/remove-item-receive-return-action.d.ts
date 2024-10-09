import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return receival's item can be removed.
 */
export declare const removeItemReceiveReturnActionValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.DeleteRequestItemReceiveReturnWorkflowInput;
}, unknown>;
export declare const removeItemReceiveReturnActionWorkflowId = "remove-item-receive-return-action";
/**
 * This workflow removes an item from a return receival.
 */
export declare const removeItemReceiveReturnActionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteRequestItemReceiveReturnWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-item-receive-return-action.d.ts.map