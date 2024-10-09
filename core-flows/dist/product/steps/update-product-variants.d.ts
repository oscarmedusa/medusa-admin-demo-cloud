import { ProductTypes } from "@medusajs/framework/types";
export type UpdateProductVariantsStepInput = {
    selector: ProductTypes.FilterableProductVariantProps;
    update: ProductTypes.UpdateProductVariantDTO;
} | {
    product_variants: ProductTypes.UpsertProductVariantDTO[];
};
export declare const updateProductVariantsStepId = "update-product-variants";
/**
 * This step updates one or more product variants.
 */
export declare const updateProductVariantsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateProductVariantsStepInput, ProductTypes.ProductVariantDTO[]>;
//# sourceMappingURL=update-product-variants.d.ts.map