import { FilterableRegionProps, UpdateRegionDTO } from "@medusajs/framework/types";
export type UpdateRegionsStepInput = {
    selector: FilterableRegionProps;
    update: UpdateRegionDTO;
};
export declare const updateRegionsStepId = "update-region";
/**
 * This step updates regions matching the specified filters.
 */
export declare const updateRegionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateRegionsStepInput, import("@medusajs/framework/types").RegionDTO[]>;
//# sourceMappingURL=update-regions.d.ts.map