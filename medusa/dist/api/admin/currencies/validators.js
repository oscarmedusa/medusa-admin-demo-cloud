"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetCurrenciesParams = exports.AdminGetCurrencyParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.AdminGetCurrencyParams = (0, validators_1.createSelectParams)();
exports.AdminGetCurrenciesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 200,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetCurrenciesParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetCurrenciesParams.array()).optional(),
}));
//# sourceMappingURL=validators.js.map