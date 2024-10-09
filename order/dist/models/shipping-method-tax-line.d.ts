import { Rel } from "@mikro-orm/core";
import OrderShippingMethod from "./shipping-method";
import TaxLine from "./tax-line";
export default class OrderShippingMethodTaxLine extends TaxLine {
    shipping_method: Rel<OrderShippingMethod>;
    shipping_method_id: string;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=shipping-method-tax-line.d.ts.map