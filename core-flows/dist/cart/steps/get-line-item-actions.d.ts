import { CreateLineItemForCartDTO, UpdateLineItemWithSelectorDTO } from "@medusajs/framework/types";
export interface GetLineItemActionsStepInput {
    id: string;
    items: CreateLineItemForCartDTO[];
}
export declare const getLineItemActionsStepId = "get-line-item-actions-step";
/**
 * This step returns lists of cart line items to create or update based on the
 * provided input.
 */
export declare const getLineItemActionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<GetLineItemActionsStepInput, {
    itemsToCreate: CreateLineItemForCartDTO[];
    itemsToUpdate: UpdateLineItemWithSelectorDTO[];
}>;
//# sourceMappingURL=get-line-item-actions.d.ts.map