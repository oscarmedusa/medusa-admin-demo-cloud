import { z } from "zod";
export type AdminGetInventoryItemParamsType = z.infer<typeof AdminGetInventoryItemParams>;
export declare const AdminGetInventoryItemParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetInventoryItemsParamsType = z.infer<typeof AdminGetInventoryItemsParams>;
export declare const AdminGetInventoryItemsParams: any;
export type AdminGetInventoryLocationLevelParamsType = z.infer<typeof AdminGetInventoryLocationLevelParams>;
export declare const AdminGetInventoryLocationLevelParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetInventoryLocationLevelsParamsType = z.infer<typeof AdminGetInventoryLocationLevelsParams>;
export declare const AdminGetInventoryLocationLevelsParams: any;
export type AdminCreateInventoryLocationLevelType = z.infer<typeof AdminCreateInventoryLocationLevel>;
export declare const AdminCreateInventoryLocationLevel: z.ZodObject<{
    location_id: z.ZodString;
    stocked_quantity: z.ZodOptional<z.ZodNumber>;
    incoming_quantity: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    location_id: string;
    stocked_quantity?: number | undefined;
    incoming_quantity?: number | undefined;
}, {
    location_id: string;
    stocked_quantity?: number | undefined;
    incoming_quantity?: number | undefined;
}>;
export type AdminUpdateInventoryLocationLevelType = z.infer<typeof AdminUpdateInventoryLocationLevel>;
export declare const AdminUpdateInventoryLocationLevel: z.ZodObject<{
    stocked_quantity: z.ZodOptional<z.ZodNumber>;
    incoming_quantity: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    stocked_quantity?: number | undefined;
    incoming_quantity?: number | undefined;
}, {
    stocked_quantity?: number | undefined;
    incoming_quantity?: number | undefined;
}>;
export type AdminCreateInventoryItemType = z.infer<typeof AdminCreateInventoryItem>;
export declare const AdminCreateInventoryItem: z.ZodObject<{
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requires_shipping: z.ZodOptional<z.ZodBoolean>;
    thumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    location_levels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        location_id: z.ZodString;
        stocked_quantity: z.ZodOptional<z.ZodNumber>;
        incoming_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        location_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }, {
        location_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    sku?: string | null | undefined;
    hs_code?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    location_levels?: {
        location_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }[] | undefined;
}, {
    sku?: string | null | undefined;
    hs_code?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    location_levels?: {
        location_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }[] | undefined;
}>;
export type AdminUpdateInventoryItemType = z.infer<typeof AdminUpdateInventoryItem>;
export declare const AdminUpdateInventoryItem: z.ZodObject<{
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requires_shipping: z.ZodOptional<z.ZodBoolean>;
    thumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    sku?: string | null | undefined;
    hs_code?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    sku?: string | null | undefined;
    hs_code?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
//# sourceMappingURL=validators.d.ts.map