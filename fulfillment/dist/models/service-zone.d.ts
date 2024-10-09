import { DAL } from "@medusajs/framework/types";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import FulfillmentSet from "./fulfillment-set";
import GeoZone from "./geo-zone";
import ShippingOption from "./shipping-option";
type ServiceZoneOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class ServiceZone {
    [OptionalProps]?: ServiceZoneOptionalProps;
    id: string;
    name: string;
    metadata: Record<string, unknown> | null;
    fulfillment_set_id: string;
    fulfillment_set: Rel<FulfillmentSet>;
    geo_zones: Collection<GeoZone, object>;
    shipping_options: Collection<ShippingOption, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=service-zone.d.ts.map