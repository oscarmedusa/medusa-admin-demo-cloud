var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Exchange {
    constructor(client) {
        this.client = client;
    }
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges`, {
                query,
                headers,
            });
        });
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}`, {
                query,
                headers,
            });
        });
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    cancel(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/cancel`, {
                method: "POST",
                headers,
                query,
            });
        });
    }
    delete(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    addItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/exchange-items`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/exchange-items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    removeItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/exchange-items/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    addInboundItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateInboundItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    removeInboundItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    addInboundShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateInboundShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    deleteInboundShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    addOutboundItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateOutboundItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    removeOutboundItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    addOutboundShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    updateOutboundShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    deleteOutboundShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
    request(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    cancelRequest(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
                method: "DELETE",
                headers,
                query,
            });
        });
    }
}
//# sourceMappingURL=exchange.js.map