import { AdditionalData, CreateProductWorkflowInputDTO, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreateProductsWorkflowInput = {
    products: CreateProductWorkflowInputDTO[];
} & AdditionalData;
export declare const createProductsWorkflowId = "create-products";
/**
 * This workflow creates one or more products.
 */
export declare const createProductsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateProductsWorkflowInput, ProductTypes.ProductDTO[], import("@medusajs/framework/workflows-sdk").Hook<"productsCreated", {
    products: WorkflowData<ProductTypes.ProductDTO[]>;
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-products.d.ts.map