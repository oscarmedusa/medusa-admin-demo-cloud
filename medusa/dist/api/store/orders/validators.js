"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetOrdersParams = exports.StoreGetOrderParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.StoreGetOrderParams = (0, validators_1.createSelectParams)();
exports.StoreGetOrdersParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    status: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(() => exports.StoreGetOrdersParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.StoreGetOrdersParams.array()).optional(),
}));
//# sourceMappingURL=validators.js.map