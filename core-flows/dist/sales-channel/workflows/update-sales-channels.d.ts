import { FilterableSalesChannelProps, SalesChannelDTO, UpdateSalesChannelDTO } from "@medusajs/framework/types";
export type UpdateSalesChannelsWorkflowInput = {
    selector: FilterableSalesChannelProps;
    update: UpdateSalesChannelDTO;
};
export declare const updateSalesChannelsWorkflowId = "update-sales-channels";
/**
 * This workflow updates sales channels matching the specified conditions.
 */
export declare const updateSalesChannelsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateSalesChannelsWorkflowInput, SalesChannelDTO[], []>;
//# sourceMappingURL=update-sales-channels.d.ts.map