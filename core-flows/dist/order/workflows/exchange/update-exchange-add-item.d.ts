import { OrderChangeDTO, OrderDTO, OrderExchangeDTO, OrderPreviewDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a new item can be removed from an exchange.
 */
export declare const updateExchangeAddItemValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.UpdateExchangeAddNewItemWorkflowInput;
}, unknown>;
export declare const updateExchangeAddItemWorkflowId = "update-exchange-add-item";
/**
 * This workflow updates a new item in the exchange.
 */
export declare const updateExchangeAddItemWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateExchangeAddNewItemWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-exchange-add-item.d.ts.map