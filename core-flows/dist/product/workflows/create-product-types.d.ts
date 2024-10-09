import { AdditionalData, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreateProductTypesWorkflowInput = {
    product_types: ProductTypes.CreateProductTypeDTO[];
} & AdditionalData;
export declare const createProductTypesWorkflowId = "create-product-types";
/**
 * This workflow creates one or more product types.
 */
export declare const createProductTypesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateProductTypesWorkflowInput, ProductTypes.ProductTypeDTO[], import("@medusajs/framework/workflows-sdk").Hook<"productTypesCreated", {
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
//# sourceMappingURL=create-product-types.d.ts.map