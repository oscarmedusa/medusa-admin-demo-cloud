import { z } from "zod";
export type StoreProductCategoryParamsType = z.infer<typeof StoreProductCategoryParams>;
export declare const StoreProductCategoryParams: z.ZodObject<{
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
export type StoreProductCategoriesParamsType = z.infer<typeof StoreProductCategoriesParams>;
export declare const StoreProductCategoriesParams: any;
//# sourceMappingURL=validators.d.ts.map