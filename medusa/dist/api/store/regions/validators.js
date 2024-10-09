"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetRegionsParams = exports.StoreGetRegionParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.StoreGetRegionParams = (0, validators_1.createSelectParams)();
exports.StoreGetRegionsParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    currency_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(() => exports.StoreGetRegionsParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.StoreGetRegionsParams.array()).optional(),
}));
//# sourceMappingURL=validators.js.map