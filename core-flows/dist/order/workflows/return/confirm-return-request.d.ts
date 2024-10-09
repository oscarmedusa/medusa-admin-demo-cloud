import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, ReturnDTO } from "@medusajs/framework/types";
export type ConfirmReturnRequestWorkflowInput = {
    return_id: string;
    confirmed_by?: string;
};
/**
 * This step validates that a return request can be confirmed.
 */
export declare const confirmReturnRequestValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const confirmReturnRequestWorkflowId = "confirm-return-request";
/**
 * This workflow confirms a return request.
 */
export declare const confirmReturnRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ConfirmReturnRequestWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=confirm-return-request.d.ts.map