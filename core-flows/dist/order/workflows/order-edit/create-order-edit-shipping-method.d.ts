import { BigNumberInput, OrderChangeDTO, OrderDTO, OrderPreviewDTO } from "@medusajs/framework/types";
/**
 * This step validates that a shipping method can be created for an order edit.
 */
export declare const createOrderEditShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const createOrderEditShippingMethodWorkflowId = "create-order-edit-shipping-method";
/**
 * This workflow creates a shipping method for an order edit.
 */
export declare const createOrderEditShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    order_id: string;
    shipping_option_id: string;
    custom_amount?: BigNumberInput | null;
}, OrderPreviewDTO, []>;
//# sourceMappingURL=create-order-edit-shipping-method.d.ts.map