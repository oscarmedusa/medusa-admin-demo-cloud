"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBuilders = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.eventBuilders = {
    createdPriceSet: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.CREATED,
        object: "price_set",
        eventsEnum: utils_1.PricingEvents,
    }),
    createdPrice: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.CREATED,
        object: "price",
        eventsEnum: utils_1.PricingEvents,
    }),
    createdPriceRule: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.CREATED,
        object: "price_rule",
        eventsEnum: utils_1.PricingEvents,
    }),
    createdPriceList: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.CREATED,
        object: "price_list",
        eventsEnum: utils_1.PricingEvents,
    }),
    createdPriceListRule: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.CREATED,
        object: "price_list_rule",
        eventsEnum: utils_1.PricingEvents,
    }),
    attachedPriceListRule: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.ATTACHED,
        object: "price_list_rule",
        eventsEnum: utils_1.PricingEvents,
    }),
    updatedPrice: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.UPDATED,
        object: "price",
        eventsEnum: utils_1.PricingEvents,
    }),
    updatedPriceRule: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.UPDATED,
        object: "price_rule",
        eventsEnum: utils_1.PricingEvents,
    }),
    deletedPrice: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.DELETED,
        object: "price",
        eventsEnum: utils_1.PricingEvents,
    }),
    deletedPriceRule: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRICING,
        action: utils_1.CommonEvents.DELETED,
        object: "price_rule",
        eventsEnum: utils_1.PricingEvents,
    }),
};
//# sourceMappingURL=events.js.map