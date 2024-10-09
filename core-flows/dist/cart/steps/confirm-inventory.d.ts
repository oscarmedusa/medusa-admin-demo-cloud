export interface ConfirmVariantInventoryStepInput {
    items: {
        inventory_item_id: string;
        required_quantity: number;
        allow_backorder: boolean;
        quantity: number;
        location_ids: string[];
    }[];
}
export declare const confirmInventoryStepId = "confirm-inventory-step";
/**
 * This step confirms for one or more variants that their inventory has a required quantity.
 */
export declare const confirmInventoryStep: import("@medusajs/framework/workflows-sdk").StepFunction<ConfirmVariantInventoryStepInput, null>;
//# sourceMappingURL=confirm-inventory.d.ts.map