import { AdditionalData, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
type UpdateProductTypesWorkflowInput = {
    selector: ProductTypes.FilterableProductTypeProps;
    update: ProductTypes.UpdateProductTypeDTO;
} & AdditionalData;
export declare const updateProductTypesWorkflowId = "update-product-types";
/**
 * This workflow updates product types matching the specified filters.
 */
export declare const updateProductTypesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateProductTypesWorkflowInput, ProductTypes.ProductTypeDTO[], import("@medusajs/framework/workflows-sdk").Hook<"productTypesUpdated", {
    product_types: (ProductTypes.ProductTypeDTO | WorkflowData<ProductTypes.ProductTypeDTO>)[] & ProductTypes.ProductTypeDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<ProductTypes.ProductTypeDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductTypeDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductTypeDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
export {};
//# sourceMappingURL=update-product-types.d.ts.map