import { OrderWorkflow } from "@medusajs/framework/types";
import { ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return can be received and completed.
 */
export declare const receiveCompleteReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    orderReturn: any;
    input: OrderWorkflow.ReceiveCompleteOrderReturnWorkflowInput;
}, unknown>;
export declare const receiveAndCompleteReturnOrderWorkflowId = "receive-return-order";
/**
 * This workflow marks a return as received and completes it.
 */
export declare const receiveAndCompleteReturnOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.ReceiveCompleteOrderReturnWorkflowInput, ReturnDTO | undefined, []>;
//# sourceMappingURL=receive-complete-return.d.ts.map