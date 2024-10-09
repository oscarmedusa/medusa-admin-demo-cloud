import { z } from "zod";
export declare const AddressPayload: z.ZodObject<{
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
}>;
export declare const BigNumberInput: z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodObject<{
    value: z.ZodString;
    precision: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    value: string;
    precision: number;
}, {
    value: string;
    precision: number;
}>]>;
/**
 * @deprecated Use `booleanString` instead
 * It support the chainable API of zod. Please note it does not come with `.optional()` by default
 */
export declare const OptionalBooleanValidator: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
/**
 * Validates that a value is a boolean when it is passed as a string.
 */
export declare const booleanString: () => z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>;
//# sourceMappingURL=common.d.ts.map