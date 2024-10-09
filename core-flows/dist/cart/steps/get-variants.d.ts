import { FilterableProductVariantProps, FindConfig, ProductVariantDTO } from "@medusajs/framework/types";
export interface GetVariantsStepInput {
    filter?: FilterableProductVariantProps;
    config?: FindConfig<ProductVariantDTO>;
}
export declare const getVariantsStepId = "get-variants";
/**
 * This step retrieves variants matching the specified filters.
 */
export declare const getVariantsStep: import("@medusajs/framework/workflows-sdk").StepFunction<GetVariantsStepInput, ProductVariantDTO[]>;
//# sourceMappingURL=get-variants.d.ts.map