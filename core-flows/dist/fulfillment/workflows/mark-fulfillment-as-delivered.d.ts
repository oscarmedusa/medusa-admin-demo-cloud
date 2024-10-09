import { FulfillmentDTO } from "@medusajs/framework/types";
export declare const validateFulfillmentDeliverabilityStepId = "validate-fulfillment-deliverability";
/**
 * This step validates that if a fulfillment can be marked delivered
 */
export declare const validateFulfillmentDeliverabilityStep: import("@medusajs/framework/workflows-sdk").StepFunction<FulfillmentDTO, undefined>;
export declare const markFulfillmentAsDeliveredWorkflowId = "mark-fulfillment-as-delivered-workflow";
/**
 * This workflow marks fulfillment as delivered.
 */
export declare const markFulfillmentAsDeliveredWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    id: string;
}, FulfillmentDTO, []>;
//# sourceMappingURL=mark-fulfillment-as-delivered.d.ts.map