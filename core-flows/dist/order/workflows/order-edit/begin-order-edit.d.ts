import { OrderChangeDTO, OrderDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that an order-edit can be requested for an order.
 */
export declare const beginOrderEditValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
}, unknown>;
export declare const beginOrderEditOrderWorkflowId = "begin-order-edit-order";
/**
 * This workflow requests an order order-edit.
 */
export declare const beginOrderEditOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.BeginorderEditWorkflowInput, OrderChangeDTO, []>;
//# sourceMappingURL=begin-order-edit.d.ts.map