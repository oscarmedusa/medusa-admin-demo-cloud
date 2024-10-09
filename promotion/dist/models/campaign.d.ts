import { DAL } from "@medusajs/framework/types";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import CampaignBudget from "./campaign-budget";
import Promotion from "./promotion";
type OptionalRelations = "budget";
type OptionalFields = "description" | "starts_at" | "ends_at" | DAL.SoftDeletableModelDateColumns;
export default class Campaign {
    [OptionalProps]?: OptionalFields | OptionalRelations;
    id: string;
    name: string;
    description: string | null;
    campaign_identifier: string;
    starts_at: Date | null;
    ends_at: Date | null;
    budget: Rel<CampaignBudget> | null;
    promotions: Collection<Promotion, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=campaign.d.ts.map