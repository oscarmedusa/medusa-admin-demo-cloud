import { OrderChangeDTO, OrderDTO, OrderExchangeDTO, OrderPreviewDTO } from "@medusajs/framework/types";
export type ConfirmExchangeRequestWorkflowInput = {
    exchange_id: string;
    confirmed_by?: string;
};
/**
 * This step validates that a requested exchange can be confirmed.
 */
export declare const confirmExchangeRequestValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const confirmExchangeRequestWorkflowId = "confirm-exchange-request";
/**
 * This workflow confirms an exchange request.
 */
export declare const confirmExchangeRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ConfirmExchangeRequestWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=confirm-exchange-request.d.ts.map