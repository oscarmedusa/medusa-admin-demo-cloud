import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that an item can be updated from an order edit.
 */
export declare const updateOrderEditItemQuantityValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.UpdateOrderEditItemQuantityWorkflowInput;
}, unknown>;
export declare const updateOrderEditItemQuantityWorkflowId = "update-order-edit-update-quantity";
/**
 * This workflow updates a new item in the order edit.
 */
export declare const updateOrderEditItemQuantityWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateOrderEditItemQuantityWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-order-edit-item-quantity.d.ts.map