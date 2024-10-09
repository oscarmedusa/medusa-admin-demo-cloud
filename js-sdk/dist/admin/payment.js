"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(client) {
        this.client = client;
    }
    async list(query, headers) {
        return await this.client.fetch(`/admin/payments`, {
            query,
            headers,
        });
    }
    async listPaymentProviders(query, headers) {
        return await this.client.fetch(`/admin/payments/payment-providers`, {
            query,
            headers,
        });
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/payments/${id}`, {
            query,
            headers,
        });
    }
    async capture(id, body, query, headers) {
        return await this.client.fetch(`/admin/payments/${id}/capture`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async refund(id, body, query, headers) {
        return await this.client.fetch(`/admin/payments/${id}/refund`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
}
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map