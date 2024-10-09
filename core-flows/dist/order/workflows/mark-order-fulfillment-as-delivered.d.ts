import { FulfillmentDTO, OrderDTO } from "@medusajs/framework/types";
export declare const orderFulfillmentDeliverablilityValidationStepId = "order-fulfillment-deliverability-validation";
/**
 * This step validates that order & fulfillment are valid
 */
export declare const orderFulfillmentDeliverablilityValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO & {
        fulfillments: FulfillmentDTO[];
    };
    fulfillment: FulfillmentDTO;
}, unknown>;
export declare const markOrderFulfillmentAsDeliveredWorkflowId = "mark-order-fulfillment-as-delivered-workflow";
/**
 * This workflow marks a fulfillment in an order as delivered.
 */
export declare const markOrderFulfillmentAsDeliveredWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    orderId: string;
    fulfillmentId: string;
}, undefined, []>;
//# sourceMappingURL=mark-order-fulfillment-as-delivered.d.ts.map