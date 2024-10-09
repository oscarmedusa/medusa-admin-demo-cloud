var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Order {
    constructor(client) {
        this.client = client;
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders/${id}`, {
                query,
                headers,
            });
        });
    }
    retrievePreview(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders/${id}/preview`, {
                query,
                headers,
            });
        });
    }
    list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders`, {
                query: queryParams,
                headers,
            });
        });
    }
    cancel(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders/${id}/cancel`, {
                method: "POST",
                headers,
            });
        });
    }
    createFulfillment(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders/${id}/fulfillments`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    cancelFulfillment(id, fulfillmentId, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/cancel`, {
                method: "POST",
                headers,
                body,
            });
        });
    }
    createShipment(id, fulfillmentId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/shipments`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    markAsDelivered(id, fulfillmentId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/mark-as-delivered`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    listChanges(id, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/orders/${id}/changes`, {
                query: queryParams,
                headers,
            });
        });
    }
}
//# sourceMappingURL=order.js.map