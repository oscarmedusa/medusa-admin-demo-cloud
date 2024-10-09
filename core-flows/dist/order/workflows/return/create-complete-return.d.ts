import { OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a return can be created and completed for an order.
 */
export declare const createCompleteReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: any;
    input: OrderWorkflow.CreateOrderReturnWorkflowInput;
}, unknown>;
export declare const createAndCompleteReturnOrderWorkflowId = "create-complete-return-order";
/**
 * This workflow creates and completes a return.
 */
export declare const createAndCompleteReturnOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CreateOrderReturnWorkflowInput, unknown, any[]>;
//# sourceMappingURL=create-complete-return.d.ts.map