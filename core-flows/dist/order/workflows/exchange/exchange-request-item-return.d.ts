import { OrderChangeDTO, OrderDTO, OrderExchangeDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that items can be returned as part of an exchange.
 */
export declare const exchangeRequestItemReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
    items: OrderWorkflow.OrderExchangeRequestItemReturnWorkflowInput["items"];
}, unknown>;
export declare const orderExchangeRequestItemReturnWorkflowId = "exchange-request-item-return";
/**
 * This workflow adds items to be retuned as part of the exchange.
 */
export declare const orderExchangeRequestItemReturnWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.OrderExchangeRequestItemReturnWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=exchange-request-item-return.d.ts.map