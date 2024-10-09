import { AdditionalData, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreateCollectionsWorkflowInput = {
    collections: ProductTypes.CreateProductCollectionDTO[];
} & AdditionalData;
export declare const createCollectionsWorkflowId = "create-collections";
/**
 * This workflow creates one or more collections.
 */
export declare const createCollectionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateCollectionsWorkflowInput, ProductTypes.ProductCollectionDTO[], import("@medusajs/framework/workflows-sdk").Hook<"collectionsCreated", {
    collections: (ProductTypes.ProductCollectionDTO | WorkflowData<ProductTypes.ProductCollectionDTO>)[] & ProductTypes.ProductCollectionDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<ProductTypes.ProductCollectionDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductCollectionDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductCollectionDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-collections.d.ts.map