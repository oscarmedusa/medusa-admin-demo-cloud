import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return item can be removed.
 */
export declare const removeReturnItemActionValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.DeleteRequestItemReturnWorkflowInput;
}, unknown>;
export declare const removeItemReturnActionWorkflowId = "remove-item-return-action";
/**
 * This workflow removes a return item.
 */
export declare const removeItemReturnActionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteRequestItemReturnWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-item-return-action.d.ts.map