import { OrderChangeDTO, OrderDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return can be received.
 */
export declare const beginReceiveReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    orderReturn: ReturnDTO;
    order: OrderDTO;
}, unknown>;
export declare const beginReceiveReturnWorkflowId = "begin-receive-return";
/**
 * This workflow requests return receival.
 */
export declare const beginReceiveReturnWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.BeginReceiveOrderReturnWorkflowInput, OrderChangeDTO, []>;
//# sourceMappingURL=begin-receive-return.d.ts.map