import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that new items can be added to an order edit.
 */
export declare const orderEditAddNewItemValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const orderEditAddNewItemWorkflowId = "order-edit-add-new-item";
/**
 * This workflow adds new items to an order edit.
 */
export declare const orderEditAddNewItemWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.OrderEditAddNewItemWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=order-edit-add-new-item.d.ts.map