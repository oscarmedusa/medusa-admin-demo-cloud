"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricePreference = void 0;
class PricePreference {
    constructor(client) {
        this.client = client;
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/price-preferences/${id}`, {
            method: "GET",
            headers,
            query,
        });
    }
    async list(query, headers) {
        return this.client.fetch(`/admin/price-preferences`, {
            method: "GET",
            headers,
            query,
        });
    }
    async create(body, query, headers) {
        return this.client.fetch(`/admin/price-preferences`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return this.client.fetch(`/admin/price-preferences/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async delete(id, headers) {
        return this.client.fetch(`/admin/price-preferences/${id}`, {
            method: "DELETE",
            headers,
        });
    }
}
exports.PricePreference = PricePreference;
//# sourceMappingURL=price-preference.js.map