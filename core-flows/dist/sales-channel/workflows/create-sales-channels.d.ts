import { CreateSalesChannelDTO, SalesChannelDTO } from "@medusajs/framework/types";
export type CreateSalesChannelsWorkflowInput = {
    salesChannelsData: CreateSalesChannelDTO[];
};
export declare const createSalesChannelsWorkflowId = "create-sales-channels";
/**
 * This workflow creates one or more sales channels.
 */
export declare const createSalesChannelsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateSalesChannelsWorkflowInput, SalesChannelDTO[], []>;
//# sourceMappingURL=create-sales-channels.d.ts.map