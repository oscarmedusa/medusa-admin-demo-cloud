"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleEventBuilderFactory = moduleEventBuilderFactory;
const event_bus_1 = require("../event-bus");
// TODO should that move closer to the event bus? and maybe be rename to modulemoduleEventBuilderFactory
/**
 *
 * Factory function to create event builders for different entities
 *
 * @example
 * const createdFulfillment = moduleEventBuilderFactory({
 *   source: Modules.FULFILLMENT,
 *   action: CommonEvents.CREATED,
 *   object: "fulfillment",
 *   eventsEnum: FulfillmentEvents,
 * })
 *
 * createdFulfillment({
 *   data,
 *   sharedContext,
 * })
 *
 * @param action
 * @param object
 * @param eventsEnum
 * @param service
 */
function moduleEventBuilderFactory({ action, object, eventsEnum, eventName, source, }) {
    return function ({ data, sharedContext, }) {
        data = Array.isArray(data) ? data : [data];
        if (!data.length) {
            return;
        }
        const aggregator = sharedContext.messageAggregator;
        const messages = [];
        // The event enums contains event formatted like so [object]_[action] e.g. PRODUCT_CREATED
        // We expect the keys of events to be fully uppercased
        let eventName_ = eventsEnum
            ? eventsEnum[`${object.toUpperCase()}_${action.toUpperCase()}`]
            : eventName;
        if (!eventName_) {
            eventName_ = (0, event_bus_1.buildModuleResourceEventName)({
                prefix: source,
                objectName: object,
                action,
            });
        }
        data.forEach((dataItem) => {
            messages.push({
                source,
                action,
                context: sharedContext,
                data: { id: dataItem.id },
                eventName: eventName_,
                object,
            });
        });
        aggregator.saveRawMessageData(messages);
    };
}
//# sourceMappingURL=event-builder-factory.js.map