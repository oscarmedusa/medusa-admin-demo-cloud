import { DAL } from "@medusajs/framework/types";
import { RuleOperator } from "@medusajs/framework/utils";
import { OptionalProps, Rel } from "@mikro-orm/core";
import ShippingOption from "./shipping-option";
type ShippingOptionRuleOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class ShippingOptionRule {
    [OptionalProps]?: ShippingOptionRuleOptionalProps;
    id: string;
    attribute: string;
    operator: Lowercase<keyof typeof RuleOperator>;
    value: string | string[] | null;
    shipping_option_id: string;
    shipping_option: Rel<ShippingOption>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=shipping-option-rule.d.ts.map