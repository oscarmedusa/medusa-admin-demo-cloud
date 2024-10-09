import { Rel } from "@mikro-orm/core";
import OrderLineItem from "./line-item";
import TaxLine from "./tax-line";
export default class OrderLineItemTaxLine extends TaxLine {
    item: Rel<OrderLineItem>;
    item_id: string;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=line-item-tax-line.d.ts.map