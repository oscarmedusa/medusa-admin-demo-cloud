import { InventoryLevelDTO, InventoryTypes } from "@medusajs/framework/types";
export interface UpdateInventoryLevelsWorkflowInput {
    updates: InventoryTypes.BulkUpdateInventoryLevelInput[];
}
export declare const updateInventoryLevelsWorkflowId = "update-inventory-levels-workflow";
/**
 * This workflow updates one or more inventory levels.
 */
export declare const updateInventoryLevelsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateInventoryLevelsWorkflowInput, InventoryLevelDTO[], []>;
//# sourceMappingURL=update-inventory-levels.d.ts.map