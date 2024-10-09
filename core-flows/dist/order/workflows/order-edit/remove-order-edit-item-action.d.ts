import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a new item can be removed from an order edit.
 */
export declare const removeOrderEditItemActionValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.DeleteOrderEditItemActionWorkflowInput;
}, unknown>;
export declare const removeItemOrderEditActionWorkflowId = "remove-item-order edit-action";
/**
 * This workflow removes a new item in an order edit.
 */
export declare const removeItemOrderEditActionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteOrderEditItemActionWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-order-edit-item-action.d.ts.map