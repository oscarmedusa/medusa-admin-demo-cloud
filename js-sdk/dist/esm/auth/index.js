var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Auth {
    constructor(client, config) {
        this.register = (actor, method, payload) => __awaiter(this, void 0, void 0, function* () {
            const { token } = yield this.client.fetch(`/auth/${actor}/${method}/register`, {
                method: "POST",
                body: payload,
            });
            this.client.setToken(token);
            return token;
        });
        this.login = (actor, method, payload) => __awaiter(this, void 0, void 0, function* () {
            // There will either be token or location returned from the backend.
            const { token, location } = yield this.client.fetch(`/auth/${actor}/${method}`, {
                method: "POST",
                body: payload,
            });
            // In the case of an oauth login, we return the redirect location to the caller.
            // They can decide if they do an immediate redirect or put it in an <a> tag.
            if (location) {
                return { location };
            }
            yield this.setToken_(token);
            return token;
        });
        // The callback expects all query parameters from the Oauth callback to be passed to the backend, and the provider is in charge of parsing and validating them
        this.callback = (actor, method, query) => __awaiter(this, void 0, void 0, function* () {
            const { token } = yield this.client.fetch(`/auth/${actor}/${method}/callback`, {
                method: "GET",
                query,
            });
            yield this.setToken_(token);
            return token;
        });
        this.refresh = () => __awaiter(this, void 0, void 0, function* () {
            const { token } = yield this.client.fetch("/auth/token/refresh", {
                method: "POST",
            });
            // Putting the token in session after refreshing is only useful when the new token has updated info (eg. actor_id).
            // Ideally we don't use the full JWT in session as key, but just store a pseudorandom key that keeps the rest of the auth context as value.
            yield this.setToken_(token);
            return token;
        });
        this.logout = () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session") {
                yield this.client.fetch("/auth/session", {
                    method: "DELETE",
                });
            }
            this.client.clearToken();
        });
        this.setToken_ = (token) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            // By default we just set the token in the configured storage, if configured to use sessions we convert it into session storage instead.
            if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session") {
                yield this.client.fetch("/auth/session", {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}` },
                });
            }
            else {
                this.client.setToken(token);
            }
        });
        this.client = client;
        this.config = config;
    }
}
//# sourceMappingURL=index.js.map