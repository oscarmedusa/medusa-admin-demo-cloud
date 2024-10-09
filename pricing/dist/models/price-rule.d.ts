import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Price from "./price";
type OptionalFields = DAL.SoftDeletableModelDateColumns;
export default class PriceRule {
    [OptionalProps]?: OptionalFields;
    id: string;
    attribute: string;
    value: string;
    priority: number;
    price_id: string;
    price: Rel<Price>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    beforeCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=price-rule.d.ts.map