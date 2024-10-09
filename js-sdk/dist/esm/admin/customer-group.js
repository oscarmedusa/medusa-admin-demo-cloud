var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CustomerGroup {
    constructor(client) {
        this.client = client;
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/customer-groups/${id}`, {
                method: "GET",
                query,
                headers,
            });
        });
    }
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/customer-groups`, {
                method: "GET",
                headers,
                query,
            });
        });
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/customer-groups`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/customer-groups/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/customer-groups/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    batchCustomers(id, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/customer-groups/${id}/customers`, {
                method: "POST",
                headers,
                body,
            });
        });
    }
}
//# sourceMappingURL=customer-group.js.map