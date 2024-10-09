import { AdditionalData, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdateProductTagsWorkflowInput = {
    selector: ProductTypes.FilterableProductTypeProps;
    update: ProductTypes.UpdateProductTypeDTO;
} & AdditionalData;
export declare const updateProductTagsWorkflowId = "update-product-tags";
/**
 * This workflow updates product tags matching the specified filters.
 */
export declare const updateProductTagsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateProductTagsWorkflowInput, ProductTypes.ProductTagDTO[], import("@medusajs/framework/workflows-sdk").Hook<"productTagsUpdated", {
    product_tags: (ProductTypes.ProductTagDTO | WorkflowData<ProductTypes.ProductTagDTO>)[] & ProductTypes.ProductTagDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<ProductTypes.ProductTagDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductTagDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductTagDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=update-product-tags.d.ts.map