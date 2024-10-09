import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that item quantity updated can be added to an order edit.
 */
export declare const orderEditUpdateItemQuantityValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const orderEditUpdateItemQuantityWorkflowId = "order-edit-update-item-quantity";
/**
 * This workflow update item's quantity of an order.
 */
export declare const orderEditUpdateItemQuantityWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.OrderEditUpdateItemQuantityWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=order-edit-update-item-quantity.d.ts.map