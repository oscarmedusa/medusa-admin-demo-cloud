import { OrderChangeDTO, OrderDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that an exchange can be requested for an order.
 */
export declare const beginOrderExchangeValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
}, unknown>;
export declare const beginExchangeOrderWorkflowId = "begin-exchange-order";
/**
 * This workflow requests an order exchange.
 */
export declare const beginExchangeOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.BeginOrderExchangeWorkflowInput, OrderChangeDTO, []>;
//# sourceMappingURL=begin-order-exchange.d.ts.map