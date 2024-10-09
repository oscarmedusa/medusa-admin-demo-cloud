import { CreateStockLocationInput } from "@medusajs/framework/types";
export interface CreateStockLocationsWorkflowInput {
    locations: CreateStockLocationInput[];
}
export declare const createStockLocationsWorkflowId = "create-stock-locations-workflow";
/**
 * This workflow creates one or more stock locations.
 */
export declare const createStockLocationsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateStockLocationsWorkflowInput, import("@medusajs/framework/types").StockLocationDTO[], []>;
//# sourceMappingURL=create-stock-locations.d.ts.map