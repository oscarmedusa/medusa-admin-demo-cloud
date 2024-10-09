import { z } from "zod";
export type AdminFulfillmentProvidersParamsType = z.infer<typeof AdminFulfillmentProvidersParams>;
export declare const AdminFulfillmentProvidersParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    stock_location_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    is_enabled: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    q: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    id?: string | string[] | undefined;
    stock_location_id?: string | string[] | undefined;
    is_enabled?: boolean | undefined;
    q?: string | undefined;
}, {
    fields?: string | undefined;
    order?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    id?: string | string[] | undefined;
    stock_location_id?: string | string[] | undefined;
    is_enabled?: string | boolean | undefined;
    q?: string | undefined;
}>;
//# sourceMappingURL=validators.d.ts.map