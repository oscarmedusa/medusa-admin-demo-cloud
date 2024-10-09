import { ApplicationMethodAllocationValues, ApplicationMethodTargetTypeValues, ApplicationMethodTypeValues, BigNumberRawValue } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { Collection, Rel } from "@mikro-orm/core";
import Promotion from "./promotion";
import PromotionRule from "./promotion-rule";
export default class ApplicationMethod {
    id: string;
    value: BigNumber | number | null;
    raw_value: BigNumberRawValue | null;
    currency_code: string | null;
    max_quantity?: number | null;
    apply_to_quantity?: number | null;
    buy_rules_min_quantity?: number | null;
    type: ApplicationMethodTypeValues;
    target_type: ApplicationMethodTargetTypeValues;
    allocation?: ApplicationMethodAllocationValues;
    promotion: Rel<Promotion>;
    target_rules: Collection<PromotionRule, object>;
    buy_rules: Collection<PromotionRule, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=application-method.d.ts.map