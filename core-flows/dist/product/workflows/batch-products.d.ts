import { BatchWorkflowInput, BatchWorkflowOutput, CreateProductWorkflowInputDTO, ProductTypes, UpdateProductWorkflowInputDTO } from "@medusajs/framework/types";
export declare const batchProductsWorkflowId = "batch-products";
/**
 * This workflow creates, updates, or deletes products.
 */
export declare const batchProductsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<BatchWorkflowInput<CreateProductWorkflowInputDTO, UpdateProductWorkflowInputDTO>, BatchWorkflowOutput<ProductTypes.ProductDTO>, []>;
//# sourceMappingURL=batch-products.d.ts.map