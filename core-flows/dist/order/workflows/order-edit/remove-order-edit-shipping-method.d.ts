import { OrderChangeDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a shipping method can be removed from an order edit.
 */
export declare const removeOrderEditShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    input: {
        order_id: string;
        action_id: string;
    };
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const removeOrderEditShippingMethodWorkflowId = "remove-order-edit-shipping-method";
/**
 * This workflow removes a shipping method of an order edit.
 */
export declare const removeOrderEditShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteOrderEditShippingMethodWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-order-edit-shipping-method.d.ts.map