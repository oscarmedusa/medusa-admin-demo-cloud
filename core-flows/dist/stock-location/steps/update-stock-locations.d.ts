import { FilterableStockLocationProps, UpdateStockLocationInput } from "@medusajs/framework/types";
interface StepInput {
    selector: FilterableStockLocationProps;
    update: UpdateStockLocationInput;
}
export declare const updateStockLocationsStepId = "update-stock-locations-step";
/**
 * This step updates stock locations matching the specified filters.
 */
export declare const updateStockLocationsStep: import("@medusajs/framework/workflows-sdk").StepFunction<StepInput, import("@medusajs/framework/types").StockLocationDTO[]>;
export {};
//# sourceMappingURL=update-stock-locations.d.ts.map