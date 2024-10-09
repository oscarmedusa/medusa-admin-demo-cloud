"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(client) {
        this.client = client;
    }
    async create(body, query, headers) {
        return this.client.fetch(`/admin/customers`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return this.client.fetch(`/admin/customers/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async list(queryParams, headers) {
        return this.client.fetch(`/admin/customers`, {
            headers,
            query: queryParams,
        });
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/customers/${id}`, {
            query,
            headers,
        });
    }
    async delete(id, headers) {
        return this.client.fetch(`/admin/customers/${id}`, {
            method: "DELETE",
            headers,
        });
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map