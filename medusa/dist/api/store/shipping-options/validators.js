"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetShippingOptions = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.StoreGetShippingOptions = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    cart_id: zod_1.z.string(),
    is_return: zod_1.z.boolean().optional(),
    $and: zod_1.z.lazy(() => exports.StoreGetShippingOptions.array()).optional(),
    $or: zod_1.z.lazy(() => exports.StoreGetShippingOptions.array()).optional(),
}));
//# sourceMappingURL=validators.js.map