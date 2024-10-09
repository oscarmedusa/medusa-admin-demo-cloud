import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteProductVariantsWorkflowInput = {
    ids: string[];
};
export declare const deleteProductVariantsWorkflowId = "delete-product-variants";
/**
 * This workflow deletes one or more product variants.
 */
export declare const deleteProductVariantsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteProductVariantsWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"productVariantsDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-product-variants.d.ts.map