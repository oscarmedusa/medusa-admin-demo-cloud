import { OrderChangeDTO, OrderExchangeDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a shipping method can be removed from an exchange.
 */
export declare const removeExchangeShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    input: {
        exchange_id: string;
        action_id: string;
    };
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const removeExchangeShippingMethodWorkflowId = "remove-exchange-shipping-method";
/**
 * This workflow removes a shipping method of an exchange.
 */
export declare const removeExchangeShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteExchangeShippingMethodWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-exchange-shipping-method.d.ts.map