"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCollection = void 0;
class PaymentCollection {
    constructor(client) {
        this.client = client;
    }
    async list(query, headers) {
        return await this.client.fetch(`/admin/payment-collections`, {
            query,
            headers,
        });
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/payment-collections/${id}`, {
            query,
            headers,
        });
    }
    async create(body, query, headers) {
        return await this.client.fetch(`/admin/payment-collections`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async delete(id, headers) {
        return await this.client.fetch(`/admin/payment-collections/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async markAsPaid(id, body, query, headers) {
        return await this.client.fetch(`/admin/payment-collections/${id}/mark-as-paid`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
}
exports.PaymentCollection = PaymentCollection;
//# sourceMappingURL=payment-collection.js.map