import { FilterableInventoryLevelProps } from "@medusajs/framework/types";
/**
 * This step validates that inventory levels are deletable.
 */
export declare const validateInventoryLevelsDelete: import("@medusajs/framework/workflows-sdk").StepFunction<{
    inventoryLevels: any[];
}, unknown>;
export declare const deleteInventoryLevelsWorkflowId = "delete-inventory-levels-workflow";
/**
 * This workflow deletes one or more inventory levels.
 */
export declare const deleteInventoryLevelsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<FilterableInventoryLevelProps, undefined, []>;
//# sourceMappingURL=delete-inventory-levels.d.ts.map