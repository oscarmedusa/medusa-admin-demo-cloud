import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { BigNumber, ClaimType } from "@medusajs/framework/utils";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import ClaimItem from "./claim-item";
import Order from "./order";
import OrderShipping from "./order-shipping-method";
import Return from "./return";
import OrderTransaction from "./transaction";
type OptionalOrderClaimProps = DAL.ModelDateColumns;
export default class OrderClaim {
    [OptionalProps]?: OptionalOrderClaimProps;
    id: string;
    order_id: string;
    order: Rel<Order>;
    return: Rel<Return>;
    return_id: string | null;
    order_version: number;
    display_id: number;
    type: Rel<ClaimType>;
    no_notification: boolean | null;
    refund_amount: BigNumber | number;
    raw_refund_amount: BigNumberRawValue;
    additional_items: Collection<ClaimItem, object>;
    claim_items: Collection<ClaimItem, object>;
    shipping_methods: Collection<OrderShipping, object>;
    transactions: Collection<OrderTransaction, object>;
    created_by: string | null;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    canceled_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=claim.d.ts.map