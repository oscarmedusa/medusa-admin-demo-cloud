import { BatchPriceListPricesWorkflowDTO, BatchPriceListPricesWorkflowResult } from "@medusajs/framework/types";
export declare const batchPriceListPricesWorkflowId = "batch-price-list-prices";
/**
 * This workflow manages price lists' prices by creating, updating, or removing them.
 */
export declare const batchPriceListPricesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    data: BatchPriceListPricesWorkflowDTO;
}, BatchPriceListPricesWorkflowResult, []>;
//# sourceMappingURL=batch-price-list-prices.d.ts.map