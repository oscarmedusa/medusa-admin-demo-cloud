import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import ClaimItem from "./claim-item";
type OptionalClaimItemImageProps = DAL.ModelDateColumns;
export default class OrderClaimItemImage {
    [OptionalProps]?: OptionalClaimItemImageProps;
    id: string;
    claim_item_id: string;
    item: Rel<ClaimItem>;
    url: string;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=claim-item-image.d.ts.map