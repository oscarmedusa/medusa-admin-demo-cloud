import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import TaxRate from "./tax-rate";
type OptionalRuleProps = DAL.SoftDeletableModelDateColumns;
export declare const uniqueRateReferenceIndexName = "IDX_tax_rate_rule_unique_rate_reference";
export default class TaxRateRule {
    [OptionalProps]?: OptionalRuleProps;
    id: string;
    tax_rate_id: string;
    reference_id: string;
    reference: string;
    tax_rate: Rel<TaxRate>;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    created_by: string | null;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=tax-rate-rule.d.ts.map