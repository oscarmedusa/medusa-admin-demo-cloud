"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetProductsParams = exports.StoreGetProductVariantsParams = exports.StoreGetProductParams = void 0;
const zod_1 = require("zod");
const common_validators_1 = require("../../utils/common-validators");
const validators_1 = require("../../utils/validators");
exports.StoreGetProductParams = (0, validators_1.createSelectParams)().merge(
// These are used to populate the tax and pricing context
zod_1.z.object({
    region_id: zod_1.z.string().optional(),
    country_code: zod_1.z.string().optional(),
    province: zod_1.z.string().optional(),
    cart_id: zod_1.z.string().optional(),
}));
exports.StoreGetProductVariantsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    options: zod_1.z.object({ value: zod_1.z.string(), option_id: zod_1.z.string() }).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(() => exports.StoreGetProductsParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.StoreGetProductsParams.array()).optional(),
}));
exports.StoreGetProductsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
})
    .merge(zod_1.z
    .object({
    // These are used to populate the tax and pricing context
    region_id: zod_1.z.string().optional(),
    country_code: zod_1.z.string().optional(),
    province: zod_1.z.string().optional(),
    cart_id: zod_1.z.string().optional(),
    variants: zod_1.z
        .object({
        options: zod_1.z
            .object({ value: zod_1.z.string(), option_id: zod_1.z.string() })
            .optional(),
        $and: zod_1.z.lazy(() => exports.StoreGetProductsParams.array()).optional(),
        $or: zod_1.z.lazy(() => exports.StoreGetProductsParams.array()).optional(),
    })
        .optional(),
    $and: zod_1.z.lazy(() => exports.StoreGetProductsParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.StoreGetProductsParams.array()).optional(),
})
    .merge(common_validators_1.GetProductsParams)
    .strict())
    .transform(common_validators_1.transformProductParams);
//# sourceMappingURL=validators.js.map