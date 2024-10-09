"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateTaxRegion = exports.AdminGetTaxRegionsParams = exports.AdminGetTaxRegionParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.AdminGetTaxRegionParams = (0, validators_1.createSelectParams)();
exports.AdminGetTaxRegionsParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    country_code: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    province_code: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    parent_id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    created_by: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetTaxRegionsParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetTaxRegionsParams.array()).optional(),
}));
exports.AdminCreateTaxRegion = zod_1.z.object({
    country_code: zod_1.z.string(),
    province_code: zod_1.z.string().nullish(),
    parent_id: zod_1.z.string().nullish(),
    default_tax_rate: zod_1.z
        .object({
        rate: zod_1.z.number().optional(),
        code: zod_1.z.string(),
        name: zod_1.z.string(),
        is_combinable: zod_1.z.boolean().optional(),
        metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
    })
        .optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
});
//# sourceMappingURL=validators.js.map