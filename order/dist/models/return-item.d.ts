import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { OptionalProps } from "@mikro-orm/core";
import OrderLineItem from "./line-item";
import Return from "./return";
import ReturnReason from "./return-reason";
type OptionalLineItemProps = DAL.ModelDateColumns;
export default class ReturnItem {
    [OptionalProps]?: OptionalLineItemProps;
    id: string;
    reason_id: string | null;
    reason: ReturnReason;
    quantity: Number | number;
    raw_quantity: BigNumberRawValue;
    received_quantity: Number | number;
    raw_received_quantity: BigNumberRawValue;
    damaged_quantity: Number | number;
    raw_damaged_quantity: BigNumberRawValue;
    return_id: string;
    return: Return;
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
//# sourceMappingURL=return-item.d.ts.map