import { BigNumber } from "@medusajs/framework/utils";
import { Rel } from "@mikro-orm/core";
import Order from "./order";
type OrderSummaryTotals = {
    total: BigNumber;
    subtotal: BigNumber;
    total_tax: BigNumber;
    ordered_total: BigNumber;
    fulfilled_total: BigNumber;
    returned_total: BigNumber;
    return_request_total: BigNumber;
    write_off_total: BigNumber;
    projected_total: BigNumber;
    net_total: BigNumber;
    net_subtotal: BigNumber;
    net_total_tax: BigNumber;
    balance: BigNumber;
    paid_total: BigNumber;
    refunded_total: BigNumber;
};
export default class OrderSummary {
    id: string;
    order_id: string;
    order: Rel<Order>;
    version: number;
    totals: OrderSummaryTotals | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=order-summary.d.ts.map