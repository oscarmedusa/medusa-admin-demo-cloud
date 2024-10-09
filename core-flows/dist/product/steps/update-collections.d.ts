import { ProductTypes } from "@medusajs/framework/types";
export type UpdateCollectionsStepInput = {
    selector: ProductTypes.FilterableProductCollectionProps;
    update: ProductTypes.UpdateProductCollectionDTO;
};
export declare const updateCollectionsStepId = "update-collections";
/**
 * This step updates collections matching the specified filters.
 */
export declare const updateCollectionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateCollectionsStepInput, ProductTypes.ProductCollectionDTO[]>;
//# sourceMappingURL=update-collections.d.ts.map