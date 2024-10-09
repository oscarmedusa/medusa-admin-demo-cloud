import { z } from "zod";
export type AdminGetStoreParamsType = z.infer<typeof AdminGetStoreParams>;
export declare const AdminGetStoreParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetStoresParamsType = z.infer<typeof AdminGetStoresParams>;
export declare const AdminGetStoresParams: any;
export type AdminUpdateStoreType = z.infer<typeof AdminUpdateStore>;
export declare const AdminUpdateStore: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    supported_currencies: z.ZodOptional<z.ZodArray<z.ZodObject<{
        currency_code: z.ZodString;
        is_default: z.ZodOptional<z.ZodBoolean>;
        is_tax_inclusive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        currency_code: string;
        is_default?: boolean | undefined;
        is_tax_inclusive?: boolean | undefined;
    }, {
        currency_code: string;
        is_default?: boolean | undefined;
        is_tax_inclusive?: boolean | undefined;
    }>, "many">>;
    default_sales_channel_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    default_region_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    default_location_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    supported_currencies?: {
        currency_code: string;
        is_default?: boolean | undefined;
        is_tax_inclusive?: boolean | undefined;
    }[] | undefined;
    default_sales_channel_id?: string | null | undefined;
    default_region_id?: string | null | undefined;
    default_location_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    name?: string | undefined;
    supported_currencies?: {
        currency_code: string;
        is_default?: boolean | undefined;
        is_tax_inclusive?: boolean | undefined;
    }[] | undefined;
    default_sales_channel_id?: string | null | undefined;
    default_region_id?: string | null | undefined;
    default_location_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
//# sourceMappingURL=validators.d.ts.map