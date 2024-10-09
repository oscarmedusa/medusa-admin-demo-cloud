import { CreateSalesChannelDTO } from "@medusajs/framework/types";
export interface CreateSalesChannelsStepInput {
    data: CreateSalesChannelDTO[];
}
export declare const createSalesChannelsStepId = "create-sales-channels";
/**
 * This step creates one or more sales channels.
 */
export declare const createSalesChannelsStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateSalesChannelsStepInput, import("@medusajs/framework/types").SalesChannelDTO[]>;
//# sourceMappingURL=create-sales-channels.d.ts.map