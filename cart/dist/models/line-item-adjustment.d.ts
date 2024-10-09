import { Rel } from "@mikro-orm/core";
import AdjustmentLine from "./adjustment-line";
import LineItem from "./line-item";
export default class LineItemAdjustment extends AdjustmentLine {
    item: Rel<LineItem>;
    item_id: string;
    promotion_id: string | null;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=line-item-adjustment.d.ts.map