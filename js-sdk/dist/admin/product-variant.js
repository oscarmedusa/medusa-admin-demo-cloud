"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariant = void 0;
class ProductVariant {
    constructor(client) {
        this.client = client;
    }
    async list(queryParams, headers) {
        return await this.client.fetch(`/admin/product-variants`, {
            headers,
            query: queryParams,
        });
    }
}
exports.ProductVariant = ProductVariant;
//# sourceMappingURL=product-variant.js.map