export interface DeleteStockLocationWorkflowInput {
    ids: string[];
}
export declare const deleteStockLocationsWorkflowId = "delete-stock-locations-workflow";
/**
 * This workflow deletes one or more stock locations.
 */
export declare const deleteStockLocationsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteStockLocationWorkflowInput, unknown, any[]>;
//# sourceMappingURL=delete-stock-locations.d.ts.map