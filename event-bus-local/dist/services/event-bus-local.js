"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const events_1 = require("events");
const ulid_1 = require("ulid");
const eventEmitter = new events_1.EventEmitter();
eventEmitter.setMaxListeners(Infinity);
// eslint-disable-next-line max-len
class LocalEventBusService extends utils_1.AbstractEventBusModuleService {
    constructor({ logger }) {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        super(...arguments);
        this.logger_ = logger;
        this.eventEmitter_ = eventEmitter;
        this.groupedEventsMap_ = new Map();
    }
    /**
     * Accept an event name and some options
     *
     * @param eventsData
     * @param options The options can include `internal` which will prevent the event from being logged
     */
    async emit(eventsData, options = {}) {
        const normalizedEventsData = Array.isArray(eventsData)
            ? eventsData
            : [eventsData];
        for (const eventData of normalizedEventsData) {
            const eventListenersCount = this.eventEmitter_.listenerCount(eventData.name);
            if (!options.internal && !eventData.options?.internal) {
                this.logger_?.info(`Processing ${eventData.name} which has ${eventListenersCount} subscribers`);
            }
            if (eventListenersCount === 0) {
                continue;
            }
            await this.groupOrEmitEvent(eventData);
        }
    }
    // If the data of the event consists of a eventGroupId, we don't emit the event, instead
    // we add them to a queue grouped by the eventGroupId and release them when
    // explicitly requested.
    // This is useful in the event of a distributed transaction where you'd want to emit
    // events only once the transaction ends.
    async groupOrEmitEvent(eventData) {
        const { options, ...eventBody } = eventData;
        const eventGroupId = eventBody.metadata?.eventGroupId;
        if (eventGroupId) {
            await this.groupEvent(eventGroupId, eventData);
        }
        else {
            const { options, ...eventBody } = eventData;
            this.eventEmitter_.emit(eventData.name, eventBody);
        }
    }
    // Groups an event to a queue to be emitted upon explicit release
    async groupEvent(eventGroupId, eventData) {
        const groupedEvents = this.groupedEventsMap_.get(eventGroupId) || [];
        groupedEvents.push(eventData);
        this.groupedEventsMap_.set(eventGroupId, groupedEvents);
    }
    async releaseGroupedEvents(eventGroupId) {
        const groupedEvents = this.groupedEventsMap_.get(eventGroupId) || [];
        for (const event of groupedEvents) {
            const { options, ...eventBody } = event;
            this.eventEmitter_.emit(event.name, eventBody);
        }
        await this.clearGroupedEvents(eventGroupId);
    }
    async clearGroupedEvents(eventGroupId) {
        this.groupedEventsMap_.delete(eventGroupId);
    }
    subscribe(event, subscriber) {
        const randId = (0, ulid_1.ulid)();
        this.storeSubscribers({ event, subscriberId: randId, subscriber });
        this.eventEmitter_.on(event, async (data) => {
            try {
                await subscriber(data);
            }
            catch (e) {
                this.logger_?.error(`An error occurred while processing ${event.toString()}: ${e}`);
            }
        });
        return this;
    }
    unsubscribe(event, subscriber, context) {
        const existingSubscribers = this.eventToSubscribersMap_.get(event);
        if (existingSubscribers?.length) {
            const subIndex = existingSubscribers?.findIndex((sub) => sub.id === context?.subscriberId);
            if (subIndex !== -1) {
                this.eventToSubscribersMap_.get(event)?.splice(subIndex, 1);
            }
        }
        this.eventEmitter_.off(event, subscriber);
        return this;
    }
}
exports.default = LocalEventBusService;
//# sourceMappingURL=event-bus-local.js.map