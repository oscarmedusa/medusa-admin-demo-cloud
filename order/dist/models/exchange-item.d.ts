import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { OptionalProps } from "@mikro-orm/core";
import Exchange from "./exchange";
import OrderLineItem from "./line-item";
type OptionalLineItemProps = DAL.ModelDateColumns;
export default class OrderExchangeItem {
    [OptionalProps]?: OptionalLineItemProps;
    id: string;
    quantity: Number | number;
    raw_quantity: BigNumberRawValue;
    exchange_id: string;
    exchange: Exchange;
    item_id: string;
    item: OrderLineItem;
    note: string;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=exchange-item.d.ts.map