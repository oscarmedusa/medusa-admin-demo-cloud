import { OrderChangeDTO, OrderDTO, OrderExchangeDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a new item can be removed from an exchange.
 */
export declare const removeExchangeItemActionValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.DeleteOrderExchangeItemActionWorkflowInput;
}, unknown>;
export declare const removeItemExchangeActionWorkflowId = "remove-item-exchange-action";
/**
 * This workflow removes a new item in an exchange.
 */
export declare const removeItemExchangeActionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.DeleteOrderExchangeItemActionWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=remove-exchange-item-action.d.ts.map