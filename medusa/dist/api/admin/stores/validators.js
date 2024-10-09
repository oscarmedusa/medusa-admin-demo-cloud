"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateStore = exports.AdminGetStoresParams = exports.AdminGetStoreParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.AdminGetStoreParams = (0, validators_1.createSelectParams)();
exports.AdminGetStoresParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetStoresParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetStoresParams.array()).optional(),
}));
exports.AdminUpdateStore = zod_1.z.object({
    name: zod_1.z.string().optional(),
    supported_currencies: zod_1.z
        .array(zod_1.z.object({
        currency_code: zod_1.z.string(),
        is_default: zod_1.z.boolean().optional(),
        is_tax_inclusive: zod_1.z.boolean().optional(),
    }))
        .optional(),
    default_sales_channel_id: zod_1.z.string().nullish(),
    default_region_id: zod_1.z.string().nullish(),
    default_location_id: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
});
//# sourceMappingURL=validators.js.map