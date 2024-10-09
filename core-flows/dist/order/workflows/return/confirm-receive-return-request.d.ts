import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, ReturnDTO } from "@medusajs/framework/types";
export type ConfirmReceiveReturnRequestWorkflowInput = {
    return_id: string;
    confirmed_by?: string;
};
/**
 * This step validates that a return receival can be confirmed.
 */
export declare const confirmReceiveReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const confirmReturnReceiveWorkflowId = "confirm-return-receive";
/**
 * This workflow confirms a return receival request.
 */
export declare const confirmReturnReceiveWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ConfirmReceiveReturnRequestWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=confirm-receive-return-request.d.ts.map