import { DAL } from "@medusajs/framework/types";
import { PriceListStatus, PriceListType } from "@medusajs/framework/utils";
import { Collection, OptionalProps } from "@mikro-orm/core";
import Price from "./price";
import PriceListRule from "./price-list-rule";
type OptionalFields = "starts_at" | "ends_at" | DAL.SoftDeletableModelDateColumns;
export declare const PriceListIdPrefix = "plist";
export default class PriceList {
    [OptionalProps]: OptionalFields;
    id: string;
    title: string;
    description: string;
    status: PriceListStatus;
    type: PriceListType;
    starts_at: Date | null;
    ends_at: Date | null;
    prices: Collection<Price, object>;
    price_list_rules: Collection<PriceListRule, object>;
    rules_count: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=price-list.d.ts.map