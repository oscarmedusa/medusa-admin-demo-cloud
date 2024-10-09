import { Rel } from "@mikro-orm/core";
import AdjustmentLine from "./adjustment-line";
import OrderShippingMethod from "./shipping-method";
export default class OrderShippingMethodAdjustment extends AdjustmentLine {
    shipping_method: Rel<OrderShippingMethod>;
    shipping_method_id: string;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=shipping-method-adjustment.d.ts.map