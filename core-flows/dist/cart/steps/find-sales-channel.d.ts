import { SalesChannelDTO } from "@medusajs/framework/types";
export interface FindSalesChannelStepInput {
    salesChannelId?: string | null;
}
export declare const findSalesChannelStepId = "find-sales-channel";
/**
 * This step either retrieves a sales channel either using the ID provided as an input, or, if no ID
 * is provided, the default sales channel of the first store.
 */
export declare const findSalesChannelStep: import("@medusajs/framework/workflows-sdk").StepFunction<FindSalesChannelStepInput, SalesChannelDTO | null>;
//# sourceMappingURL=find-sales-channel.d.ts.map