import { z } from "zod";
export type AdminGetProductTagParamsType = z.infer<typeof AdminGetProductTagParams>;
export declare const AdminGetProductTagParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetProductTagsParamsType = z.infer<typeof AdminGetProductTagsParams>;
export declare const AdminGetProductTagsParams: any;
export type AdminCreateProductTagType = z.infer<typeof AdminCreateProductTag>;
export declare const AdminCreateProductTag: z.ZodObject<{
    value: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    value: string;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    value: string;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export type AdminUpdateProductTagType = z.infer<typeof AdminUpdateProductTag>;
export declare const AdminUpdateProductTag: z.ZodObject<{
    value: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    value?: string | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    value?: string | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
//# sourceMappingURL=validators.d.ts.map