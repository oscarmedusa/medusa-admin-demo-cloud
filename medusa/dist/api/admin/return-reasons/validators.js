"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateReturnReason = exports.AdminCreateReturnReason = exports.AdminGetReturnReasonsParams = exports.AdminGetReturnReasonsReturnReasonParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.AdminGetReturnReasonsReturnReasonParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    label: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    parent_return_reason_id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])
        .optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
}));
/**
 * Parameters used to filter and configure the pagination of the retrieved order.
 */
exports.AdminGetReturnReasonsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 20,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    label: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    parent_return_reason_id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])
        .optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetReturnReasonsParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetReturnReasonsParams.array()).optional(),
}));
exports.AdminCreateReturnReason = zod_1.z.object({
    value: zod_1.z.string(),
    label: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    parent_return_reason_id: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
});
exports.AdminUpdateReturnReason = zod_1.z.object({
    value: zod_1.z.string(),
    label: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
});
//# sourceMappingURL=validators.js.map