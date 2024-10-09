import { AdditionalData, CreateCartWorkflowInputDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export declare const createCartWorkflowId = "create-cart";
/**
 * This workflow creates a cart.
 */
export declare const createCartWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateCartWorkflowInputDTO & AdditionalData, import("@medusajs/framework/types").CartDTO, import("@medusajs/framework/workflows-sdk").Hook<"cartCreated", {
    cart: WorkflowData<import("@medusajs/framework/types").CartDTO>;
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-carts.d.ts.map