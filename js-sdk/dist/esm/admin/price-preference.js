var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class PricePreference {
    constructor(client) {
        this.client = client;
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-preferences/${id}`, {
                method: "GET",
                headers,
                query,
            });
        });
    }
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-preferences`, {
                method: "GET",
                headers,
                query,
            });
        });
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-preferences`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-preferences/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.fetch(`/admin/price-preferences/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
}
//# sourceMappingURL=price-preference.js.map