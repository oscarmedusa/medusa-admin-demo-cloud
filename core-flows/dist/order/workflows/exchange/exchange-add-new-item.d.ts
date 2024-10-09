import { OrderChangeDTO, OrderDTO, OrderExchangeDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that new items can be added to an exchange.
 */
export declare const exchangeAddNewItemValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const orderExchangeAddNewItemWorkflowId = "exchange-add-new-item";
/**
 * This workflow adds new items to an exchange.
 */
export declare const orderExchangeAddNewItemWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.OrderExchangeAddNewItemWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=exchange-add-new-item.d.ts.map