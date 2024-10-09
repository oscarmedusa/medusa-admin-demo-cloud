import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a new item can be updated from an order edit.
 */
export declare const updateOrderEditAddItemValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.UpdateOrderEditAddNewItemWorkflowInput;
}, unknown>;
export declare const updateOrderEditAddItemWorkflowId = "update-order-edit-add-item";
/**
 * This workflow updates a new item in the order edit.
 */
export declare const updateOrderEditAddItemWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateOrderEditAddNewItemWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-order-edit-add-item.d.ts.map