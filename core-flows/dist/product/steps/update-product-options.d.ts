import { ProductTypes } from "@medusajs/framework/types";
export type UpdateProductOptionsStepInput = {
    selector: ProductTypes.FilterableProductOptionProps;
    update: ProductTypes.UpdateProductOptionDTO;
};
export declare const updateProductOptionsStepId = "update-product-options";
/**
 * This step updates product options matching the specified filters.
 */
export declare const updateProductOptionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateProductOptionsStepInput, ProductTypes.ProductOptionDTO[]>;
//# sourceMappingURL=update-product-options.d.ts.map