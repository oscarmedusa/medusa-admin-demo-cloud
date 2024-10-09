import { AdditionalData, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdateCollectionsWorkflowInput = {
    selector: ProductTypes.FilterableProductCollectionProps;
    update: ProductTypes.UpdateProductCollectionDTO;
} & AdditionalData;
export declare const updateCollectionsWorkflowId = "update-collections";
/**
 * This workflow updates collections matching the specified filters.
 */
export declare const updateCollectionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateCollectionsWorkflowInput, ProductTypes.ProductCollectionDTO[], import("@medusajs/framework/workflows-sdk").Hook<"collectionsUpdated", {
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
    collections: (ProductTypes.ProductCollectionDTO | WorkflowData<ProductTypes.ProductCollectionDTO>)[] & ProductTypes.ProductCollectionDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<ProductTypes.ProductCollectionDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductCollectionDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<ProductTypes.ProductCollectionDTO[]>;
    };
}>[]>;
//# sourceMappingURL=update-collections.d.ts.map