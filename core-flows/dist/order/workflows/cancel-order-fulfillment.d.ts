import { AdditionalData, FulfillmentDTO, OrderDTO, OrderWorkflow } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
/**
 * This step validates that an order fulfillment can be canceled.
 */
export declare const cancelOrderFulfillmentValidateOrder: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO & {
        fulfillments: FulfillmentDTO[];
    };
    input: OrderWorkflow.CancelOrderFulfillmentWorkflowInput;
}, unknown>;
export declare const cancelOrderFulfillmentWorkflowId = "cancel-order-fulfillment";
/**
 * This workflow cancels an order's fulfillment.
 */
export declare const cancelOrderFulfillmentWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CancelOrderFulfillmentWorkflowInput & AdditionalData, undefined, import("@medusajs/framework/workflows-sdk").Hook<"orderFulfillmentCanceled", {
    fulfillment: WorkflowData<FulfillmentDTO>;
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=cancel-order-fulfillment.d.ts.map