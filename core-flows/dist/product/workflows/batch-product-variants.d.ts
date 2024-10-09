import { BatchWorkflowInput, BatchWorkflowOutput, ProductTypes, UpdateProductVariantWorkflowInputDTO, CreateProductVariantWorkflowInputDTO } from "@medusajs/framework/types";
export declare const batchProductVariantsWorkflowId = "batch-product-variants";
/**
 * This workflow creates, updates, and deletes product variants.
 */
export declare const batchProductVariantsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<BatchWorkflowInput<CreateProductVariantWorkflowInputDTO, UpdateProductVariantWorkflowInputDTO>, BatchWorkflowOutput<ProductTypes.ProductVariantDTO>, []>;
//# sourceMappingURL=batch-product-variants.d.ts.map