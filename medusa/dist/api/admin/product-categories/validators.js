"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateProductCategory = exports.AdminCreateProductCategory = exports.AdminProductCategoriesParams = exports.AdminProductCategoryParams = void 0;
const zod_1 = require("zod");
const common_validators_1 = require("../../utils/common-validators");
const validators_1 = require("../../utils/validators");
exports.AdminProductCategoryParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    include_ancestors_tree: (0, common_validators_1.booleanString)().optional(),
    include_descendants_tree: (0, common_validators_1.booleanString)().optional(),
}));
exports.AdminProductCategoriesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    handle: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    parent_category_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    include_ancestors_tree: (0, common_validators_1.booleanString)().optional(),
    include_descendants_tree: (0, common_validators_1.booleanString)().optional(),
    is_internal: (0, common_validators_1.booleanString)().optional(),
    is_active: (0, common_validators_1.booleanString)().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(() => exports.AdminProductCategoriesParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminProductCategoriesParams.array()).optional(),
}));
exports.AdminCreateProductCategory = zod_1.z
    .object({
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    is_internal: zod_1.z.boolean().optional(),
    is_active: zod_1.z.boolean().optional(),
    parent_category_id: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
    rank: zod_1.z.number().nonnegative().optional(),
})
    .strict();
exports.AdminUpdateProductCategory = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    is_internal: zod_1.z.boolean().optional(),
    is_active: zod_1.z.boolean().optional(),
    parent_category_id: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
    rank: zod_1.z.number().nonnegative().optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map