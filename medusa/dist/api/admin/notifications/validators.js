"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetNotificationsParams = exports.AdminGetNotificationParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.AdminGetNotificationParams = (0, validators_1.createSelectParams)();
exports.AdminGetNotificationsParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
    order: "-created_at",
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    channel: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetNotificationsParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetNotificationsParams.array()).optional(),
}));
//# sourceMappingURL=validators.js.map