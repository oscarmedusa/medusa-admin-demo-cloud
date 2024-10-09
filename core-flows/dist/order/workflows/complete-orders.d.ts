import { WorkflowData } from "@medusajs/framework/workflows-sdk";
import { AdditionalData } from "@medusajs/framework/types";
export type CompleteOrdersWorkflowInput = {
    orderIds: string[];
} & AdditionalData;
export declare const completeOrderWorkflowId = "complete-order-workflow";
/**
 * This workflow completes one or more orders.
 */
export declare const completeOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CompleteOrdersWorkflowInput, import("@medusajs/framework/types").OrderDTO[], import("@medusajs/framework/workflows-sdk").Hook<"ordersCompleted", {
    orders: (import("@medusajs/framework/types").OrderDTO | WorkflowData<import("@medusajs/framework/types").OrderDTO>)[] & import("@medusajs/framework/types").OrderDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<import("@medusajs/framework/types").OrderDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").OrderDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").OrderDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=complete-orders.d.ts.map