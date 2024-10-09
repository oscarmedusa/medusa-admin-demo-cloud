"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKey = void 0;
class ApiKey {
    constructor(client) {
        this.client = client;
    }
    async list(queryParams, headers) {
        return await this.client.fetch(`/admin/api-keys`, {
            query: queryParams,
            headers,
        });
    }
    async create(body, query, headers) {
        return await this.client.fetch(`/admin/api-keys`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async revoke(id, headers) {
        return await this.client.fetch(`/admin/api-keys/${id}/revoke`, {
            method: "POST",
            headers,
        });
    }
    async retrieve(id, headers) {
        return await this.client.fetch(`/admin/api-keys/${id}`, {
            headers,
        });
    }
    async update(id, body, query, headers) {
        return await this.client.fetch(`/admin/api-keys/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async delete(id, headers) {
        return await this.client.fetch(`/admin/api-keys/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async batchSalesChannels(id, body, headers) {
        return await this.client.fetch(`/admin/api-keys/${id}/sales-channels`, {
            method: "POST",
            headers,
            body,
        });
    }
}
exports.ApiKey = ApiKey;
//# sourceMappingURL=api-key.js.map