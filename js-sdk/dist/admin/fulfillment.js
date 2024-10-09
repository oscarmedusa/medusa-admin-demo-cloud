"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment = void 0;
class Fulfillment {
    constructor(client) {
        this.client = client;
    }
    async create(body, query, headers) {
        return await this.client.fetch(`/admin/fulfillments`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async cancel(id, query, headers) {
        return await this.client.fetch(`/admin/fulfillments/${id}`, {
            method: "POST",
            body: {},
            headers,
        });
    }
    async createShipment(id, body, query, headers) {
        return await this.client.fetch(`/admin/fulfillments/${id}/shipment`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
}
exports.Fulfillment = Fulfillment;
//# sourceMappingURL=fulfillment.js.map