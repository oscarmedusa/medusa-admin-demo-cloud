"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanString = exports.OptionalBooleanValidator = exports.BigNumberInput = exports.AddressPayload = void 0;
const zod_1 = require("zod");
exports.AddressPayload = zod_1.z
    .object({
    first_name: zod_1.z.string().nullish(),
    last_name: zod_1.z.string().nullish(),
    phone: zod_1.z.string().nullish(),
    company: zod_1.z.string().nullish(),
    address_1: zod_1.z.string().nullish(),
    address_2: zod_1.z.string().nullish(),
    city: zod_1.z.string().nullish(),
    country_code: zod_1.z.string().nullish(),
    province: zod_1.z.string().nullish(),
    postal_code: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
})
    .strict();
exports.BigNumberInput = zod_1.z.union([
    zod_1.z.number(),
    zod_1.z.string(),
    zod_1.z.object({
        value: zod_1.z.string(),
        precision: zod_1.z.number(),
    }),
]);
const optionalBooleanMapper = new Map([
    ["undefined", undefined],
    ["null", null],
    ["true", true],
    ["false", false],
]);
/**
 * @deprecated Use `booleanString` instead
 * It support the chainable API of zod. Please note it does not come with `.optional()` by default
 */
exports.OptionalBooleanValidator = zod_1.z.preprocess((val) => optionalBooleanMapper.get(val?.toLowerCase()), zod_1.z.boolean().optional());
/**
 * Validates that a value is a boolean when it is passed as a string.
 */
const booleanString = () => zod_1.z
    .union([zod_1.z.boolean(), zod_1.z.string()])
    .refine((value) => {
    return ["true", "false"].includes(value.toString().toLowerCase());
})
    .transform((value) => {
    return value.toString().toLowerCase() === "true";
});
exports.booleanString = booleanString;
//# sourceMappingURL=common.js.map