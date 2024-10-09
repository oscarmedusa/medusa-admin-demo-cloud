import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Collection } from "@mikro-orm/core";
import StoreCurrency from "./currency";
type StoreOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class Store {
    [OptionalProps]?: StoreOptionalProps;
    id: string;
    name: string;
    supported_currencies: Collection<StoreCurrency, object>;
    default_sales_channel_id: string | null;
    default_region_id: string | null;
    default_location_id: string | null;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=store.d.ts.map