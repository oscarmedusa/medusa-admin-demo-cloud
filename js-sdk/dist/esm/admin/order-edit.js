var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class OrderEdit {
    constructor(client) {
        this.client = client;
    }
    initiateRequest(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/order-edits`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    request(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/order-edits/${id}/request`, {
                method: "POST",
                headers,
                query,
            });
        });
    }
    confirm(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/order-edits/${id}/confirm`, {
                method: "POST",
                headers,
                query,
            });
        });
    }
    cancelRequest(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/order-edits/${id}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    addItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/order-edits/${id}/items`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateOriginalItem(id, itemId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/order-edits/${id}/items/item/${itemId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateAddedItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    removeAddedItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
}
//# sourceMappingURL=order-edit.js.map