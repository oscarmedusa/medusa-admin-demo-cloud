"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campaign = void 0;
class Campaign {
    constructor(client) {
        this.client = client;
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/campaigns/${id}`, {
            headers,
            query,
        });
    }
    async list(query, headers) {
        return await this.client.fetch(`/admin/campaigns`, {
            headers,
            query,
        });
    }
    async create(payload, headers) {
        return await this.client.fetch(`/admin/campaigns`, {
            method: "POST",
            headers,
            body: payload,
        });
    }
    async update(id, payload, headers) {
        return await this.client.fetch(`/admin/campaigns/${id}`, {
            method: "POST",
            headers,
            body: payload,
        });
    }
    async delete(id, headers) {
        return await this.client.fetch(`/admin/campaigns/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async batchPromotions(id, payload, headers) {
        return await this.client.fetch(`/admin/campaigns/${id}/promotions`, {
            method: "POST",
            headers,
            body: payload,
        });
    }
}
exports.Campaign = Campaign;
//# sourceMappingURL=campaign.js.map