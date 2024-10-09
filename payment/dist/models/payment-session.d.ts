import { BigNumberRawValue } from "@medusajs/framework/types";
import { BigNumber, PaymentSessionStatus } from "@medusajs/framework/utils";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Payment from "./payment";
import PaymentCollection from "./payment-collection";
export default class PaymentSession {
    [OptionalProps]?: "status" | "data";
    id: string;
    currency_code: string;
    amount: BigNumber | number;
    raw_amount: BigNumberRawValue;
    provider_id: string;
    data: Record<string, unknown>;
    context: Record<string, unknown> | null;
    status: PaymentSessionStatus;
    authorized_at: Date | null;
    payment_collection: Rel<PaymentCollection>;
    payment_collection_id: string;
    payment?: Rel<Payment> | null;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=payment-session.d.ts.map