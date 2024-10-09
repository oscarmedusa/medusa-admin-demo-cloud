import { OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return can be canceled.
 */
export declare const cancelReturnValidateOrder: import("@medusajs/framework/workflows-sdk").StepFunction<{
    orderReturn: ReturnDTO;
    input: OrderWorkflow.CancelReturnWorkflowInput;
}, unknown>;
export declare const cancelReturnWorkflowId = "cancel-return";
/**
 * This workflow cancels a return.
 */
export declare const cancelReturnWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CancelReturnWorkflowInput, unknown, any[]>;
//# sourceMappingURL=cancel-return.d.ts.map