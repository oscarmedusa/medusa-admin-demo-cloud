import { CreatePriceListPricesWorkflowDTO, PricingTypes } from "@medusajs/framework/types";
export declare const createPriceListPricesWorkflowId = "create-price-list-prices";
/**
 * This workflow creates prices in price lists.
 */
export declare const createPriceListPricesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    data: CreatePriceListPricesWorkflowDTO[];
}, PricingTypes.PriceDTO[], []>;
//# sourceMappingURL=create-price-list-prices.d.ts.map