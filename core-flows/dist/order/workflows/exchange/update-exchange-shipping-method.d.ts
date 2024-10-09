import { OrderChangeDTO, OrderExchangeDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that an exchange's shipping method can be updated.
 */
export declare const updateExchangeShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    input: {
        exchange_id: string;
        action_id: string;
    };
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const updateExchangeShippingMethodWorkflowId = "update-exchange-shipping-method";
/**
 * This workflow updates an exchange's shipping method.
 */
export declare const updateExchangeShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateExchangeShippingMethodWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-exchange-shipping-method.d.ts.map