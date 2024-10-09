import { ConfirmVariantInventoryWorkflowInputDTO } from "@medusajs/framework/types";
export interface ConfirmVariantInventoryWorkflowOutput {
    items: {
        id?: string;
        inventory_item_id: string;
        required_quantity: number;
        allow_backorder: boolean;
        quantity: number;
        location_ids: string[];
    }[];
}
export declare const confirmVariantInventoryWorkflowId = "confirm-item-inventory";
/**
 * This workflow confirms for one or more variants that their inventory has a required quantity.
 */
export declare const confirmVariantInventoryWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ConfirmVariantInventoryWorkflowInputDTO, ConfirmVariantInventoryWorkflowOutput, []>;
//# sourceMappingURL=confirm-variant-inventory.d.ts.map