import { BigNumberRawValue, CampaignBudgetTypeValues, DAL } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Campaign from "./campaign";
type OptionalFields = "description" | "limit" | "used" | DAL.SoftDeletableModelDateColumns;
export default class CampaignBudget {
    [OptionalProps]?: OptionalFields;
    id: string;
    type: CampaignBudgetTypeValues;
    campaign: Rel<Campaign> | null;
    currency_code: string | null;
    limit: BigNumber | number | null;
    raw_limit: BigNumberRawValue | null;
    used: BigNumber | number;
    raw_used: BigNumberRawValue;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=campaign-budget.d.ts.map