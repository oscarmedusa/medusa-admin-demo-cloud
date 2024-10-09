import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteCollectionsWorkflowInput = {
    ids: string[];
};
export declare const deleteCollectionsWorkflowId = "delete-collections";
/**
 * This workflow deletes one or more collection.
 */
export declare const deleteCollectionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteCollectionsWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"collectionsDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-collections.d.ts.map