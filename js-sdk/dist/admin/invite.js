"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invite = void 0;
class Invite {
    constructor(client) {
        this.client = client;
    }
    async accept(input, query, headers) {
        const { invite_token, ...rest } = input;
        return await this.client.fetch(`/admin/invites/accept?token=${input.invite_token}`, {
            method: "POST",
            headers,
            body: rest,
            query,
        });
    }
    async create(body, query, headers) {
        return await this.client.fetch(`/admin/invites`, {
            method: "POST",
            headers,
            body,
            query,
        });
    }
    async retrieve(id, query, headers) {
        return await this.client.fetch(`/admin/invites/${id}`, {
            headers,
            query,
        });
    }
    async list(queryParams, headers) {
        return await this.client.fetch(`/admin/invites`, {
            headers,
            query: queryParams,
        });
    }
    async resend(id, headers) {
        return await this.client.fetch(`/admin/invites/${id}/resend`, {
            method: "POST",
            headers,
        });
    }
    async delete(id, headers) {
        return await this.client.fetch(`/admin/invites/${id}`, {
            method: "DELETE",
            headers,
        });
    }
}
exports.Invite = Invite;
//# sourceMappingURL=invite.js.map