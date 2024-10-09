import { OrderDTO } from "@medusajs/framework/types";
export type ArchiveOrdersWorkflowInput = {
    orderIds: string[];
};
export declare const archiveOrderWorkflowId = "archive-order-workflow";
/**
 * This workflow archives an order.
 */
export declare const archiveOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ArchiveOrdersWorkflowInput, OrderDTO[], []>;
//# sourceMappingURL=archive-orders.d.ts.map