import { InventoryLevelDTO, InventoryTypes } from "@medusajs/framework/types";
export interface CreateInventoryLevelsWorkflowInput {
    inventory_levels: InventoryTypes.CreateInventoryLevelInput[];
}
export declare const createInventoryLevelsWorkflowId = "create-inventory-levels-workflow";
/**
 * This workflow creates one or more inventory levels.
 */
export declare const createInventoryLevelsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateInventoryLevelsWorkflowInput, InventoryLevelDTO[], []>;
//# sourceMappingURL=create-inventory-levels.d.ts.map