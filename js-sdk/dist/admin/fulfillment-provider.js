"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentProvider = void 0;
class FulfillmentProvider {
    constructor(client) {
        this.client = client;
    }
    async list(query, headers) {
        return await this.client.fetch(`/admin/fulfillment-providers`, {
            method: "GET",
            headers,
            query,
        });
    }
}
exports.FulfillmentProvider = FulfillmentProvider;
//# sourceMappingURL=fulfillment-provider.js.map