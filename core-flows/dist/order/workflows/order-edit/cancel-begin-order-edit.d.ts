import { OrderChangeDTO, OrderDTO } from "@medusajs/framework/types";
export type CancelBeginOrderEditWorkflowInput = {
    order_id: string;
};
/**
 * This step validates that a requested order edit can be canceled.
 */
export declare const cancelBeginOrderEditValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const cancelBeginOrderEditWorkflowId = "cancel-begin-order-edit";
/**
 * This workflow cancels a requested order edit.
 */
export declare const cancelBeginOrderEditWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CancelBeginOrderEditWorkflowInput, unknown, any[]>;
//# sourceMappingURL=cancel-begin-order-edit.d.ts.map