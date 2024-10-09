"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGroup = void 0;
class CustomerGroup {
    constructor(client) {
        this.client = client;
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/customer-groups/${id}`, {
            method: "GET",
            query,
            headers,
        });
    }
    async list(query, headers) {
        return await this.client.fetch(`/admin/customer-groups`, {
            method: "GET",
            headers,
            query,
        });
    }
    async create(body, query, headers) {
        return await this.client.fetch(`/admin/customer-groups`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return await this.client.fetch(`/admin/customer-groups/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async delete(id, headers) {
        return await this.client.fetch(`/admin/customer-groups/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async batchCustomers(id, body, headers) {
        return await this.client.fetch(`/admin/customer-groups/${id}/customers`, {
            method: "POST",
            headers,
            body,
        });
    }
}
exports.CustomerGroup = CustomerGroup;
//# sourceMappingURL=customer-group.js.map