export type DeleteReservationByLineItemsWorkflowInput = {
    ids: string[];
};
export declare const deleteReservationsByLineItemsWorkflowId = "delete-reservations-by-line-items";
/**
 * This workflow deletes reservations by their associated line items.
 */
export declare const deleteReservationsByLineItemsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteReservationByLineItemsWorkflowInput, unknown, any[]>;
//# sourceMappingURL=delete-reservations-by-line-items.d.ts.map