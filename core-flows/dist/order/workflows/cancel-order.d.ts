import { FulfillmentDTO, OrderDTO, OrderWorkflow } from "@medusajs/framework/types";
/**
 * This step validates that an order can be canceled.
 */
export declare const cancelValidateOrder: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    input: OrderWorkflow.CancelOrderWorkflowInput;
}, unknown>;
export declare const cancelOrderWorkflowId = "cancel-order";
/**
 * This workflow cancels an order.
 */
export declare const cancelOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CancelOrderWorkflowInput, undefined, import("@medusajs/framework/workflows-sdk").Hook<"orderCanceled", {
    order: OrderDTO & {
        fulfillments: FulfillmentDTO[];
    };
}>[]>;
//# sourceMappingURL=cancel-order.d.ts.map