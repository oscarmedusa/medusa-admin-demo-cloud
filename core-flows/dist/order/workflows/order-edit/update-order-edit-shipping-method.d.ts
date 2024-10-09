import { OrderChangeDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that an order edit's shipping method can be updated.
 */
export declare const updateOrderEditShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    input: {
        order_id: string;
        action_id: string;
    };
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const updateOrderEditShippingMethodWorkflowId = "update-order-edit-shipping-method";
/**
 * This workflow updates an order edit's shipping method.
 */
export declare const updateOrderEditShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateOrderEditShippingMethodWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-order-edit-shipping-method.d.ts.map