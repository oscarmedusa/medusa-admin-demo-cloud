import { StockLocationDTO, UpdateStockLocationInput, FilterableStockLocationProps } from "@medusajs/framework/types";
export interface UpdateStockLocationsWorkflowInput {
    selector: FilterableStockLocationProps;
    update: UpdateStockLocationInput;
}
export declare const updateStockLocationsWorkflowId = "update-stock-locations-workflow";
/**
 * This workflow updates stock locations matching the specified filters.
 */
export declare const updateStockLocationsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateStockLocationsWorkflowInput, StockLocationDTO[], []>;
//# sourceMappingURL=update-stock-locations.d.ts.map