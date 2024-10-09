"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBuilders = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.eventBuilders = {
    createdNotification: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.NOTIFICATION,
        action: utils_1.CommonEvents.CREATED,
        object: "notification",
        eventsEnum: utils_1.NotificationEvents,
    }),
};
//# sourceMappingURL=events.js.map