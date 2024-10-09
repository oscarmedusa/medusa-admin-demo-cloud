export interface DetachProductsFromSalesChannelsStepInput {
    links: {
        sales_channel_id: string;
        product_id: string;
    }[];
}
export declare const detachProductsFromSalesChannelsStepId = "detach-products-from-sales-channels-step";
/**
 * This step dismisses links between product and sales channel records.
 */
export declare const detachProductsFromSalesChannelsStep: import("@medusajs/framework/workflows-sdk").StepFunction<DetachProductsFromSalesChannelsStepInput, undefined>;
//# sourceMappingURL=detach-products-from-sales-channels.d.ts.map