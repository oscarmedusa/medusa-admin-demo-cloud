var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class PriceList {
    constructor(client) {
        this.client = client;
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-lists/${id}`, {
                method: "GET",
                headers,
                query,
            });
        });
    }
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-lists`, {
                method: "GET",
                headers,
                query,
            });
        });
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-lists`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-lists/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-lists/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    batchPrices(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-lists/${id}/prices/batch`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    linkProducts(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-lists/${id}/products`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
}
//# sourceMappingURL=price-list.js.map