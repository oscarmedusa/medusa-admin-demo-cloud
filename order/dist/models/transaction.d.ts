import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Claim from "./claim";
import Exchange from "./exchange";
import Order from "./order";
import Return from "./return";
type OptionalLineItemProps = DAL.ModelDateColumns;
export default class OrderTransaction {
    [OptionalProps]?: OptionalLineItemProps;
    id: string;
    order_id: string;
    order: Rel<Order>;
    return_id: string | null;
    return: Rel<Return>;
    exchange_id: string | null;
    exchange: Rel<Exchange>;
    claim_id: string | null;
    claim: Rel<Claim>;
    version: number;
    amount: BigNumber | number;
    raw_amount: BigNumberRawValue;
    currency_code: string;
    reference: string | null;
    reference_id: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=transaction.d.ts.map