import { InventoryTypes } from "@medusajs/framework/types";
type LocationLevelWithoutInventory = Omit<InventoryTypes.CreateInventoryLevelInput, "inventory_item_id">;
export interface CreateInventoryItemsWorkflowInput {
    items: (InventoryTypes.CreateInventoryItemInput & {
        location_levels?: LocationLevelWithoutInventory[];
    })[];
}
export declare const createInventoryItemsWorkflowId = "create-inventory-items-workflow";
/**
 * This workflow creates one or more inventory items.
 */
export declare const createInventoryItemsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateInventoryItemsWorkflowInput, InventoryTypes.InventoryItemDTO[], []>;
export {};
//# sourceMappingURL=create-inventory-items.d.ts.map