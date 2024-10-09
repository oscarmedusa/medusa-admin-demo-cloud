import { OrderChangeDTO, OrderDTO, ReturnDTO } from "@medusajs/framework/types";
export type CancelRequestReturnWorkflowInput = {
    return_id: string;
};
/**
 * This step validates that a requested return can be canceled.
 */
export declare const cancelRequestReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const cancelReturnRequestWorkflowId = "cancel-return-request";
/**
 * This workflow cancels a requested return.
 */
export declare const cancelReturnRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CancelRequestReturnWorkflowInput, unknown, any[]>;
//# sourceMappingURL=cancel-request-return.d.ts.map