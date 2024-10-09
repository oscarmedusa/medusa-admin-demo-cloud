import { CreateSalesChannelDTO } from "@medusajs/framework/types";
export interface CreateDefaultSalesChannelStepInput {
    data: CreateSalesChannelDTO;
}
export declare const createDefaultSalesChannelStepId = "create-default-sales-channel";
/**
 * This step creates a default sales channel.
 */
export declare const createDefaultSalesChannelStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateDefaultSalesChannelStepInput, import("@medusajs/framework/types").SalesChannelDTO | undefined>;
//# sourceMappingURL=create-default-sales-channel.d.ts.map