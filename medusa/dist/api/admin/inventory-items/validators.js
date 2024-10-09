"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateInventoryItem = exports.AdminCreateInventoryItem = exports.AdminUpdateInventoryLocationLevel = exports.AdminCreateInventoryLocationLevel = exports.AdminGetInventoryLocationLevelsParams = exports.AdminGetInventoryLocationLevelParams = exports.AdminGetInventoryItemsParams = exports.AdminGetInventoryItemParams = void 0;
const zod_1 = require("zod");
const common_validators_1 = require("../../utils/common-validators");
const validators_1 = require("../../utils/validators");
exports.AdminGetInventoryItemParams = (0, validators_1.createSelectParams)();
exports.AdminGetInventoryItemsParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
})
    .merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    sku: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    origin_country: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    mid_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    hs_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    material: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    requires_shipping: (0, common_validators_1.booleanString)().optional(),
    weight: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    length: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    height: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    width: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    location_levels: zod_1.z
        .object({
        location_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    })
        .optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetInventoryItemsParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetInventoryItemsParams.array()).optional(),
}))
    .strict();
exports.AdminGetInventoryLocationLevelParams = (0, validators_1.createSelectParams)();
exports.AdminGetInventoryLocationLevelsParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    location_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z
        .lazy(() => exports.AdminGetInventoryLocationLevelsParams.array())
        .optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetInventoryLocationLevelsParams.array()).optional(),
}));
exports.AdminCreateInventoryLocationLevel = zod_1.z
    .object({
    location_id: zod_1.z.string(),
    stocked_quantity: zod_1.z.number().min(0).optional(),
    incoming_quantity: zod_1.z.number().min(0).optional(),
})
    .strict();
exports.AdminUpdateInventoryLocationLevel = zod_1.z
    .object({
    stocked_quantity: zod_1.z.number().min(0).optional(),
    incoming_quantity: zod_1.z.number().min(0).optional(),
})
    .strict();
exports.AdminCreateInventoryItem = zod_1.z
    .object({
    sku: zod_1.z.string().nullish(),
    hs_code: zod_1.z.string().nullish(),
    weight: zod_1.z.number().nullish(),
    length: zod_1.z.number().nullish(),
    height: zod_1.z.number().nullish(),
    width: zod_1.z.number().nullish(),
    origin_country: zod_1.z.string().nullish(),
    mid_code: zod_1.z.string().nullish(),
    material: zod_1.z.string().nullish(),
    title: zod_1.z.string().nullish(),
    description: zod_1.z.string().nullish(),
    requires_shipping: zod_1.z.boolean().optional(),
    thumbnail: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
    location_levels: zod_1.z.array(exports.AdminCreateInventoryLocationLevel).optional(),
})
    .strict();
exports.AdminUpdateInventoryItem = zod_1.z
    .object({
    sku: zod_1.z.string().nullish(),
    hs_code: zod_1.z.string().nullish(),
    weight: zod_1.z.number().nullish(),
    length: zod_1.z.number().nullish(),
    height: zod_1.z.number().nullish(),
    width: zod_1.z.number().nullish(),
    origin_country: zod_1.z.string().nullish(),
    mid_code: zod_1.z.string().nullish(),
    material: zod_1.z.string().nullish(),
    title: zod_1.z.string().nullish(),
    description: zod_1.z.string().nullish(),
    requires_shipping: zod_1.z.boolean().optional(),
    thumbnail: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
})
    .strict();
//# sourceMappingURL=validators.js.map