import { DAL, PromotionTypeValues } from "@medusajs/framework/types";
import { Collection, OptionalProps, Rel } from "@mikro-orm/core";
import ApplicationMethod from "./application-method";
import Campaign from "./campaign";
import PromotionRule from "./promotion-rule";
type OptionalFields = "is_automatic" | DAL.SoftDeletableModelDateColumns;
type OptionalRelations = "application_method" | "campaign";
export default class Promotion {
    [OptionalProps]?: OptionalFields | OptionalRelations;
    id: string;
    code: string;
    campaign_id: string | null;
    campaign: Rel<Campaign> | null;
    is_automatic: boolean;
    type: PromotionTypeValues;
    application_method: Rel<ApplicationMethod>;
    rules: Collection<PromotionRule, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=promotion.d.ts.map