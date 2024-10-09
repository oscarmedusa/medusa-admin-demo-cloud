import { AdditionalData, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdateProductOptionsWorkflowInput = {
    selector: ProductTypes.FilterableProductOptionProps;
    update: ProductTypes.UpdateProductOptionDTO;
} & AdditionalData;
export declare const updateProductOptionsWorkflowId = "update-product-options";
/**
 * This workflow updates product options matching the specified filters.
 */
export declare const updateProductOptionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateProductOptionsWorkflowInput, ProductTypes.ProductOptionDTO[], import("@medusajs/framework/workflows-sdk").Hook<"productOptionsUpdated", {
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
//# sourceMappingURL=update-product-options.d.ts.map