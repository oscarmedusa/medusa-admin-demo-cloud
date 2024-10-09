import { z } from "zod";
export type AdminGetShippingProfileParamsType = z.infer<typeof AdminGetShippingProfileParams>;
export declare const AdminGetShippingProfileParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetShippingProfilesParamsType = z.infer<typeof AdminGetShippingProfilesParams>;
export declare const AdminGetShippingProfilesParams: any;
export type AdminCreateShippingProfileType = z.infer<typeof AdminCreateShippingProfile>;
export declare const AdminCreateShippingProfile: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    name: string;
    type: string;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    name: string;
    type: string;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export type AdminUpdateShippingProfileType = z.infer<typeof AdminUpdateShippingProfile>;
export declare const AdminUpdateShippingProfile: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    type?: string | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    name?: string | undefined;
    type?: string | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
//# sourceMappingURL=validators.d.ts.map