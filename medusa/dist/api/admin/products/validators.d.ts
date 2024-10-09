import { BatchMethodRequest } from "@medusajs/framework/types";
import { ProductStatus } from "@medusajs/framework/utils";
import { z } from "zod";
export declare const AdminGetProductParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminGetProductVariantParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminGetProductOptionParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetProductVariantsParamsType = z.infer<typeof AdminGetProductVariantsParams>;
export declare const AdminGetProductVariantsParams: any;
export type AdminGetProductsParamsType = z.infer<typeof AdminGetProductsParams>;
export declare const AdminGetProductsParams: any;
export type AdminGetProductOptionsParamsType = z.infer<typeof AdminGetProductOptionsParams>;
export declare const AdminGetProductOptionsParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    q: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    title: z.ZodOptional<z.ZodString>;
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
    $and: z.ZodOptional<z.ZodLazy<any>>;
    $or: z.ZodOptional<z.ZodLazy<any>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    q?: string | undefined;
    id?: string | string[] | undefined;
    title?: string | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    $and?: any;
    $or?: any;
}, {
    fields?: string | undefined;
    order?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    q?: string | undefined;
    id?: string | string[] | undefined;
    title?: string | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    $and?: any;
    $or?: any;
}>;
export type AdminCreateProductTagType = z.infer<typeof AdminCreateProductTag>;
export declare const AdminCreateProductTag: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
export type AdminUpdateProductTagType = z.infer<typeof AdminUpdateProductTag>;
export declare const AdminUpdateProductTag: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    value?: string | undefined;
}, {
    id?: string | undefined;
    value?: string | undefined;
}>;
export type AdminCreateProductOptionType = z.infer<typeof CreateProductOption>;
export declare const CreateProductOption: z.ZodObject<{
    title: z.ZodString;
    values: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    values: string[];
    title: string;
}, {
    values: string[];
    title: string;
}>;
export declare const AdminCreateProductOption: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type AdminUpdateProductOptionType = z.infer<typeof UpdateProductOption>;
export declare const UpdateProductOption: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    title?: string | undefined;
    values?: string[] | undefined;
}, {
    id?: string | undefined;
    title?: string | undefined;
    values?: string[] | undefined;
}>;
export declare const AdminUpdateProductOption: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type AdminCreateVariantPriceType = z.infer<typeof AdminCreateVariantPrice>;
export declare const AdminCreateVariantPrice: z.ZodObject<{
    currency_code: z.ZodString;
    amount: z.ZodNumber;
    min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    amount: number;
    currency_code: string;
    min_quantity?: number | null | undefined;
    max_quantity?: number | null | undefined;
    rules?: Record<string, string> | undefined;
}, {
    amount: number;
    currency_code: string;
    min_quantity?: number | null | undefined;
    max_quantity?: number | null | undefined;
    rules?: Record<string, string> | undefined;
}>;
export type AdminUpdateVariantPriceType = z.infer<typeof AdminUpdateVariantPrice>;
export declare const AdminUpdateVariantPrice: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    currency_code: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
    min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    currency_code?: string | undefined;
    amount?: number | undefined;
    min_quantity?: number | null | undefined;
    max_quantity?: number | null | undefined;
    rules?: Record<string, string> | undefined;
}, {
    id?: string | undefined;
    currency_code?: string | undefined;
    amount?: number | undefined;
    min_quantity?: number | null | undefined;
    max_quantity?: number | null | undefined;
    rules?: Record<string, string> | undefined;
}>;
export type AdminCreateProductTypeType = z.infer<typeof AdminCreateProductType>;
export declare const AdminCreateProductType: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
export type AdminCreateProductVariantType = z.infer<typeof CreateProductVariant>;
export declare const CreateProductVariant: z.ZodObject<{
    title: z.ZodString;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    allow_backorder: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>>;
    manage_inventory: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>>;
    variant_rank: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    prices: z.ZodArray<z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        currency_code: string;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        amount: number;
        currency_code: string;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    inventory_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        inventory_item_id: z.ZodString;
        required_quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        inventory_item_id: string;
        required_quantity: number;
    }, {
        inventory_item_id: string;
        required_quantity: number;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    prices: {
        amount: number;
        currency_code: string;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[];
    title: string;
    allow_backorder: boolean;
    manage_inventory: boolean;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    variant_rank?: number | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    options?: Record<string, string> | undefined;
    inventory_items?: {
        inventory_item_id: string;
        required_quantity: number;
    }[] | undefined;
}, {
    prices: {
        amount: number;
        currency_code: string;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[];
    title: string;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    allow_backorder?: string | boolean | undefined;
    manage_inventory?: string | boolean | undefined;
    variant_rank?: number | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    options?: Record<string, string> | undefined;
    inventory_items?: {
        inventory_item_id: string;
        required_quantity: number;
    }[] | undefined;
}>;
export declare const AdminCreateProductVariant: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type AdminUpdateProductVariantType = z.infer<typeof UpdateProductVariant>;
export declare const UpdateProductVariant: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        currency_code: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    allow_backorder: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    manage_inventory: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    variant_rank: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    title?: string | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
    variant_rank?: number | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    options?: Record<string, string> | undefined;
}, {
    id?: string | undefined;
    title?: string | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    allow_backorder?: string | boolean | undefined;
    manage_inventory?: string | boolean | undefined;
    variant_rank?: number | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    options?: Record<string, string> | undefined;
}>;
export declare const AdminUpdateProductVariant: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type AdminBatchUpdateProductVariantType = z.infer<typeof AdminBatchUpdateProductVariant>;
export declare const AdminBatchUpdateProductVariant: z.ZodObject<{
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        currency_code: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">>;
    title: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    allow_backorder: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    manage_inventory: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    variant_rank: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    length?: number | null | undefined;
    options?: Record<string, string> | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
    title?: string | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    weight?: number | null | undefined;
    origin_country?: string | null | undefined;
    hs_code?: string | null | undefined;
    material?: string | null | undefined;
    mid_code?: string | null | undefined;
    sku?: string | null | undefined;
    barcode?: string | null | undefined;
    allow_backorder?: boolean | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    manage_inventory?: boolean | undefined;
    variant_rank?: number | undefined;
}, {
    id: string;
    length?: number | null | undefined;
    options?: Record<string, string> | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
    title?: string | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    weight?: number | null | undefined;
    origin_country?: string | null | undefined;
    hs_code?: string | null | undefined;
    material?: string | null | undefined;
    mid_code?: string | null | undefined;
    sku?: string | null | undefined;
    barcode?: string | null | undefined;
    allow_backorder?: string | boolean | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    manage_inventory?: string | boolean | undefined;
    variant_rank?: number | undefined;
}>;
export declare const IdAssociation: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type AdminCreateProductType = z.infer<typeof CreateProduct>;
export declare const CreateProduct: z.ZodObject<{
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_giftcard: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>>;
    discountable: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>;
    thumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    handle: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodNativeEnum<typeof ProductStatus>>>>;
    type_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    collection_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        values: string[];
        title: string;
    }, {
        values: string[];
        title: string;
    }>, "many">>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        allow_backorder: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>>;
        manage_inventory: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>>;
        variant_rank: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        prices: z.ZodArray<z.ZodObject<{
            currency_code: z.ZodString;
            amount: z.ZodNumber;
            min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            amount: number;
            currency_code: string;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }, {
            amount: number;
            currency_code: string;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }>, "many">;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        inventory_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
            inventory_item_id: z.ZodString;
            required_quantity: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            inventory_item_id: string;
            required_quantity: number;
        }, {
            inventory_item_id: string;
            required_quantity: number;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        prices: {
            amount: number;
            currency_code: string;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        title: string;
        allow_backorder: boolean;
        manage_inventory: boolean;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }, {
        prices: {
            amount: number;
            currency_code: string;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        title: string;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: string | boolean | undefined;
        manage_inventory?: string | boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }>, "many">>;
    sales_channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    title: string;
    is_giftcard: boolean;
    discountable: boolean;
    status: ProductStatus | null;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | null | undefined;
    handle?: string | undefined;
    type_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    options?: {
        values: string[];
        title: string;
    }[] | undefined;
    variants?: {
        prices: {
            amount: number;
            currency_code: string;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        title: string;
        allow_backorder: boolean;
        manage_inventory: boolean;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }[] | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    title: string;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    is_giftcard?: string | boolean | undefined;
    discountable?: string | boolean | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | null | undefined;
    handle?: string | undefined;
    status?: ProductStatus | null | undefined;
    type_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    options?: {
        values: string[];
        title: string;
    }[] | undefined;
    variants?: {
        prices: {
            amount: number;
            currency_code: string;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        title: string;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: string | boolean | undefined;
        manage_inventory?: string | boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }[] | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export declare const AdminCreateProduct: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type AdminUpdateProductType = z.infer<typeof UpdateProduct>;
export declare const UpdateProduct: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    discountable: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    is_giftcard: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }>, "many">>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            currency_code: z.ZodOptional<z.ZodString>;
            amount: z.ZodOptional<z.ZodNumber>;
            min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }>, "many">>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        allow_backorder: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
        manage_inventory: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
        variant_rank: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strict", z.ZodTypeAny, {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }, {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: string | boolean | undefined;
        manage_inventory?: string | boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }>, "many">>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof ProductStatus>>;
    subtitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>;
    thumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    handle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    collection_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    sales_channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    title?: string | undefined;
    discountable?: boolean | undefined;
    is_giftcard?: boolean | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    variants?: {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }[] | undefined;
    status?: ProductStatus | undefined;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | null | undefined;
    handle?: string | null | undefined;
    type_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    title?: string | undefined;
    discountable?: string | boolean | undefined;
    is_giftcard?: string | boolean | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    variants?: {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: string | boolean | undefined;
        manage_inventory?: string | boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }[] | undefined;
    status?: ProductStatus | undefined;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | null | undefined;
    handle?: string | null | undefined;
    type_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export declare const AdminUpdateProduct: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type AdminBatchUpdateProductType = z.infer<typeof AdminBatchUpdateProduct>;
export declare const AdminBatchUpdateProduct: z.ZodObject<{
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }>, "many">>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            currency_code: z.ZodOptional<z.ZodString>;
            amount: z.ZodOptional<z.ZodNumber>;
            min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }>, "many">>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        allow_backorder: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
        manage_inventory: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
        variant_rank: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strict", z.ZodTypeAny, {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }, {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: string | boolean | undefined;
        manage_inventory?: string | boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }>, "many">>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_giftcard: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    discountable: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    thumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    handle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof ProductStatus>>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>;
    type_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    collection_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    sales_channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    length?: number | null | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    variants?: {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }[] | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    description?: string | null | undefined;
    title?: string | undefined;
    subtitle?: string | null | undefined;
    is_giftcard?: boolean | undefined;
    discountable?: boolean | undefined;
    thumbnail?: string | null | undefined;
    handle?: string | null | undefined;
    status?: ProductStatus | undefined;
    images?: {
        url: string;
    }[] | undefined;
    type_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    weight?: number | null | undefined;
    origin_country?: string | null | undefined;
    hs_code?: string | null | undefined;
    material?: string | null | undefined;
    mid_code?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
}, {
    id: string;
    length?: number | null | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    variants?: {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: string | boolean | undefined;
        manage_inventory?: string | boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }[] | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    description?: string | null | undefined;
    title?: string | undefined;
    subtitle?: string | null | undefined;
    is_giftcard?: string | boolean | undefined;
    discountable?: string | boolean | undefined;
    thumbnail?: string | null | undefined;
    handle?: string | null | undefined;
    status?: ProductStatus | undefined;
    images?: {
        url: string;
    }[] | undefined;
    type_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    weight?: number | null | undefined;
    origin_country?: string | null | undefined;
    hs_code?: string | null | undefined;
    material?: string | null | undefined;
    mid_code?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
}>;
export declare const AdminCreateVariantInventoryItem: z.ZodObject<{
    required_quantity: z.ZodNumber;
    inventory_item_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    inventory_item_id: string;
    required_quantity: number;
}, {
    inventory_item_id: string;
    required_quantity: number;
}>;
export type AdminCreateVariantInventoryItemType = z.infer<typeof AdminCreateVariantInventoryItem>;
export declare const AdminUpdateVariantInventoryItem: z.ZodObject<{
    required_quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    required_quantity: number;
}, {
    required_quantity: number;
}>;
export type AdminUpdateVariantInventoryItemType = z.infer<typeof AdminUpdateVariantInventoryItem>;
export declare const AdminBatchCreateVariantInventoryItem: z.ZodObject<{
    required_quantity: z.ZodNumber;
    inventory_item_id: z.ZodString;
    variant_id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    variant_id: string;
    inventory_item_id: string;
    required_quantity: number;
}, {
    variant_id: string;
    inventory_item_id: string;
    required_quantity: number;
}>;
export type AdminBatchCreateVariantInventoryItemType = z.infer<typeof AdminBatchCreateVariantInventoryItem>;
export declare const AdminBatchUpdateVariantInventoryItem: z.ZodObject<{
    required_quantity: z.ZodNumber;
    inventory_item_id: z.ZodString;
    variant_id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    variant_id: string;
    inventory_item_id: string;
    required_quantity: number;
}, {
    variant_id: string;
    inventory_item_id: string;
    required_quantity: number;
}>;
export type AdminBatchUpdateVariantInventoryItemType = z.infer<typeof AdminBatchUpdateVariantInventoryItem>;
export declare const AdminBatchDeleteVariantInventoryItem: z.ZodObject<{
    inventory_item_id: z.ZodString;
    variant_id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    variant_id: string;
    inventory_item_id: string;
}, {
    variant_id: string;
    inventory_item_id: string;
}>;
export type AdminBatchDeleteVariantInventoryItemType = z.infer<typeof AdminBatchDeleteVariantInventoryItem>;
export type AdminBatchVariantInventoryItemsType = BatchMethodRequest<AdminBatchCreateVariantInventoryItemType, AdminBatchUpdateVariantInventoryItemType, AdminBatchDeleteVariantInventoryItemType>;
//# sourceMappingURL=validators.d.ts.map