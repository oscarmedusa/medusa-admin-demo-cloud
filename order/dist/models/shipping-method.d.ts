import { BigNumberRawValue } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { Collection } from "@mikro-orm/core";
import OrderShippingMethodAdjustment from "./shipping-method-adjustment";
import OrderShippingMethodTaxLine from "./shipping-method-tax-line";
export default class OrderShippingMethod {
    id: string;
    name: string;
    description: string | null;
    amount: BigNumber | number;
    raw_amount: BigNumberRawValue;
    is_tax_inclusive: boolean;
    is_custom_amount: boolean;
    shipping_option_id: string | null;
    data: Record<string, unknown> | null;
    metadata: Record<string, unknown> | null;
    tax_lines: Collection<OrderShippingMethodTaxLine, object>;
    adjustments: Collection<OrderShippingMethodAdjustment, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=shipping-method.d.ts.map