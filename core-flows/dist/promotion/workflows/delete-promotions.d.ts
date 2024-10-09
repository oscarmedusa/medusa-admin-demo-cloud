import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeletePromotionsWorkflowInput = {
    ids: string[];
};
export declare const deletePromotionsWorkflowId = "delete-promotions";
/**
 * This workflow deletes one or more promotions.
 */
export declare const deletePromotionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeletePromotionsWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"promotionsDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-promotions.d.ts.map