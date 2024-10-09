"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(client) {
        this.client = client;
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/orders/${id}`, {
            query,
            headers,
        });
    }
    async retrievePreview(id, query, headers) {
        return await this.client.fetch(`/admin/orders/${id}/preview`, {
            query,
            headers,
        });
    }
    async list(queryParams, headers) {
        return await this.client.fetch(`/admin/orders`, {
            query: queryParams,
            headers,
        });
    }
    async cancel(id, headers) {
        return await this.client.fetch(`/admin/orders/${id}/cancel`, {
            method: "POST",
            headers,
        });
    }
    async createFulfillment(id, body, query, headers) {
        return await this.client.fetch(`/admin/orders/${id}/fulfillments`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async cancelFulfillment(id, fulfillmentId, body, headers) {
        return await this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/cancel`, {
            method: "POST",
            headers,
            body,
        });
    }
    async createShipment(id, fulfillmentId, body, query, headers) {
        return await this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/shipments`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async markAsDelivered(id, fulfillmentId, body, query, headers) {
        return await this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/mark-as-delivered`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async listChanges(id, queryParams, headers) {
        return await this.client.fetch(`/admin/orders/${id}/changes`, {
            query: queryParams,
            headers,
        });
    }
}
exports.Order = Order;
//# sourceMappingURL=order.js.map