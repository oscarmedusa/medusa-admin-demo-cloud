export type CancelOrdersStepInput = {
    orderIds: string[];
    canceled_by?: string;
};
export declare const cancelOrdersStepId = "cancel-orders";
/**
 * This step cancels one or more orders.
 */
export declare const cancelOrdersStep: import("@medusajs/framework/workflows-sdk").StepFunction<CancelOrdersStepInput, import("@medusajs/framework/types").OrderDTO[]>;
//# sourceMappingURL=cancel-orders.d.ts.map