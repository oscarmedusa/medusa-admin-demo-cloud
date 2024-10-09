import { z } from "zod";
export type AdminGetOrderParamsType = z.infer<typeof AdminGetOrderParams>;
export declare const AdminGetOrderParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetOrdersParamsType = z.infer<typeof AdminGetOrdersParams>;
export declare const AdminGetOrdersParams: any;
declare enum Status {
    completed = "completed"
}
export type AdminCreateDraftOrderType = z.infer<typeof CreateDraftOrder>;
declare const CreateDraftOrder: z.ZodObject<{
    status: z.ZodOptional<z.ZodNativeEnum<typeof Status>>;
    sales_channel_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customer_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    billing_address: z.ZodOptional<z.ZodObject<{
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
    }>>;
    shipping_address: z.ZodOptional<z.ZodObject<{
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
    }>>;
    items: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodObject<{
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        variant_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        unit_price: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodObject<{
            value: z.ZodString;
            precision: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: string;
            precision: number;
        }, {
            value: string;
            precision: number;
        }>]>>>;
        quantity: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        title?: string | null | undefined;
        sku?: string | null | undefined;
        barcode?: string | null | undefined;
        variant_id?: string | null | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }, {
        quantity: number;
        title?: string | null | undefined;
        sku?: string | null | undefined;
        barcode?: string | null | undefined;
        variant_id?: string | null | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }>, {
        quantity: number;
        title?: string | null | undefined;
        sku?: string | null | undefined;
        barcode?: string | null | undefined;
        variant_id?: string | null | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }, {
        quantity: number;
        title?: string | null | undefined;
        sku?: string | null | undefined;
        barcode?: string | null | undefined;
        variant_id?: string | null | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }>, "many">>;
    region_id: z.ZodString;
    promo_codes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    no_notification_order: z.ZodOptional<z.ZodBoolean>;
    shipping_methods: z.ZodArray<z.ZodObject<{
        shipping_method_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodString;
        shipping_option_id: z.ZodString;
        data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        amount: z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodObject<{
            value: z.ZodString;
            precision: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: string;
            precision: number;
        }, {
            value: string;
            precision: number;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        shipping_option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | null | undefined;
        data?: Record<string, unknown> | undefined;
    }, {
        name: string;
        shipping_option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | null | undefined;
        data?: Record<string, unknown> | undefined;
    }>, "many">;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    shipping_methods: {
        name: string;
        shipping_option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | null | undefined;
        data?: Record<string, unknown> | undefined;
    }[];
    region_id: string;
    status?: Status.completed | undefined;
    sales_channel_id?: string | null | undefined;
    email?: string | null | undefined;
    customer_id?: string | null | undefined;
    billing_address?: {
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
    shipping_address?: {
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
    items?: {
        quantity: number;
        title?: string | null | undefined;
        sku?: string | null | undefined;
        barcode?: string | null | undefined;
        variant_id?: string | null | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }[] | undefined;
    promo_codes?: string[] | undefined;
    currency_code?: string | null | undefined;
    no_notification_order?: boolean | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    shipping_methods: {
        name: string;
        shipping_option_id: string;
        amount: (string | number | {
            value: string;
            precision: number;
        }) & (string | number | {
            value: string;
            precision: number;
        } | undefined);
        shipping_method_id?: string | null | undefined;
        data?: Record<string, unknown> | undefined;
    }[];
    region_id: string;
    status?: Status.completed | undefined;
    sales_channel_id?: string | null | undefined;
    email?: string | null | undefined;
    customer_id?: string | null | undefined;
    billing_address?: {
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
    shipping_address?: {
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
    items?: {
        quantity: number;
        title?: string | null | undefined;
        sku?: string | null | undefined;
        barcode?: string | null | undefined;
        variant_id?: string | null | undefined;
        unit_price?: string | number | {
            value: string;
            precision: number;
        } | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
    }[] | undefined;
    promo_codes?: string[] | undefined;
    currency_code?: string | null | undefined;
    no_notification_order?: boolean | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export declare const AdminCreateDraftOrder: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export {};
//# sourceMappingURL=validators.d.ts.map