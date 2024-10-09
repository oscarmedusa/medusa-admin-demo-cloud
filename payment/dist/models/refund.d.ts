import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Payment from "./payment";
import RefundReason from "./refund-reason";
type OptionalProps = "note" | "refund_reason_id" | "refund_reason" | DAL.ModelDateColumns;
export default class Refund {
    [OptionalProps]?: OptionalProps;
    id: string;
    amount: BigNumber | number;
    raw_amount: BigNumberRawValue;
    payment: Rel<Payment>;
    payment_id: string;
    refund_reason_id: string | null;
    refund_reason: Rel<RefundReason> | null;
    note: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    created_by: string | null;
    metadata: Record<string, unknown> | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=refund.d.ts.map