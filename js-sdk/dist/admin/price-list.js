"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceList = void 0;
class PriceList {
    constructor(client) {
        this.client = client;
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/price-lists/${id}`, {
            method: "GET",
            headers,
            query,
        });
    }
    async list(query, headers) {
        return this.client.fetch(`/admin/price-lists`, {
            method: "GET",
            headers,
            query,
        });
    }
    async create(body, query, headers) {
        return this.client.fetch(`/admin/price-lists`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return this.client.fetch(`/admin/price-lists/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async delete(id, headers) {
        return this.client.fetch(`/admin/price-lists/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async batchPrices(id, body, query, headers) {
        return this.client.fetch(`/admin/price-lists/${id}/prices/batch`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async linkProducts(id, body, query, headers) {
        return this.client.fetch(`/admin/price-lists/${id}/products`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
}
exports.PriceList = PriceList;
//# sourceMappingURL=price-list.js.map