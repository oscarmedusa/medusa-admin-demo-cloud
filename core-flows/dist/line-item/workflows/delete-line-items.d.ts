export type DeleteLineItemsWorkflowInput = {
    cart_id: string;
    ids: string[];
};
export declare const deleteLineItemsWorkflowId = "delete-line-items";
/**
 * This workflow deletes line items from a cart.
 */
export declare const deleteLineItemsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteLineItemsWorkflowInput, unknown, any[]>;
//# sourceMappingURL=delete-line-items.d.ts.map