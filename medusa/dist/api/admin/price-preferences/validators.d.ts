import { z } from "zod";
export declare const AdminGetPricePreferenceParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminGetPricePreferencesParams: any;
export declare const AdminCreatePricePreference: z.ZodObject<{
    attribute: z.ZodString;
    value: z.ZodString;
    is_tax_inclusive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    value: string;
    attribute: string;
    is_tax_inclusive?: boolean | undefined;
}, {
    value: string;
    attribute: string;
    is_tax_inclusive?: boolean | undefined;
}>;
export type AdminCreatePricePreferencePriceType = z.infer<typeof AdminCreatePricePreference>;
export declare const AdminUpdatePricePreference: z.ZodObject<{
    attribute: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    is_tax_inclusive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    attribute?: string | undefined;
    value?: string | undefined;
    is_tax_inclusive?: boolean | undefined;
}, {
    attribute?: string | undefined;
    value?: string | undefined;
    is_tax_inclusive?: boolean | undefined;
}>;
export type AdminUpdatePricePreferenceType = z.infer<typeof AdminUpdatePricePreference>;
//# sourceMappingURL=validators.d.ts.map