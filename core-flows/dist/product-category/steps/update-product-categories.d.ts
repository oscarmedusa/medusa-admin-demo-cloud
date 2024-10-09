import { FilterableProductCategoryProps, UpdateProductCategoryDTO } from "@medusajs/framework/types";
export type UpdateProductCategoriesStepInput = {
    selector: FilterableProductCategoryProps;
    update: UpdateProductCategoryDTO;
};
export declare const updateProductCategoriesStepId = "update-product-categories";
/**
 * This step updates product categories matching specified filters.
 */
export declare const updateProductCategoriesStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateProductCategoriesStepInput, import("@medusajs/framework/types").ProductCategoryDTO[]>;
//# sourceMappingURL=update-product-categories.d.ts.map