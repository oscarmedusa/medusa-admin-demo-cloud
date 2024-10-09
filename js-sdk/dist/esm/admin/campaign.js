var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Campaign {
    constructor(client) {
        this.client = client;
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/campaigns/${id}`, {
                headers,
                query,
            });
        });
    }
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/campaigns`, {
                headers,
                query,
            });
        });
    }
    create(payload, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/campaigns`, {
                method: "POST",
                headers,
                body: payload,
            });
        });
    }
    update(id, payload, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/campaigns/${id}`, {
                method: "POST",
                headers,
                body: payload,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/campaigns/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    batchPromotions(id, payload, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/campaigns/${id}/promotions`, {
                method: "POST",
                headers,
                body: payload,
            });
        });
    }
}
//# sourceMappingURL=campaign.js.map