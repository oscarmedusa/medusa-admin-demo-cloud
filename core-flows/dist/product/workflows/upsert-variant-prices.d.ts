import { CreatePricesDTO, UpdatePricesDTO } from "@medusajs/framework/types";
export type UpsertVariantPricesWorkflowInput = {
    variantPrices: {
        variant_id: string;
        product_id: string;
        prices?: (CreatePricesDTO | UpdatePricesDTO)[];
    }[];
    previousVariantIds: string[];
};
export declare const upsertVariantPricesWorkflowId = "upsert-variant-prices";
/**
 * This workflow creates or updates variants' prices.
 */
export declare const upsertVariantPricesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpsertVariantPricesWorkflowInput, unknown, any[]>;
//# sourceMappingURL=upsert-variant-prices.d.ts.map