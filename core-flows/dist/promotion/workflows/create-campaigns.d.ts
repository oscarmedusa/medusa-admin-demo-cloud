import { AdditionalData, CreateCampaignDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreateCampaignsWorkflowInput = {
    campaignsData: CreateCampaignDTO[];
} & AdditionalData;
export declare const createCampaignsWorkflowId = "create-campaigns";
/**
 * This workflow creates one or more campaigns.
 */
export declare const createCampaignsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateCampaignsWorkflowInput, import("@medusajs/framework/types").CampaignDTO[], import("@medusajs/framework/workflows-sdk").Hook<"campaignsCreated", {
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
//# sourceMappingURL=create-campaigns.d.ts.map