import { z } from "zod";
export declare const AdminCustomerParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const AdminCustomerGroupInCustomerParams: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
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
}, "strip", z.ZodTypeAny, {
    id?: string | string[] | undefined;
    name?: string | string[] | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}, {
    id?: string | string[] | undefined;
    name?: string | string[] | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}>;
export declare const AdminCustomersParams: any;
export declare const CreateCustomer: z.ZodObject<{
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    phone?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    phone?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export declare const AdminCreateCustomer: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export declare const UpdateCustomer: z.ZodObject<{
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    phone?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    phone?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export declare const AdminUpdateCustomer: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export declare const CreateCustomerAddress: z.ZodObject<{
    address_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_default_shipping: z.ZodOptional<z.ZodBoolean>;
    is_default_billing: z.ZodOptional<z.ZodBoolean>;
    company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address_1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address_2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    province: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postal_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    address_name?: string | null | undefined;
    is_default_shipping?: boolean | undefined;
    is_default_billing?: boolean | undefined;
    company?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    address_1?: string | null | undefined;
    address_2?: string | null | undefined;
    city?: string | null | undefined;
    country_code?: string | null | undefined;
    province?: string | null | undefined;
    postal_code?: string | null | undefined;
    phone?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    address_name?: string | null | undefined;
    is_default_shipping?: boolean | undefined;
    is_default_billing?: boolean | undefined;
    company?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    address_1?: string | null | undefined;
    address_2?: string | null | undefined;
    city?: string | null | undefined;
    country_code?: string | null | undefined;
    province?: string | null | undefined;
    postal_code?: string | null | undefined;
    phone?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export declare const AdminCreateCustomerAddress: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export declare const AdminUpdateCustomerAddress: (additionalDataValidator?: z.ZodObject<any, any>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export declare const AdminCustomerAddressesParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    q: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    city: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    country_code: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    province: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    postal_code: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    q?: string | undefined;
    company?: string | string[] | undefined;
    city?: string | string[] | undefined;
    country_code?: string | string[] | undefined;
    province?: string | string[] | undefined;
    postal_code?: string | string[] | undefined;
}, {
    fields?: string | undefined;
    order?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    q?: string | undefined;
    company?: string | string[] | undefined;
    city?: string | string[] | undefined;
    country_code?: string | string[] | undefined;
    province?: string | string[] | undefined;
    postal_code?: string | string[] | undefined;
}>;
export type AdminCustomerParamsType = z.infer<typeof AdminCustomerParams>;
export type AdminCustomersParamsType = z.infer<typeof AdminCustomersParams>;
export type AdminCreateCustomerType = z.infer<typeof CreateCustomer>;
export type AdminUpdateCustomerType = z.infer<typeof UpdateCustomer>;
export type AdminCreateCustomerAddressType = z.infer<typeof CreateCustomerAddress>;
//# sourceMappingURL=validators.d.ts.map