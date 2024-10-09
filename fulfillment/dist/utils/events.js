"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBuilders = void 0;
exports.buildCreatedFulfillmentEvents = buildCreatedFulfillmentEvents;
exports.buildCreatedShippingOptionEvents = buildCreatedShippingOptionEvents;
exports.buildCreatedFulfillmentSetEvents = buildCreatedFulfillmentSetEvents;
exports.buildCreatedServiceZoneEvents = buildCreatedServiceZoneEvents;
const utils_1 = require("@medusajs/framework/utils");
exports.eventBuilders = {
    createdFulfillment: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "fulfillment",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    updatedFulfillment: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.UPDATED,
        object: "fulfillment",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdFulfillmentAddress: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "fulfillment_address",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdFulfillmentItem: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "fulfillment_item",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdFulfillmentLabel: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "fulfillment_label",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    updatedFulfillmentLabel: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.UPDATED,
        object: "fulfillment_label",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    deletedFulfillmentLabel: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.DELETED,
        object: "fulfillment_label",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdShippingProfile: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "shipping_profile",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdShippingOptionType: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "shipping_option_type",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    updatedShippingOptionType: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.UPDATED,
        object: "shipping_option_type",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    deletedShippingOptionType: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.DELETED,
        object: "shipping_option_type",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdShippingOptionRule: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "shipping_option_rule",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    updatedShippingOptionRule: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.UPDATED,
        object: "shipping_option_rule",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    deletedShippingOptionRule: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.DELETED,
        object: "shipping_option_rule",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdShippingOption: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "shipping_option",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    updatedShippingOption: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.UPDATED,
        object: "shipping_option",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdFulfillmentSet: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "fulfillment_set",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    updatedFulfillmentSet: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.UPDATED,
        object: "fulfillment_set",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    deletedFulfillmentSet: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.DELETED,
        object: "fulfillment_set",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdServiceZone: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "service_zone",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    updatedServiceZone: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.UPDATED,
        object: "service_zone",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    deletedServiceZone: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.DELETED,
        object: "service_zone",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    createdGeoZone: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.CREATED,
        object: "geo_zone",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    updatedGeoZone: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.UPDATED,
        object: "geo_zone",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
    deletedGeoZone: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.FULFILLMENT,
        action: utils_1.CommonEvents.DELETED,
        object: "geo_zone",
        eventsEnum: utils_1.FulfillmentEvents,
    }),
};
function buildCreatedFulfillmentEvents({ fulfillments, sharedContext, }) {
    if (!fulfillments.length) {
        return;
    }
    const fulfillments_ = [];
    const addresses = [];
    const items = [];
    const labels = [];
    fulfillments.forEach((fulfillment) => {
        fulfillments_.push({ id: fulfillment.id });
        if (fulfillment.delivery_address) {
            addresses.push({ id: fulfillment.delivery_address.id });
        }
        if (fulfillment.items) {
            items.push(...fulfillment.items);
        }
        if (fulfillment.labels) {
            labels.push(...fulfillment.labels);
        }
    });
    exports.eventBuilders.createdFulfillment({ data: fulfillments_, sharedContext });
    exports.eventBuilders.createdFulfillmentAddress({ data: addresses, sharedContext });
    exports.eventBuilders.createdFulfillmentItem({ data: items, sharedContext });
    exports.eventBuilders.createdFulfillmentLabel({ data: labels, sharedContext });
}
function buildCreatedShippingOptionEvents({ shippingOptions, sharedContext, }) {
    if (!shippingOptions.length) {
        return;
    }
    const options = [];
    const types = [];
    const rules = [];
    shippingOptions.forEach((shippingOption) => {
        options.push({ id: shippingOption.id });
        if (shippingOption.type) {
            types.push(shippingOption.type);
        }
        if (shippingOption.rules) {
            rules.push(...shippingOption.rules);
        }
    });
    exports.eventBuilders.createdShippingOption({ data: options, sharedContext });
    exports.eventBuilders.createdShippingOptionType({ data: types, sharedContext });
    exports.eventBuilders.createdShippingOptionRule({ data: rules, sharedContext });
}
function buildCreatedFulfillmentSetEvents({ fulfillmentSets, sharedContext, }) {
    if (!fulfillmentSets.length) {
        return;
    }
    const serviceZones = [];
    fulfillmentSets.forEach((fulfillmentSet) => {
        if (!fulfillmentSet.service_zones?.length) {
            return;
        }
        serviceZones.push(...fulfillmentSet.service_zones);
    });
    exports.eventBuilders.createdFulfillmentSet({ data: fulfillmentSets, sharedContext });
    buildCreatedServiceZoneEvents({ serviceZones, sharedContext });
}
function buildCreatedServiceZoneEvents({ serviceZones, sharedContext, }) {
    if (!serviceZones.length) {
        return;
    }
    const geoZones = [];
    serviceZones.forEach((serviceZone) => {
        if (!serviceZone.geo_zones.length) {
            return;
        }
        geoZones.push(...serviceZone.geo_zones);
    });
    exports.eventBuilders.createdServiceZone({ data: serviceZones, sharedContext });
    exports.eventBuilders.createdGeoZone({ data: geoZones, sharedContext });
}
//# sourceMappingURL=events.js.map