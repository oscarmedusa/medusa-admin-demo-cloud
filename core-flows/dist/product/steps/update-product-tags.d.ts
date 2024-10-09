import { ProductTypes } from "@medusajs/framework/types";
export type UpdateProductTagsStepInput = {
    selector: ProductTypes.FilterableProductTagProps;
    update: ProductTypes.UpdateProductTagDTO;
};
export declare const updateProductTagsStepId = "update-product-tags";
/**
 * This step updates product tags matching the specified filters.
 */
export declare const updateProductTagsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateProductTagsStepInput, ProductTypes.ProductTagDTO[]>;
//# sourceMappingURL=update-product-tags.d.ts.map