"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryItem = void 0;
class InventoryItem {
    constructor(client) {
        this.client = client;
    }
    async create(body, query, headers) {
        return await this.client.fetch(`/admin/inventory-items`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async update(id, body, query, headers) {
        return await this.client.fetch(`/admin/inventory-items/${id}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async list(query, headers) {
        return await this.client.fetch(`/admin/inventory-items`, {
            query,
            headers,
        });
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/inventory-items/${id}`, {
            query,
            headers,
        });
    }
    async delete(id, headers) {
        return await this.client.fetch(`/admin/inventory-items/${id}`, {
            method: "DELETE",
            headers,
        });
    }
    async listLevels(id, query, headers) {
        return await this.client.fetch(`/admin/inventory-items/${id}/location-levels`, {
            query,
            headers,
        });
    }
    async updateLevel(id, locationId, body, query, headers) {
        return await this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async deleteLevel(id, locationId, headers) {
        return await this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
            method: "DELETE",
            headers,
        });
    }
    async batchUpdateLevels(id, body, query, headers) {
        return await this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
}
exports.InventoryItem = InventoryItem;
//# sourceMappingURL=inventory-item.js.map