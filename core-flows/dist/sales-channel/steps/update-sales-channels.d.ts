import { FilterableSalesChannelProps, UpdateSalesChannelDTO } from "@medusajs/framework/types";
export type UpdateSalesChannelsStepInput = {
    selector: FilterableSalesChannelProps;
    update: UpdateSalesChannelDTO;
};
export declare const updateSalesChannelsStepId = "update-sales-channels";
/**
 * This step updates sales channels matching the specified filters.
 */
export declare const updateSalesChannelsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateSalesChannelsStepInput, import("@medusajs/framework/types").SalesChannelDTO[]>;
//# sourceMappingURL=update-sales-channels.d.ts.map