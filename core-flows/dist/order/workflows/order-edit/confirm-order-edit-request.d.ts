import { OrderChangeDTO, OrderDTO, OrderPreviewDTO } from "@medusajs/framework/types";
export type ConfirmOrderEditRequestWorkflowInput = {
    order_id: string;
    confirmed_by?: string;
};
/**
 * This step validates that a requested order edit can be confirmed.
 */
export declare const confirmOrderEditRequestValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const confirmOrderEditRequestWorkflowId = "confirm-order-edit-request";
/**
 * This workflow confirms an order edit request.
 */
export declare const confirmOrderEditRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ConfirmOrderEditRequestWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=confirm-order-edit-request.d.ts.map