import { CreatePriceListWorkflowInputDTO, PriceListDTO } from "@medusajs/framework/types";
export type CreatePriceListsWorkflowInput = {
    price_lists_data: CreatePriceListWorkflowInputDTO[];
};
export declare const createPriceListsWorkflowId = "create-price-lists";
/**
 * This workflow creates one or more price lists.
 */
export declare const createPriceListsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreatePriceListsWorkflowInput, PriceListDTO[], []>;
//# sourceMappingURL=create-price-lists.d.ts.map