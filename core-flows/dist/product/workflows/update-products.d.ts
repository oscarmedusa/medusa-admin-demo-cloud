import { AdditionalData, ProductTypes, UpdateProductVariantWorkflowInputDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdateProductsWorkflowInputSelector = {
    selector: ProductTypes.FilterableProductProps;
    update: Omit<ProductTypes.UpdateProductDTO, "variants"> & {
        sales_channels?: {
            id: string;
        }[];
        variants?: UpdateProductVariantWorkflowInputDTO[];
    };
} & AdditionalData;
export type UpdateProductsWorkflowInputProducts = {
    products: (Omit<ProductTypes.UpsertProductDTO, "variants"> & {
        sales_channels?: {
            id: string;
        }[];
        variants?: UpdateProductVariantWorkflowInputDTO[];
    })[];
} & AdditionalData;
export type UpdateProductWorkflowInput = UpdateProductsWorkflowInputSelector | UpdateProductsWorkflowInputProducts;
export declare const updateProductsWorkflowId = "update-products";
/**
 * This workflow updates one or more products.
 */
export declare const updateProductsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateProductWorkflowInput, ProductTypes.ProductDTO[], import("@medusajs/framework/workflows-sdk").Hook<"productsUpdated", {
    products: (ProductTypes.ProductDTO | WorkflowData<ProductTypes.ProductDTO>)[] & ProductTypes.ProductDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<ProductTypes.ProductDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=update-products.d.ts.map