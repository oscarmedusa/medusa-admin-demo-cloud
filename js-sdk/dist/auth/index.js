"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    constructor(client, config) {
        this.register = async (actor, method, payload) => {
            const { token } = await this.client.fetch(`/auth/${actor}/${method}/register`, {
                method: "POST",
                body: payload,
            });
            this.client.setToken(token);
            return token;
        };
        this.login = async (actor, method, payload) => {
            // There will either be token or location returned from the backend.
            const { token, location } = await this.client.fetch(`/auth/${actor}/${method}`, {
                method: "POST",
                body: payload,
            });
            // In the case of an oauth login, we return the redirect location to the caller.
            // They can decide if they do an immediate redirect or put it in an <a> tag.
            if (location) {
                return { location };
            }
            await this.setToken_(token);
            return token;
        };
        // The callback expects all query parameters from the Oauth callback to be passed to the backend, and the provider is in charge of parsing and validating them
        this.callback = async (actor, method, query) => {
            const { token } = await this.client.fetch(`/auth/${actor}/${method}/callback`, {
                method: "GET",
                query,
            });
            await this.setToken_(token);
            return token;
        };
        this.refresh = async () => {
            const { token } = await this.client.fetch("/auth/token/refresh", {
                method: "POST",
            });
            // Putting the token in session after refreshing is only useful when the new token has updated info (eg. actor_id).
            // Ideally we don't use the full JWT in session as key, but just store a pseudorandom key that keeps the rest of the auth context as value.
            await this.setToken_(token);
            return token;
        };
        this.logout = async () => {
            if (this.config?.auth?.type === "session") {
                await this.client.fetch("/auth/session", {
                    method: "DELETE",
                });
            }
            this.client.clearToken();
        };
        this.setToken_ = async (token) => {
            // By default we just set the token in the configured storage, if configured to use sessions we convert it into session storage instead.
            if (this.config?.auth?.type === "session") {
                await this.client.fetch("/auth/session", {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}` },
                });
            }
            else {
                this.client.setToken(token);
            }
        };
        this.client = client;
        this.config = config;
    }
}
exports.Auth = Auth;
//# sourceMappingURL=index.js.map