import { Rel } from "@mikro-orm/core";
import AdjustmentLine from "./adjustment-line";
import OrderLineItem from "./line-item";
export default class OrderLineItemAdjustment extends AdjustmentLine {
    item: Rel<OrderLineItem>;
    item_id: string;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=line-item-adjustment.d.ts.map