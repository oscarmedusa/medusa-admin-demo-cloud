"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCollection = void 0;
class ProductCollection {
    constructor(client) {
        this.client = client;
    }
    async create(body, query, headers) {
        return this.client.fetch(`/admin/collections`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return this.client.fetch(`/admin/collections/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async list(queryParams, headers) {
        return this.client.fetch(`/admin/collections`, {
            headers,
            query: queryParams,
        });
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/collections/${id}`, {
            query,
            headers,
        });
    }
    async delete(id, headers) {
        return this.client.fetch(`/admin/collections/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async updateProducts(id, body, headers) {
        return this.client.fetch(`/admin/collections/${id}/products`, {
            method: "POST",
            headers,
            body,
        });
    }
}
exports.ProductCollection = ProductCollection;
//# sourceMappingURL=product-collection.js.map