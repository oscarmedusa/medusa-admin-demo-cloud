import { AdditionalData, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreateProductOptionsWorkflowInput = {
    product_options: ProductTypes.CreateProductOptionDTO[];
} & AdditionalData;
export declare const createProductOptionsWorkflowId = "create-product-options";
/**
 * This workflow creates one or more product options.
 */
export declare const createProductOptionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateProductOptionsWorkflowInput, ProductTypes.ProductOptionDTO[], import("@medusajs/framework/workflows-sdk").Hook<"productOptionsCreated", {
    product_options: (ProductTypes.ProductOptionDTO | WorkflowData<ProductTypes.ProductOptionDTO>)[] & ProductTypes.ProductOptionDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<ProductTypes.ProductOptionDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductOptionDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductOptionDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-product-options.d.ts.map