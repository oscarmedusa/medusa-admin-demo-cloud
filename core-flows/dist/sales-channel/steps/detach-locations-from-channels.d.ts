export interface DetachLocationsFromSalesChannelsStepInput {
    links: {
        sales_channel_id: string;
        location_id: string;
    }[];
}
export declare const detachLocationsFromSalesChannelsStepId = "detach-locations-from-sales-channels";
/**
 * This step dismisses links between location and sales channel records.
 */
export declare const detachLocationsFromSalesChannelsStep: import("@medusajs/framework/workflows-sdk").StepFunction<DetachLocationsFromSalesChannelsStepInput, never[] | undefined>;
//# sourceMappingURL=detach-locations-from-channels.d.ts.map