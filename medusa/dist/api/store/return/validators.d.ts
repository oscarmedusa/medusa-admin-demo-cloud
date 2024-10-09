import { z } from "zod";
export type ReturnParamsType = z.infer<typeof ReturnParams>;
export declare const ReturnParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type ReturnsParamsType = z.infer<typeof ReturnsParams>;
export declare const ReturnsParams: any;
export declare const StorePostReturnsReqSchema: z.ZodObject<{
    order_id: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        quantity: z.ZodNumber;
        reason_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        quantity: number;
        reason_id?: string | null | undefined;
        note?: string | null | undefined;
    }, {
        id: string;
        quantity: number;
        reason_id?: string | null | undefined;
        note?: string | null | undefined;
    }>, "many">;
    return_shipping: z.ZodObject<{
        option_id: z.ZodString;
        price: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        option_id: string;
        price?: number | undefined;
    }, {
        option_id: string;
        price?: number | undefined;
    }>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    receive_now: z.ZodOptional<z.ZodBoolean>;
    location_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        quantity: number;
        reason_id?: string | null | undefined;
        note?: string | null | undefined;
    }[];
    order_id: string;
    return_shipping: {
        option_id: string;
        price?: number | undefined;
    };
    note?: string | null | undefined;
    receive_now?: boolean | undefined;
    location_id?: string | null | undefined;
}, {
    items: {
        id: string;
        quantity: number;
        reason_id?: string | null | undefined;
        note?: string | null | undefined;
    }[];
    order_id: string;
    return_shipping: {
        option_id: string;
        price?: number | undefined;
    };
    note?: string | null | undefined;
    receive_now?: boolean | undefined;
    location_id?: string | null | undefined;
}>;
export type StorePostReturnsReqSchemaType = z.infer<typeof StorePostReturnsReqSchema>;
//# sourceMappingURL=validators.d.ts.map