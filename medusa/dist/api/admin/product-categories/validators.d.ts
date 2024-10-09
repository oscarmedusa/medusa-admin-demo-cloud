import { z } from "zod";
export type AdminProductCategoryParamsType = z.infer<typeof AdminProductCategoryParams>;
export declare const AdminProductCategoryParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    include_ancestors_tree: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    include_descendants_tree: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
    include_ancestors_tree?: boolean | undefined;
    include_descendants_tree?: boolean | undefined;
}, {
    fields?: string | undefined;
    include_ancestors_tree?: string | boolean | undefined;
    include_descendants_tree?: string | boolean | undefined;
}>;
export type AdminProductCategoriesParamsType = z.infer<typeof AdminProductCategoriesParams>;
export declare const AdminProductCategoriesParams: any;
export declare const AdminCreateProductCategory: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_active: z.ZodOptional<z.ZodBoolean>;
    parent_category_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    rank: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    name: string;
    description?: string | undefined;
    handle?: string | undefined;
    is_internal?: boolean | undefined;
    is_active?: boolean | undefined;
    parent_category_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    rank?: number | undefined;
}, {
    name: string;
    description?: string | undefined;
    handle?: string | undefined;
    is_internal?: boolean | undefined;
    is_active?: boolean | undefined;
    parent_category_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    rank?: number | undefined;
}>;
export type AdminCreateProductCategoryType = z.infer<typeof AdminCreateProductCategory>;
export declare const AdminUpdateProductCategory: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    is_internal: z.ZodOptional<z.ZodBoolean>;
    is_active: z.ZodOptional<z.ZodBoolean>;
    parent_category_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    rank: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    handle?: string | undefined;
    is_internal?: boolean | undefined;
    is_active?: boolean | undefined;
    parent_category_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    rank?: number | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    handle?: string | undefined;
    is_internal?: boolean | undefined;
    is_active?: boolean | undefined;
    parent_category_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    rank?: number | undefined;
}>;
export type AdminUpdateProductCategoryType = z.infer<typeof AdminUpdateProductCategory>;
//# sourceMappingURL=validators.d.ts.map