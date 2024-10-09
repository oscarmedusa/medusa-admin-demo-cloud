import { DAL } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import PriceList from "./price-list";
import PriceRule from "./price-rule";
import PriceSet from "./price-set";
type OptionalFields = DAL.SoftDeletableModelDateColumns;
export default class Price {
    [OptionalProps]?: OptionalFields;
    id: string;
    title: string | null;
    currency_code: string;
    amount: BigNumber | number;
    raw_amount: Record<string, unknown>;
    min_quantity: number | null;
    max_quantity: number | null;
    price_set_id: string;
    price_set?: Rel<PriceSet>;
    rules_count: number;
    price_rules: Collection<PriceRule, object>;
    price_list_id: string | null;
    price_list: Rel<PriceList> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=price.d.ts.map