import { z } from "zod";
export type StoreGetPaymentProvidersParamsType = z.infer<typeof StoreGetPaymentProvidersParams>;
export declare const StoreGetPaymentProvidersParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    region_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    region_id: string;
    fields?: string | undefined;
    order?: string | undefined;
}, {
    region_id: string;
    fields?: string | undefined;
    order?: string | undefined;
    offset?: unknown;
    limit?: unknown;
}>;
//# sourceMappingURL=validators.d.ts.map