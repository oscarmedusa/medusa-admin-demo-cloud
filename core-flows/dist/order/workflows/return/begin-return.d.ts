import { OrderChangeDTO, OrderDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that a return can be created for an order.
 */
export declare const beginReturnOrderValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
}, unknown>;
export declare const beginReturnOrderWorkflowId = "begin-return-order";
/**
 * This workflow requests a return.
 */
export declare const beginReturnOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.BeginOrderReturnWorkflowInput, OrderChangeDTO, []>;
//# sourceMappingURL=begin-return.d.ts.map