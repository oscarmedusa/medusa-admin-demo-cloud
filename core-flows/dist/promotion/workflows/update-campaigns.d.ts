import { AdditionalData, UpdateCampaignDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdateCampaignsWorkflowInput = {
    campaignsData: UpdateCampaignDTO[];
} & AdditionalData;
export declare const updateCampaignsWorkflowId = "update-campaigns";
/**
 * This workflow updates one or more campaigns.
 */
export declare const updateCampaignsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateCampaignsWorkflowInput, import("@medusajs/framework/types").CampaignDTO[], import("@medusajs/framework/workflows-sdk").Hook<"campaignsUpdated", {
    campaigns: (import("@medusajs/framework/types").CampaignDTO | WorkflowData<import("@medusajs/framework/types").CampaignDTO>)[] & import("@medusajs/framework/types").CampaignDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<import("@medusajs/framework/types").CampaignDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").CampaignDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").CampaignDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=update-campaigns.d.ts.map