import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteProductTagsWorkflowInput = {
    ids: string[];
};
export declare const deleteProductTagsWorkflowId = "delete-product-tags";
/**
 * This workflow deletes one or more product tags.
 */
export declare const deleteProductTagsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteProductTagsWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"productTagsDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-product-tags.d.ts.map