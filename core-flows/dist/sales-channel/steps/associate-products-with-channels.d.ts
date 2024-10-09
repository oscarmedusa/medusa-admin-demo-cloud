export interface AssociateProductsWithSalesChannelsStepInput {
    links: {
        sales_channel_id: string;
        product_id: string;
    }[];
}
export declare const associateProductsWithSalesChannelsStepId = "associate-products-with-channels";
/**
 * This step creates links between products and sales channel records.
 */
export declare const associateProductsWithSalesChannelsStep: import("@medusajs/framework/workflows-sdk").StepFunction<AssociateProductsWithSalesChannelsStepInput, unknown[]>;
//# sourceMappingURL=associate-products-with-channels.d.ts.map