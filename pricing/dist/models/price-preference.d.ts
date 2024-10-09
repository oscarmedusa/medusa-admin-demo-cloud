export declare const uniquePreferenceRuleIndexName = "IDX_price_preference_attribute_value";
export default class PricePreference {
    id: string;
    attribute: string;
    value: string | null;
    is_tax_inclusive: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=price-preference.d.ts.map