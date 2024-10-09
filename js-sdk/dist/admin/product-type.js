"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = void 0;
class ProductType {
    constructor(client) {
        this.client = client;
    }
    async create(body, query, headers) {
        return this.client.fetch(`/admin/product-types`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return this.client.fetch(`/admin/product-types/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async list(query, headers) {
        return this.client.fetch(`/admin/product-types`, {
            headers,
            query: query,
        });
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/product-types/${id}`, {
            query,
            headers,
        });
    }
    async delete(id, headers) {
        return this.client.fetch(`/admin/product-types/${id}`, {
            method: "DELETE",
            headers,
        });
    }
}
exports.ProductType = ProductType;
//# sourceMappingURL=product-type.js.map