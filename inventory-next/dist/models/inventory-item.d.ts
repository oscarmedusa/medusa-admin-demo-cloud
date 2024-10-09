import { Collection, OptionalProps } from "@mikro-orm/core";
import { DAL } from "@medusajs/framework/types";
import { InventoryLevel } from "./inventory-level";
import { ReservationItem } from "./reservation-item";
type InventoryItemOptionalProps = DAL.SoftDeletableModelDateColumns;
export declare class InventoryItem {
    [OptionalProps]: InventoryItemOptionalProps;
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    sku: string | null;
    origin_country: string | null;
    hs_code: string | null;
    mid_code: string | null;
    material: string | null;
    weight: number | null;
    length: number | null;
    height: number | null;
    width: number | null;
    requires_shipping: boolean;
    description: string | null;
    title: string | null;
    thumbnail: string | null;
    metadata: Record<string, unknown> | null;
    location_levels: Collection<InventoryLevel, object>;
    reservation_items: Collection<ReservationItem, object>;
    reserved_quantity: number;
    stocked_quantity: number;
    beforeCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=inventory-item.d.ts.map