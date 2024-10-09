import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import ShippingOption from "./shipping-option";
type ShippingOptionTypeOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class ShippingOptionType {
    [OptionalProps]?: ShippingOptionTypeOptionalProps;
    id: string;
    label: string;
    description: string | null;
    code: string;
    shipping_option: Rel<ShippingOption>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=shipping-option-type.d.ts.map