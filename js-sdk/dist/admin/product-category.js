"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategory = void 0;
class ProductCategory {
    constructor(client) {
        this.client = client;
    }
    async create(body, query, headers) {
        return this.client.fetch(`/admin/product-categories`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return this.client.fetch(`/admin/product-categories/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async list(query, headers) {
        return this.client.fetch(`/admin/product-categories`, {
            headers,
            query: query,
        });
    }
    async retrieve(id, query, headers) {
        return this.client.fetch(`/admin/product-categories/${id}`, {
            query,
            headers,
        });
    }
    async delete(id, headers) {
        return this.client.fetch(`/admin/product-categories/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async updateProducts(id, body, query, headers) {
        return this.client.fetch(`/admin/product-categories/${id}/products`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
}
exports.ProductCategory = ProductCategory;
//# sourceMappingURL=product-category.js.map