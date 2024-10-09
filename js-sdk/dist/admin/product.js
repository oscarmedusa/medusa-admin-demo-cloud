"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(client) {
        this.client = client;
    }
    async import(body, query, headers) {
        const form = new FormData();
        form.append("file", body.file);
        return await this.client.fetch(`/admin/products/import`, {
            method: "POST",
            headers: {
                ...headers,
                // Let the browser determine the content type.
                "content-type": null,
            },
            body: form,
            query,
        });
    }
    async confirmImport(transactionId, query, headers) {
        return await this.client.fetch(`/admin/products/import/${transactionId}/confirm`, {
            method: "POST",
            headers,
            body: {},
            query,
        });
    }
    async export(body, query, headers) {
        return await this.client.fetch(`/admin/products/export`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async batch(body, query, headers) {
        return await this.client.fetch(`/admin/products/batch`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async create(body, query, headers) {
        return await this.client.fetch(`/admin/products`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return await this.client.fetch(`/admin/products/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async list(queryParams, headers) {
        return await this.client.fetch(`/admin/products`, {
            headers,
            query: queryParams,
        });
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/products/${id}`, {
            query,
            headers,
        });
    }
    async delete(id, headers) {
        return await this.client.fetch(`/admin/products/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async batchVariants(productId, body, query, headers) {
        return await this.client.fetch(`/admin/products/${productId}/variants/batch`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async createVariant(productId, body, query, headers) {
        return await this.client.fetch(`/admin/products/${productId}/variants`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateVariant(productId, id, body, query, headers) {
        return await this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async listVariants(productId, queryParams, headers) {
        return await this.client.fetch(`/admin/products/${productId}/variants`, {
            headers,
            query: queryParams,
        });
    }
    async retrieveVariant(productId, id, query, headers) {
        return await this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
            query,
            headers,
        });
    }
    async deleteVariant(productId, id, headers) {
        return await this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async batchVariantInventoryItems(productId, body, query, headers) {
        return await this.client.fetch(`/admin/products/${productId}/variants/inventory-items/batch`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async createOption(productId, body, query, headers) {
        return await this.client.fetch(`/admin/products/${productId}/options`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateOption(productId, id, body, query, headers) {
        return await this.client.fetch(`/admin/products/${productId}/options/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async listOptions(productId, queryParams, headers) {
        return await this.client.fetch(`/admin/products/${productId}/options`, {
            headers,
            query: queryParams,
        });
    }
    async retrieveOption(productId, id, query, headers) {
        return await this.client.fetch(`/admin/products/${productId}/options/${id}`, {
            query,
            headers,
        });
    }
    async deleteOption(productId, id, headers) {
        return await this.client.fetch(`/admin/products/${productId}/options/${id}`, {
            method: "DELETE",
            headers,
        });
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map