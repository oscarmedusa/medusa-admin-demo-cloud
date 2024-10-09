import { Rel } from "@mikro-orm/core";
import { BigNumberRawValue } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { InventoryItem } from "./inventory-item";
export declare class InventoryLevel {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    inventory_item_id: string;
    location_id: string;
    stocked_quantity: BigNumber | number;
    raw_stocked_quantity: BigNumberRawValue;
    reserved_quantity: BigNumber | number;
    raw_reserved_quantity: BigNumberRawValue;
    incoming_quantity: BigNumber | number;
    raw_incoming_quantity: BigNumberRawValue;
    metadata: Record<string, unknown> | null;
    inventory_item: Rel<InventoryItem>;
    available_quantity: BigNumber | number | null;
    beforeCreate(): void;
    onInit(): void;
    onLoad(): void;
}
//# sourceMappingURL=inventory-level.d.ts.map