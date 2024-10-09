import { Rel } from "@mikro-orm/core";
import { BigNumberRawValue } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { InventoryItem } from "./inventory-item";
export declare class ReservationItem {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    line_item_id: string | null;
    allow_backorder: boolean;
    location_id: string;
    quantity: BigNumber | number;
    raw_quantity: BigNumberRawValue;
    external_id: string | null;
    description: string | null;
    created_by: string | null;
    metadata: Record<string, unknown> | null;
    inventory_item_id: string;
    inventory_item: Rel<InventoryItem>;
    beforeCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=reservation-item.d.ts.map