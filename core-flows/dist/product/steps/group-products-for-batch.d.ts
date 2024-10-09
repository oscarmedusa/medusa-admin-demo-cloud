import { HttpTypes } from "@medusajs/framework/types";
export declare const groupProductsForBatchStepId = "group-products-for-batch";
/**
 * This step groups products to be created and updated.
 */
export declare const groupProductsForBatchStep: import("@medusajs/framework/workflows-sdk").StepFunction<(HttpTypes.AdminCreateProduct & {
    id?: string;
})[], {
    create: HttpTypes.AdminCreateProduct[];
    update: (HttpTypes.AdminUpdateProduct & {
        id: string;
    })[];
}>;
//# sourceMappingURL=group-products-for-batch.d.ts.map