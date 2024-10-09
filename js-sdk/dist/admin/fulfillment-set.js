"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentSet = void 0;
class FulfillmentSet {
    constructor(client) {
        this.client = client;
    }
    async delete(id, headers) {
        return await this.client.fetch(`/admin/fulfillment-sets/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async createServiceZone(id, body, query, headers) {
        return await this.client.fetch(`/admin/fulfillment-sets/${id}/service-zones`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async retrieveServiceZone(fulfillmentSetId, serviceZoneId, query, headers) {
        return await this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
            method: "GET",
            headers,
            query,
        });
    }
    async updateServiceZone(fulfillmentSetId, serviceZoneId, body, query, headers) {
        return await this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async deleteServiceZone(fulfillmentSetId, serviceZoneId, headers) {
        return await this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
            method: "DELETE",
            headers,
        });
    }
}
exports.FulfillmentSet = FulfillmentSet;
//# sourceMappingURL=fulfillment-set.js.map