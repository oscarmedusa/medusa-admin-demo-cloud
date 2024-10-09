import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteProductsWorkflowInput = {
    ids: string[];
};
export declare const deleteProductsWorkflowId = "delete-products";
/**
 * This workflow deletes one or more products.
 */
export declare const deleteProductsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteProductsWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"productsDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-products.d.ts.map