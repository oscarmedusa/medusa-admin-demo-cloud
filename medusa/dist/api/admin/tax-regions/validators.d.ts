import { z } from "zod";
export type AdminGetTaxRegionParamsType = z.infer<typeof AdminGetTaxRegionParams>;
export declare const AdminGetTaxRegionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetTaxRegionsParamsType = z.infer<typeof AdminGetTaxRegionsParams>;
export declare const AdminGetTaxRegionsParams: any;
export type AdminCreateTaxRegionType = z.infer<typeof AdminCreateTaxRegion>;
export declare const AdminCreateTaxRegion: z.ZodObject<{
    country_code: z.ZodString;
    province_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parent_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    default_tax_rate: z.ZodOptional<z.ZodObject<{
        rate: z.ZodOptional<z.ZodNumber>;
        code: z.ZodString;
        name: z.ZodString;
        is_combinable: z.ZodOptional<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        code: string;
        rate?: number | undefined;
        is_combinable?: boolean | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }, {
        name: string;
        code: string;
        rate?: number | undefined;
        is_combinable?: boolean | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    country_code: string;
    province_code?: string | null | undefined;
    parent_id?: string | null | undefined;
    default_tax_rate?: {
        name: string;
        code: string;
        rate?: number | undefined;
        is_combinable?: boolean | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    country_code: string;
    province_code?: string | null | undefined;
    parent_id?: string | null | undefined;
    default_tax_rate?: {
        name: string;
        code: string;
        rate?: number | undefined;
        is_combinable?: boolean | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
//# sourceMappingURL=validators.d.ts.map