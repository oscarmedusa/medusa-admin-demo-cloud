import { GeoZoneType } from "@medusajs/framework/utils";
import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import ServiceZone from "./service-zone";
type GeoZoneOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class GeoZone {
    [OptionalProps]?: GeoZoneOptionalProps;
    id: string;
    type: GeoZoneType;
    country_code: string;
    province_code: string | null;
    city: string | null;
    service_zone_id: string;
    postal_expression: Record<string, unknown> | null;
    metadata: Record<string, unknown> | null;
    service_zone: Rel<ServiceZone>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=geo-zone.d.ts.map