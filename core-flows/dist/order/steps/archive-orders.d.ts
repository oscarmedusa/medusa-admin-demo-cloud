export type ArchiveOrdersStepInput = {
    orderIds: string[];
};
export declare const archiveOrdersStepId = "archive-orders";
/**
 * This step archives one or more orders.
 */
export declare const archiveOrdersStep: import("@medusajs/framework/workflows-sdk").StepFunction<ArchiveOrdersStepInput, import("@medusajs/framework/types").OrderDTO[]>;
//# sourceMappingURL=archive-orders.d.ts.map