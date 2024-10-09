import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteCampaignsWorkflowInput = {
    ids: string[];
};
export declare const deleteCampaignsWorkflowId = "delete-campaigns";
/**
 * This workflow deletes one or more campaigns.
 */
export declare const deleteCampaignsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteCampaignsWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"campaignsDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-campaigns.d.ts.map