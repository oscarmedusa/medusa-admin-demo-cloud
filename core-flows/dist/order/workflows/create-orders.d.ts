import { AdditionalData, CreateOrderDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export declare const createOrdersWorkflowId = "create-orders";
/**
 * This workflow creates an order.
 */
export declare const createOrdersWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateOrderDTO & AdditionalData, import("@medusajs/framework/types").OrderDTO, import("@medusajs/framework/workflows-sdk").Hook<"orderCreated", {
    order: WorkflowData<import("@medusajs/framework/types").OrderDTO>;
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-orders.d.ts.map