"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateShippingProfile = exports.AdminCreateShippingProfile = exports.AdminGetShippingProfilesParams = exports.AdminGetShippingProfileParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.AdminGetShippingProfileParams = (0, validators_1.createSelectParams)();
exports.AdminGetShippingProfilesParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    q: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetShippingProfilesParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetShippingProfilesParams.array()).optional(),
}));
exports.AdminCreateShippingProfile = zod_1.z
    .object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
})
    .strict();
exports.AdminUpdateShippingProfile = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
})
    .strict();
//# sourceMappingURL=validators.js.map