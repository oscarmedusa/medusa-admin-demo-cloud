import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteProductTypesWorkflowInput = {
    ids: string[];
};
export declare const deleteProductTypesWorkflowId = "delete-product-types";
/**
 * This workflow deletes one or more product types.
 */
export declare const deleteProductTypesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteProductTypesWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"productTypesDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-product-types.d.ts.map