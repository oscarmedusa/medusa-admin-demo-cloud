import { AdditionalData, UpdateCartWorkflowInputDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export declare const updateCartWorkflowId = "update-cart";
/**
 * This workflow updates a cart.
 */
export declare const updateCartWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateCartWorkflowInputDTO & AdditionalData, undefined, import("@medusajs/framework/workflows-sdk").Hook<"cartUpdated", {
    cart: any;
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=update-cart.d.ts.map