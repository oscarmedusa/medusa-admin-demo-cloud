import { z } from "zod";
export type StoreGetPromotionType = z.infer<typeof StoreGetCartsCart>;
export declare const StoreGetCartsCart: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreCreateCartType = z.infer<typeof CreateCart>;
export declare const CreateCart: z.ZodObject<{
    region_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    shipping_address: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address_1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address_2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        province: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        postal_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strict", z.ZodTypeAny, {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }, {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }>, z.ZodString]>>;
    billing_address: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address_1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address_2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        province: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        postal_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strict", z.ZodTypeAny, {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }, {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }>, z.ZodString]>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        variant_id: z.ZodString;
        quantity: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        variant_id: string;
        metadata?: Record<string, unknown> | null | undefined;
    }, {
        quantity: number;
        variant_id: string;
        metadata?: Record<string, unknown> | null | undefined;
    }>, "many">>;
    sales_channel_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    region_id?: string | null | undefined;
    shipping_address?: string | {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    billing_address?: string | {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    email?: string | null | undefined;
    currency_code?: string | null | undefined;
    items?: {
        quantity: number;
        variant_id: string;
        metadata?: Record<string, unknown> | null | undefined;
    }[] | undefined;
    sales_channel_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    region_id?: string | null | undefined;
    shipping_address?: string | {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    billing_address?: string | {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    email?: string | null | undefined;
    currency_code?: string | null | undefined;
    items?: {
        quantity: number;
        variant_id: string;
        metadata?: Record<string, unknown> | null | undefined;
    }[] | undefined;
    sales_channel_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export declare const StoreCreateCart: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type StoreAddCartPromotionsType = z.infer<typeof StoreAddCartPromotions>;
export declare const StoreAddCartPromotions: z.ZodObject<{
    promo_codes: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    promo_codes: string[];
}, {
    promo_codes: string[];
}>;
export type StoreRemoveCartPromotionsType = z.infer<typeof StoreRemoveCartPromotions>;
export declare const StoreRemoveCartPromotions: z.ZodObject<{
    promo_codes: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    promo_codes: string[];
}, {
    promo_codes: string[];
}>;
export type StoreUpdateCartType = z.infer<typeof UpdateCart>;
export declare const UpdateCart: z.ZodObject<{
    region_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    billing_address: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address_1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address_2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        province: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        postal_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strict", z.ZodTypeAny, {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }, {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }>, z.ZodString]>>;
    shipping_address: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address_1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address_2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        province: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        postal_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strict", z.ZodTypeAny, {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }, {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }>, z.ZodString]>>;
    sales_channel_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    promo_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strict", z.ZodTypeAny, {
    region_id?: string | null | undefined;
    email?: string | null | undefined;
    billing_address?: string | {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    shipping_address?: string | {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    sales_channel_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    promo_codes?: string[] | undefined;
}, {
    region_id?: string | null | undefined;
    email?: string | null | undefined;
    billing_address?: string | {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    shipping_address?: string | {
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone?: string | null | undefined;
        company?: string | null | undefined;
        address_1?: string | null | undefined;
        address_2?: string | null | undefined;
        city?: string | null | undefined;
        country_code?: string | null | undefined;
        province?: string | null | undefined;
        postal_code?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    } | undefined;
    sales_channel_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    promo_codes?: string[] | undefined;
}>;
export declare const StoreUpdateCart: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export type StoreCalculateCartTaxesType = z.infer<typeof StoreCalculateCartTaxes>;
export declare const StoreCalculateCartTaxes: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreAddCartLineItemType = z.infer<typeof StoreAddCartLineItem>;
export declare const StoreAddCartLineItem: z.ZodObject<{
    variant_id: z.ZodString;
    quantity: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    variant_id: string;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    quantity: number;
    variant_id: string;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export type StoreUpdateCartLineItemType = z.infer<typeof StoreUpdateCartLineItem>;
export declare const StoreUpdateCartLineItem: z.ZodObject<{
    quantity: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    quantity: number;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export type StoreAddCartShippingMethodsType = z.infer<typeof StoreAddCartShippingMethods>;
export declare const StoreAddCartShippingMethods: z.ZodObject<{
    option_id: z.ZodString;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    option_id: string;
    data?: Record<string, unknown> | undefined;
}, {
    option_id: string;
    data?: Record<string, unknown> | undefined;
}>;
export type StoreCreateCartPaymentCollectionType = z.infer<typeof StoreCreateCartPaymentCollection>;
export declare const StoreCreateCartPaymentCollection: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
//# sourceMappingURL=validators.d.ts.map