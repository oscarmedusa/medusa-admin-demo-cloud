import { InventoryTypes } from "@medusajs/framework/types";
export interface UpdateInventoryItemsWorkflowInput {
    updates: InventoryTypes.UpdateInventoryItemInput[];
}
export declare const updateInventoryItemsWorkflowId = "update-inventory-items-workflow";
/**
 * This workflow updates one or more inventory items.
 */
export declare const updateInventoryItemsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateInventoryItemsWorkflowInput, InventoryTypes.InventoryItemDTO[], []>;
//# sourceMappingURL=update-inventory-items.d.ts.map