import { AdditionalData, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreateProductTagsWorkflowInput = {
    product_tags: ProductTypes.CreateProductTagDTO[];
} & AdditionalData;
export declare const createProductTagsWorkflowId = "create-product-tags";
/**
 * This workflow creates one or more product tags.
 */
export declare const createProductTagsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateProductTagsWorkflowInput, ProductTypes.ProductTagDTO[], import("@medusajs/framework/workflows-sdk").Hook<"productTagsCreated", {
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
//# sourceMappingURL=create-product-tags.d.ts.map