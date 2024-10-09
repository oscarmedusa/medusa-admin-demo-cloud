var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ApiKey {
    constructor(client) {
        this.client = client;
    }
    list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/api-keys`, {
                query: queryParams,
                headers,
            });
        });
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/api-keys`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    revoke(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/api-keys/${id}/revoke`, {
                method: "POST",
                headers,
            });
        });
    }
    retrieve(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/api-keys/${id}`, {
                headers,
            });
        });
    }
    update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/api-keys/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/api-keys/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    batchSalesChannels(id, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/api-keys/${id}/sales-channels`, {
                method: "POST",
                headers,
                body,
            });
        });
    }
}
//# sourceMappingURL=api-key.js.map