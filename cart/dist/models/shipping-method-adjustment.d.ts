import { Rel } from "@mikro-orm/core";
import AdjustmentLine from "./adjustment-line";
import ShippingMethod from "./shipping-method";
export default class ShippingMethodAdjustment extends AdjustmentLine {
    shipping_method: Rel<ShippingMethod>;
    shipping_method_id: string;
    promotion_id: string | null;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=shipping-method-adjustment.d.ts.map