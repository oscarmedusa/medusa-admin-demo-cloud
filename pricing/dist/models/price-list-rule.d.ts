import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import PriceList from "./price-list";
type OptionalFields = DAL.SoftDeletableModelDateColumns;
export default class PriceListRule {
    [OptionalProps]: OptionalFields;
    id: string;
    attribute: string;
    value: string | string[] | null;
    price_list_id: string;
    price_list: Rel<PriceList>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    beforeCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=price-list-rule.d.ts.map