"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
class Currency {
    constructor(client) {
        this.client = client;
    }
    async list(query, headers) {
        return this.client.fetch(`/admin/currencies`, {
            headers,
            query,
        });
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/currencies/${id}`, {
            headers,
            query,
        });
    }
}
exports.Currency = Currency;
//# sourceMappingURL=currency.js.map