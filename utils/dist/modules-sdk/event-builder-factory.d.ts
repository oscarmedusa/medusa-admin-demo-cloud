import { Context } from "@medusajs/types";
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
export declare function moduleEventBuilderFactory({ action, object, eventsEnum, eventName, source, }: {
    action: string;
    object: string;
    /**
     * @deprecated use eventName instead
     */
    eventsEnum?: Record<string, string>;
    eventName?: string;
    source: string;
}): ({ data, sharedContext, }: {
    data: {
        id: string;
    } | {
        id: string;
    }[];
    sharedContext: Context;
}) => void;
//# sourceMappingURL=event-builder-factory.d.ts.map