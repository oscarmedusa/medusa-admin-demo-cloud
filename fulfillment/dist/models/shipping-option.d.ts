import { ShippingOptionPriceType } from "@medusajs/framework/utils";
import { DAL } from "@medusajs/framework/types";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import Fulfillment from "./fulfillment";
import FulfillmentProvider from "./fulfillment-provider";
import ServiceZone from "./service-zone";
import ShippingOptionRule from "./shipping-option-rule";
import ShippingOptionType from "./shipping-option-type";
import ShippingProfile from "./shipping-profile";
type ShippingOptionOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class ShippingOption {
    [OptionalProps]?: ShippingOptionOptionalProps;
    id: string;
    name: string;
    price_type: ShippingOptionPriceType;
    service_zone_id: string;
    shipping_profile_id: string | null;
    provider_id: string;
    shipping_option_type_id: string | null;
    data: Record<string, unknown> | null;
    metadata: Record<string, unknown> | null;
    service_zone: Rel<ServiceZone>;
    shipping_profile: Rel<ShippingProfile> | null;
    provider: Rel<FulfillmentProvider> | null;
    type: Rel<ShippingOptionType>;
    rules: Collection<ShippingOptionRule, object>;
    fulfillments: Collection<Fulfillment, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=shipping-option.d.ts.map