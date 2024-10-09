import { OrderExchangeDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that an exchange can be canceled.
 */
export declare const cancelExchangeValidateOrder: import("@medusajs/framework/workflows-sdk").StepFunction<{
    orderExchange: OrderExchangeDTO;
    input: OrderWorkflow.CancelOrderExchangeWorkflowInput;
}, unknown>;
export declare const cancelOrderExchangeWorkflowId = "cancel-exchange";
/**
 * This workflow cancels a confirmed exchange.
 */
export declare const cancelOrderExchangeWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CancelOrderExchangeWorkflowInput, unknown, any[]>;
//# sourceMappingURL=cancel-exchange.d.ts.map