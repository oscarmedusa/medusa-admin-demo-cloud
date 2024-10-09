import { DAL } from "@medusajs/framework/types";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import FulfillmentAddress from "./address";
import FulfillmentItem from "./fulfillment-item";
import FulfillmentLabel from "./fulfillment-label";
import FulfillmentProvider from "./fulfillment-provider";
import ShippingOption from "./shipping-option";
type FulfillmentOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class Fulfillment {
    [OptionalProps]?: FulfillmentOptionalProps;
    id: string;
    location_id: string;
    packed_at: Date | null;
    shipped_at: Date | null;
    marked_shipped_by: string | null;
    created_by: string | null;
    delivered_at: Date | null;
    canceled_at: Date | null;
    data: Record<string, unknown> | null;
    provider_id: string;
    shipping_option_id: string | null;
    metadata: Record<string, unknown> | null;
    shipping_option: ShippingOption | null;
    provider: Rel<FulfillmentProvider>;
    delivery_address: Rel<FulfillmentAddress>;
    requires_shipping: boolean;
    items: Collection<FulfillmentItem, object>;
    labels: Collection<FulfillmentLabel, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=fulfillment.d.ts.map