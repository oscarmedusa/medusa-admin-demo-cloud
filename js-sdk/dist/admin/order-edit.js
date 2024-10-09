"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEdit = void 0;
class OrderEdit {
    constructor(client) {
        this.client = client;
    }
    async initiateRequest(body, query, headers) {
        return await this.client.fetch(`/admin/order-edits`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async request(id, query, headers) {
        return await this.client.fetch(`/admin/order-edits/${id}/request`, {
            method: "POST",
            headers,
            query,
        });
    }
    async confirm(id, query, headers) {
        return await this.client.fetch(`/admin/order-edits/${id}/confirm`, {
            method: "POST",
            headers,
            query,
        });
    }
    async cancelRequest(id, query, headers) {
        return await this.client.fetch(`/admin/order-edits/${id}`, {
            method: "DELETE",
            headers,
            query,
        });
    }
    async addItems(id, body, query, headers) {
        return await this.client.fetch(`/admin/order-edits/${id}/items`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateOriginalItem(id, itemId, body, query, headers) {
        return await this.client.fetch(`/admin/order-edits/${id}/items/item/${itemId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateAddedItem(id, actionId, body, query, headers) {
        return await this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async removeAddedItem(id, actionId, query, headers) {
        return await this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
            method: "DELETE",
            headers,
            query,
        });
    }
}
exports.OrderEdit = OrderEdit;
//# sourceMappingURL=order-edit.js.map