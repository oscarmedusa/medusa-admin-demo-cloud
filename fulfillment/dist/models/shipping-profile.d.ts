import { DAL } from "@medusajs/framework/types";
import { Collection, OptionalProps } from "@mikro-orm/core";
import ShippingOption from "./shipping-option";
type ShippingProfileOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class ShippingProfile {
    [OptionalProps]?: ShippingProfileOptionalProps;
    id: string;
    name: string;
    type: string;
    shipping_options: Collection<ShippingOption, object>;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=shipping-profile.d.ts.map