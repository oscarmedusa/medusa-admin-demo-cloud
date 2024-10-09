import { UpdateLineItemWithSelectorDTO } from "@medusajs/framework/types";
export interface UpdateLineItemsStepInput {
    id: string;
    items: UpdateLineItemWithSelectorDTO[];
}
export declare const updateLineItemsStepId = "update-line-items-step";
/**
 * This step updates a cart's line items.
 */
export declare const updateLineItemsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateLineItemsStepInput, import("@medusajs/framework/types").CartLineItemDTO[]>;
//# sourceMappingURL=update-line-items.d.ts.map