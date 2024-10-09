"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProductCategoriesParams = exports.StoreProductCategoryParams = void 0;
const zod_1 = require("zod");
const common_validators_1 = require("../../utils/common-validators");
const validators_1 = require("../../utils/validators");
exports.StoreProductCategoryParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    include_ancestors_tree: (0, common_validators_1.booleanString)().optional(),
    include_descendants_tree: (0, common_validators_1.booleanString)().optional(),
}));
exports.StoreProductCategoriesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    handle: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    parent_category_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    include_ancestors_tree: (0, common_validators_1.booleanString)().optional(),
    include_descendants_tree: (0, common_validators_1.booleanString)().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(() => exports.StoreProductCategoriesParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.StoreProductCategoriesParams.array()).optional(),
}));
//# sourceMappingURL=validators.js.map