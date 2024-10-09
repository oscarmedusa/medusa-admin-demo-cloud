"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTag = void 0;
class ProductTag {
    constructor(client) {
        this.client = client;
    }
    async create(body, query, headers) {
        return this.client.fetch(`/admin/product-tags`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return this.client.fetch(`/admin/product-tags/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async list(query, headers) {
        return this.client.fetch(`/admin/product-tags`, {
            headers,
            query: query,
        });
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/product-tags/${id}`, {
            query,
            headers,
        });
    }
    async delete(id, headers) {
        return this.client.fetch(`/admin/product-tags/${id}`, {
            method: "DELETE",
            headers,
        });
    }
}
exports.ProductTag = ProductTag;
//# sourceMappingURL=product-tag.js.map