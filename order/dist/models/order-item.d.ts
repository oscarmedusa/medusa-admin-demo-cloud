import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { OptionalProps, Rel } from "@mikro-orm/core";
import OrderLineItem from "./line-item";
import Order from "./order";
type OptionalLineItemProps = DAL.ModelDateColumns;
export default class OrderItem {
    [OptionalProps]?: OptionalLineItemProps;
    id: string;
    order_id: string;
    order: Rel<Order>;
    version: number;
    item_id: string;
    item: Rel<OrderLineItem>;
    quantity: BigNumber | number;
    raw_quantity: BigNumberRawValue;
    fulfilled_quantity: BigNumber | number;
    raw_fulfilled_quantity: BigNumberRawValue;
    delivered_quantity: BigNumber | number;
    raw_delivered_quantity: BigNumberRawValue;
    shipped_quantity: BigNumber | number;
    raw_shipped_quantity: BigNumberRawValue;
    return_requested_quantity: BigNumber | number;
    raw_return_requested_quantity: BigNumberRawValue;
    return_received_quantity: BigNumber | number;
    raw_return_received_quantity: BigNumberRawValue;
    return_dismissed_quantity: BigNumber | number;
    raw_return_dismissed_quantity: BigNumberRawValue;
    written_off_quantity: BigNumber | number;
    raw_written_off_quantity: BigNumberRawValue;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=order-item.d.ts.map