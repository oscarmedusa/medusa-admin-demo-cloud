export type CompleteOrdersStepInput = {
    orderIds: string[];
};
export declare const completeOrdersStepId = "complete-orders";
/**
 * This step completes one or more orders.
 */
export declare const completeOrdersStep: import("@medusajs/framework/workflows-sdk").StepFunction<CompleteOrdersStepInput, import("@medusajs/framework/types").OrderDTO[]>;
//# sourceMappingURL=complete-orders.d.ts.map