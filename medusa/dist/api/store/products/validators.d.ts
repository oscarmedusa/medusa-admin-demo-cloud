import { z } from "zod";
export type StoreGetProductParamsType = z.infer<typeof StoreGetProductParams>;
export declare const StoreGetProductParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    region_id: z.ZodOptional<z.ZodString>;
    country_code: z.ZodOptional<z.ZodString>;
    province: z.ZodOptional<z.ZodString>;
    cart_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
    region_id?: string | undefined;
    country_code?: string | undefined;
    province?: string | undefined;
    cart_id?: string | undefined;
}, {
    fields?: string | undefined;
    region_id?: string | undefined;
    country_code?: string | undefined;
    province?: string | undefined;
    cart_id?: string | undefined;
}>;
export type StoreGetProductVariantsParamsType = z.infer<typeof StoreGetProductVariantsParams>;
export declare const StoreGetProductVariantsParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    q: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    options: z.ZodOptional<z.ZodObject<{
        value: z.ZodString;
        option_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        option_id: string;
    }, {
        value: string;
        option_id: string;
    }>>;
    created_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    updated_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    deleted_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    $and: z.ZodOptional<z.ZodLazy<z.ZodArray<z.ZodEffects<z.ZodObject<{
        fields: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
        offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
        limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
        variants: z.ZodOptional<z.ZodObject<{
            options: z.ZodOptional<z.ZodObject<{
                value: z.ZodString;
                option_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                option_id: string;
            }, {
                value: string;
                option_id: string;
            }>>;
            $and: z.ZodOptional<z.ZodLazy<any>>;
            $or: z.ZodOptional<z.ZodLazy<any>>;
        }, "strip", z.ZodTypeAny, {
            options?: {
                value: string;
                option_id: string;
            } | undefined;
            $and?: any;
            $or?: any;
        }, {
            options?: {
                value: string;
                option_id: string;
            } | undefined;
            $and?: any;
            $or?: any;
        }>>;
        $and: z.ZodOptional<z.ZodLazy<any>>;
        $or: z.ZodOptional<z.ZodLazy<any>>;
        province: z.ZodOptional<z.ZodString>;
        country_code: z.ZodOptional<z.ZodString>;
        region_id: z.ZodOptional<z.ZodString>;
        cart_id: z.ZodOptional<z.ZodString>;
        q: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        title: z.ZodOptional<z.ZodString>;
        handle: z.ZodOptional<z.ZodString>;
        is_giftcard: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
        category_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        sales_channel_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        collection_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        tag_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        type_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        created_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
            $eq: any;
            $ne: any;
            $in: any;
            $nin: any;
            $like: any;
            $ilike: any;
            $re: any;
            $contains: any;
            $gt: any;
            $gte: any;
            $lt: any;
            $lte: any;
        }, "strip", z.ZodTypeAny, {
            $eq?: any;
            $ne?: any;
            $in?: any;
            $nin?: any;
            $like?: any;
            $ilike?: any;
            $re?: any;
            $contains?: any;
            $gt?: any;
            $gte?: any;
            $lt?: any;
            $lte?: any;
        }, {
            $eq?: any;
            $ne?: any;
            $in?: any;
            $nin?: any;
            $like?: any;
            $ilike?: any;
            $re?: any;
            $contains?: any;
            $gt?: any;
            $gte?: any;
            $lt?: any;
            $lte?: any;
        }>]>>;
        updated_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
            $eq: any;
            $ne: any;
            $in: any;
            $nin: any;
            $like: any;
            $ilike: any;
            $re: any;
            $contains: any;
            $gt: any;
            $gte: any;
            $lt: any;
            $lte: any;
        }, "strip", z.ZodTypeAny, {
            $eq?: any;
            $ne?: any;
            $in?: any;
            $nin?: any;
            $like?: any;
            $ilike?: any;
            $re?: any;
            $contains?: any;
            $gt?: any;
            $gte?: any;
            $lt?: any;
            $lte?: any;
        }, {
            $eq?: any;
            $ne?: any;
            $in?: any;
            $nin?: any;
            $like?: any;
            $ilike?: any;
            $re?: any;
            $contains?: any;
            $gt?: any;
            $gte?: any;
            $lt?: any;
            $lte?: any;
        }>]>>;
        deleted_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
            $eq: any;
            $ne: any;
            $in: any;
            $nin: any;
            $like: any;
            $ilike: any;
            $re: any;
            $contains: any;
            $gt: any;
            $gte: any;
            $lt: any;
            $lte: any;
        }, "strip", z.ZodTypeAny, {
            $eq?: any;
            $ne?: any;
            $in?: any;
            $nin?: any;
            $like?: any;
            $ilike?: any;
            $re?: any;
            $contains?: any;
            $gt?: any;
            $gte?: any;
            $lt?: any;
            $lte?: any;
        }, {
            $eq?: any;
            $ne?: any;
            $in?: any;
            $nin?: any;
            $like?: any;
            $ilike?: any;
            $re?: any;
            $contains?: any;
            $gt?: any;
            $gte?: any;
            $lt?: any;
            $lte?: any;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        offset: number;
        limit: number;
        fields?: string | undefined;
        order?: string | undefined;
        variants?: {
            options?: {
                value: string;
                option_id: string;
            } | undefined;
            $and?: any;
            $or?: any;
        } | undefined;
        $and?: any;
        $or?: any;
        province?: string | undefined;
        country_code?: string | undefined;
        region_id?: string | undefined;
        cart_id?: string | undefined;
        q?: string | undefined;
        id?: string | string[] | undefined;
        title?: string | undefined;
        handle?: string | undefined;
        is_giftcard?: boolean | undefined;
        category_id?: string | string[] | undefined;
        sales_channel_id?: string | string[] | undefined;
        collection_id?: string | string[] | undefined;
        tag_id?: string | string[] | undefined;
        type_id?: string | string[] | undefined;
        created_at?: any;
        updated_at?: any;
        deleted_at?: any;
    }, {
        fields?: string | undefined;
        order?: string | undefined;
        offset?: unknown;
        limit?: unknown;
        variants?: {
            options?: {
                value: string;
                option_id: string;
            } | undefined;
            $and?: any;
            $or?: any;
        } | undefined;
        $and?: any;
        $or?: any;
        province?: string | undefined;
        country_code?: string | undefined;
        region_id?: string | undefined;
        cart_id?: string | undefined;
        q?: string | undefined;
        id?: string | string[] | undefined;
        title?: string | undefined;
        handle?: string | undefined;
        is_giftcard?: string | boolean | undefined;
        category_id?: string | string[] | undefined;
        sales_channel_id?: string | string[] | undefined;
        collection_id?: string | string[] | undefined;
        tag_id?: string | string[] | undefined;
        type_id?: string | string[] | undefined;
        created_at?: any;
        updated_at?: any;
        deleted_at?: any;
    }>, import("@medusajs/types").FilterableProductProps, {
        fields?: string | undefined;
        order?: string | undefined;
        offset?: unknown;
        limit?: unknown;
        variants?: {
            options?: {
                value: string;
                option_id: string;
            } | undefined;
            $and?: any;
            $or?: any;
        } | undefined;
        $and?: any;
        $or?: any;
        province?: string | undefined;
        country_code?: string | undefined;
        region_id?: string | undefined;
        cart_id?: string | undefined;
        q?: string | undefined;
        id?: string | string[] | undefined;
        title?: string | undefined;
        handle?: string | undefined;
        is_giftcard?: string | boolean | undefined;
        category_id?: string | string[] | undefined;
        sales_channel_id?: string | string[] | undefined;
        collection_id?: string | string[] | undefined;
        tag_id?: string | string[] | undefined;
        type_id?: string | string[] | undefined;
        created_at?: any;
        updated_at?: any;
        deleted_at?: any;
    }>, "many">>>;
    $or: z.ZodOptional<z.ZodLazy<any>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    q?: string | undefined;
    id?: string | string[] | undefined;
    options?: {
        value: string;
        option_id: string;
    } | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    $and?: import("@medusajs/types").FilterableProductProps[] | undefined;
    $or?: any;
}, {
    fields?: string | undefined;
    order?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    q?: string | undefined;
    id?: string | string[] | undefined;
    options?: {
        value: string;
        option_id: string;
    } | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    $and?: {
        fields?: string | undefined;
        order?: string | undefined;
        offset?: unknown;
        limit?: unknown;
        variants?: {
            options?: {
                value: string;
                option_id: string;
            } | undefined;
            $and?: any;
            $or?: any;
        } | undefined;
        $and?: any;
        $or?: any;
        province?: string | undefined;
        country_code?: string | undefined;
        region_id?: string | undefined;
        cart_id?: string | undefined;
        q?: string | undefined;
        id?: string | string[] | undefined;
        title?: string | undefined;
        handle?: string | undefined;
        is_giftcard?: string | boolean | undefined;
        category_id?: string | string[] | undefined;
        sales_channel_id?: string | string[] | undefined;
        collection_id?: string | string[] | undefined;
        tag_id?: string | string[] | undefined;
        type_id?: string | string[] | undefined;
        created_at?: any;
        updated_at?: any;
        deleted_at?: any;
    }[] | undefined;
    $or?: any;
}>;
export type StoreGetProductsParamsType = z.infer<typeof StoreGetProductsParams>;
export declare const StoreGetProductsParams: any;
//# sourceMappingURL=validators.d.ts.map