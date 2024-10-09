import { ProductTypes } from "@medusajs/framework/types";
export type UpdateProductsStepInput = {
    selector: ProductTypes.FilterableProductProps;
    update: ProductTypes.UpdateProductDTO;
} | {
    products: ProductTypes.UpsertProductDTO[];
};
export declare const updateProductsStepId = "update-products";
/**
 * This step updates one or more products.
 */
export declare const updateProductsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateProductsStepInput, ProductTypes.ProductDTO[]>;
//# sourceMappingURL=update-products.d.ts.map