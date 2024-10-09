var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Product {
    constructor(client) {
        this.client = client;
    }
    import(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const form = new FormData();
            form.append("file", body.file);
            return yield this.client.fetch(`/admin/products/import`, {
                method: "POST",
                headers: Object.assign(Object.assign({}, headers), { 
                    // Let the browser determine the content type.
                    "content-type": null }),
                body: form,
                query,
            });
        });
    }
    confirmImport(transactionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/import/${transactionId}/confirm`, {
                method: "POST",
                headers,
                body: {},
                query,
            });
        });
    }
    export(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/export`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    batch(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/batch`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products`, {
                headers,
                query: queryParams,
            });
        });
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${id}`, {
                query,
                headers,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    batchVariants(productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/variants/batch`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    createVariant(productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/variants`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateVariant(productId, id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    listVariants(productId, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/variants`, {
                headers,
                query: queryParams,
            });
        });
    }
    retrieveVariant(productId, id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
                query,
                headers,
            });
        });
    }
    deleteVariant(productId, id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    batchVariantInventoryItems(productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/variants/inventory-items/batch`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    createOption(productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/options`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateOption(productId, id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    listOptions(productId, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/options`, {
                headers,
                query: queryParams,
            });
        });
    }
    retrieveOption(productId, id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
                query,
                headers,
            });
        });
    }
    deleteOption(productId, id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
}
//# sourceMappingURL=product.js.map