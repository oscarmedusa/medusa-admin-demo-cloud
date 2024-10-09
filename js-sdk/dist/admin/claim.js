"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Claim = void 0;
class Claim {
    constructor(client) {
        this.client = client;
    }
    async list(query, headers) {
        return await this.client.fetch(`/admin/claims`, {
            query,
            headers,
        });
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}`, {
            query,
            headers,
        });
    }
    async create(body, query, headers) {
        return await this.client.fetch(`/admin/claims`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async cancel(id, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/cancel`, {
            method: "POST",
            headers,
            query,
        });
    }
    async delete(id, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}`, {
            method: "DELETE",
            headers,
            query,
        });
    }
    async addItems(id, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/claim-items`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateItem(id, actionId, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/claim-items/${actionId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async removeItem(id, actionId, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/claim-items/${actionId}`, {
            method: "DELETE",
            headers,
            query,
        });
    }
    async addInboundItems(id, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/inbound/items`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateInboundItem(id, actionId, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/inbound/items/${actionId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async removeInboundItem(id, actionId, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/inbound/items/${actionId}`, {
            method: "DELETE",
            headers,
            query,
        });
    }
    async addInboundShipping(id, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/inbound/shipping-method`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateInboundShipping(id, actionId, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/inbound/shipping-method/${actionId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async deleteInboundShipping(id, actionId, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/inbound/shipping-method/${actionId}`, {
            method: "DELETE",
            headers,
            query,
        });
    }
    async addOutboundItems(id, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/outbound/items`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateOutboundItem(id, actionId, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/outbound/items/${actionId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async removeOutboundItem(id, actionId, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/outbound/items/${actionId}`, {
            method: "DELETE",
            headers,
            query,
        });
    }
    async addOutboundShipping(id, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/outbound/shipping-method`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async updateOutboundShipping(id, actionId, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/outbound/shipping-method/${actionId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async deleteOutboundShipping(id, actionId, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/outbound/shipping-method/${actionId}`, {
            method: "DELETE",
            headers,
            query,
        });
    }
    async request(id, body, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/request`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async cancelRequest(id, query, headers) {
        return await this.client.fetch(`/admin/claims/${id}/request`, {
            method: "DELETE",
            headers,
            query,
        });
    }
}
exports.Claim = Claim;
//# sourceMappingURL=claim.js.map