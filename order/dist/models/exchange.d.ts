import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import { OrderExchangeItem, OrderTransaction } from ".";
import Order from "./order";
import OrderShipping from "./order-shipping-method";
import Return from "./return";
type OptionalOrderExchangeProps = DAL.ModelDateColumns;
export default class OrderExchange {
    [OptionalProps]?: OptionalOrderExchangeProps;
    id: string;
    order_id: string;
    order: Rel<Order>;
    return: Rel<Return>;
    return_id: string | null;
    order_version: number;
    display_id: number;
    no_notification: boolean | null;
    difference_due: BigNumber | number;
    raw_difference_due: BigNumberRawValue;
    allow_backorder: boolean;
    additional_items: Collection<OrderExchangeItem, object>;
    shipping_methods: Collection<OrderShipping, object>;
    transactions: Collection<OrderTransaction, object>;
    created_by: string | null;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    canceled_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=exchange.d.ts.map