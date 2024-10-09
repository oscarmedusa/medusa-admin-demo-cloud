import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteProductOptionsWorkflowInput = {
    ids: string[];
};
export declare const deleteProductOptionsWorkflowId = "delete-product-options";
/**
 * This workflow deletes one or more product options.
 */
export declare const deleteProductOptionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteProductOptionsWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"productOptionsDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-product-options.d.ts.map