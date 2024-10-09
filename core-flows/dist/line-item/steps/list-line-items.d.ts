import { CartLineItemDTO, FilterableLineItemProps, FindConfig } from "@medusajs/framework/types";
export interface ListLineItemsStepInput {
    filters: FilterableLineItemProps;
    config?: FindConfig<CartLineItemDTO>;
}
export declare const listLineItemsStepId = "list-line-items";
/**
 * This step retrieves a list of a cart's line items
 * matching the specified filters.
 */
export declare const listLineItemsStep: import("@medusajs/framework/workflows-sdk").StepFunction<ListLineItemsStepInput, CartLineItemDTO[]>;
//# sourceMappingURL=list-line-items.d.ts.map