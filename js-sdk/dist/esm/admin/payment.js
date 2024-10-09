var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Payment {
    constructor(client) {
        this.client = client;
    }
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/payments`, {
                query,
                headers,
            });
        });
    }
    listPaymentProviders(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/payments/payment-providers`, {
                query,
                headers,
            });
        });
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/payments/${id}`, {
                query,
                headers,
            });
        });
    }
    capture(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/payments/${id}/capture`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    refund(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/payments/${id}/refund`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
}
//# sourceMappingURL=payment.js.map