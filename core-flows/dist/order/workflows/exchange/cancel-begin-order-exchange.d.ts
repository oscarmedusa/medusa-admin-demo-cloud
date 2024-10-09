import { OrderChangeDTO, OrderDTO, OrderExchangeDTO } from "@medusajs/framework/types";
export type CancelBeginOrderExchangeWorkflowInput = {
    exchange_id: string;
};
/**
 * This step validates that a requested exchange can be canceled.
 */
export declare const cancelBeginOrderExchangeValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const cancelBeginOrderExchangeWorkflowId = "cancel-begin-order-exchange";
/**
 * This workflow cancels a requested order exchange.
 */
export declare const cancelBeginOrderExchangeWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CancelBeginOrderExchangeWorkflowInput, unknown, any[]>;
//# sourceMappingURL=cancel-begin-order-exchange.d.ts.map