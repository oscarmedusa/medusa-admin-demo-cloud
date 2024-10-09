"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetProductVariantsParams = void 0;
const zod_1 = require("zod");
const common_validators_1 = require("../../utils/common-validators");
const validators_1 = require("../../utils/validators");
exports.AdminGetProductVariantsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    manage_inventory: (0, common_validators_1.booleanString)().optional(),
    allow_backorder: (0, common_validators_1.booleanString)().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetProductVariantsParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetProductVariantsParams.array()).optional(),
}));
//# sourceMappingURL=validators.js.map