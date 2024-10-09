"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(client) {
        this.client = client;
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/notifications/${id}`, {
            method: "GET",
            headers,
            query,
        });
    }
    async list(query, headers) {
        return await this.client.fetch(`/admin/notifications`, {
            method: "GET",
            headers,
            query,
        });
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map