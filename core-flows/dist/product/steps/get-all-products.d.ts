import { FilterableProductProps } from "@medusajs/framework/types";
export type GetAllProductsStepInput = {
    select: string[];
    filter?: FilterableProductProps;
};
export declare const getAllProductsStepId = "get-all-products";
/**
 * This step retrieves all products.
 */
export declare const getAllProductsStep: import("@medusajs/framework/workflows-sdk").StepFunction<GetAllProductsStepInput, any[]>;
//# sourceMappingURL=get-all-products.d.ts.map