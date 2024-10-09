export interface AssociateLocationsWithSalesChannelsStepInput {
    links: {
        sales_channel_id: string;
        location_id: string;
    }[];
}
export declare const associateLocationsWithSalesChannelsStepId = "associate-locations-with-sales-channels-step";
/**
 * This step creates links between locations and sales channel records.
 */
export declare const associateLocationsWithSalesChannelsStep: import("@medusajs/framework/workflows-sdk").StepFunction<AssociateLocationsWithSalesChannelsStepInput, unknown[]>;
//# sourceMappingURL=associate-locations-with-channels.d.ts.map