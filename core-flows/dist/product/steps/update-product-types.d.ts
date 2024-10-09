import { ProductTypes } from "@medusajs/framework/types";
export type UpdateProductTypesStepInput = {
    selector: ProductTypes.FilterableProductTypeProps;
    update: ProductTypes.UpdateProductTypeDTO;
};
export declare const updateProductTypesStepId = "update-product-types";
/**
 * This step updates product types matching the specified filters.
 */
export declare const updateProductTypesStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateProductTypesStepInput, ProductTypes.ProductTypeDTO[]>;
//# sourceMappingURL=update-product-types.d.ts.map