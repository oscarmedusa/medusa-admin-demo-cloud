import { Rel } from "@mikro-orm/core";
import LineItem from "./line-item";
import TaxLine from "./tax-line";
export default class LineItemTaxLine extends TaxLine {
    item: Rel<LineItem>;
    item_id: string;
    tax_rate_id: string | null;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=line-item-tax-line.d.ts.map