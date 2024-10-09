import { OrderChangeDTO, OrderDTO, OrderPreviewDTO } from "@medusajs/framework/types";
export type OrderEditRequestWorkflowInput = {
    order_id: string;
    requested_by?: string;
};
/**
 * This step validates that a order edit can be requested.
 */
export declare const requestOrderEditRequestValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const requestOrderEditRequestWorkflowId = "order-edit-request";
/**
 * This workflow requests an order edit request.
 */
export declare const requestOrderEditRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderEditRequestWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=request-order-edit.d.ts.map