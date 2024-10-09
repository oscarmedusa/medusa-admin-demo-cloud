import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { ClaimReason } from "@medusajs/framework/utils";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import Claim from "./claim";
import OrderClaimItemImage from "./claim-item-image";
import OrderLineItem from "./line-item";
type OptionalLineItemProps = DAL.ModelDateColumns;
export default class OrderClaimItem {
    [OptionalProps]?: OptionalLineItemProps;
    id: string;
    images: Collection<OrderClaimItemImage, object>;
    reason: Rel<ClaimReason> | null;
    quantity: Number | number;
    raw_quantity: BigNumberRawValue;
    claim_id: string;
    claim: Rel<Claim>;
    item_id: string;
    item: Rel<OrderLineItem>;
    is_additional_item: boolean;
    note: string;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=claim-item.d.ts.map