import { CreateProductCategoryDTO } from "@medusajs/framework/types";
export type CreateProductCategoriesStepInput = {
    product_categories: CreateProductCategoryDTO[];
};
export declare const createProductCategoriesStepId = "create-product-categories";
/**
 * This step creates one or more product categories.
 */
export declare const createProductCategoriesStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateProductCategoriesStepInput, import("@medusajs/framework/types").ProductCategoryDTO[]>;
//# sourceMappingURL=create-product-categories.d.ts.map