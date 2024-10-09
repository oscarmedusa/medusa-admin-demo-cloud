declare const _default: import("@medusajs/framework/utils").DmlEntity<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    name: import("@medusajs/framework/utils").TextProperty;
    currency_code: import("@medusajs/framework/utils").TextProperty;
    automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
    countries: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<{
        iso_2: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").TextProperty>;
        iso_3: import("@medusajs/framework/utils").TextProperty;
        num_code: import("@medusajs/framework/utils").TextProperty;
        name: import("@medusajs/framework/utils").TextProperty;
        display_name: import("@medusajs/framework/utils").TextProperty;
        region: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
            countries: import("@medusajs/framework/utils").HasMany<any>;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">, import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
            countries: import("@medusajs/framework/utils").HasMany<any>;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">>>;
        metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
    } & {
        iso_2: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").TextProperty>;
        iso_3: import("@medusajs/framework/utils").TextProperty;
        num_code: import("@medusajs/framework/utils").TextProperty;
        name: import("@medusajs/framework/utils").TextProperty;
        display_name: import("@medusajs/framework/utils").TextProperty;
        region: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
            countries: import("@medusajs/framework/utils").HasMany<any>;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">, import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
            countries: import("@medusajs/framework/utils").HasMany<any>;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">>>;
        metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
    } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, {
        readonly name: "Country";
        readonly tableName: "region_country";
    }>>;
    metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
} & {
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    name: import("@medusajs/framework/utils").TextProperty;
    currency_code: import("@medusajs/framework/utils").TextProperty;
    automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
    countries: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<{
        iso_2: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").TextProperty>;
        iso_3: import("@medusajs/framework/utils").TextProperty;
        num_code: import("@medusajs/framework/utils").TextProperty;
        name: import("@medusajs/framework/utils").TextProperty;
        display_name: import("@medusajs/framework/utils").TextProperty;
        region: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
            countries: import("@medusajs/framework/utils").HasMany<any>;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">, import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
            countries: import("@medusajs/framework/utils").HasMany<any>;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">>>;
        metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
    } & {
        iso_2: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").TextProperty>;
        iso_3: import("@medusajs/framework/utils").TextProperty;
        num_code: import("@medusajs/framework/utils").TextProperty;
        name: import("@medusajs/framework/utils").TextProperty;
        display_name: import("@medusajs/framework/utils").TextProperty;
        region: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
            countries: import("@medusajs/framework/utils").HasMany<any>;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">, import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<any & {
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            automatic_taxes: import("@medusajs/framework/utils").BooleanProperty;
            countries: import("@medusajs/framework/utils").HasMany<any>;
            metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">>>;
        metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
    } & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, {
        readonly name: "Country";
        readonly tableName: "region_country";
    }>>;
    metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
} & {} & import("@medusajs/framework/utils").DMLSchemaDefaults, "region">;
export default _default;
//# sourceMappingURL=region.d.ts.map