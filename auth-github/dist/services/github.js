"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubAuthService = void 0;
const utils_1 = require("@medusajs/framework/utils");
// TODO: Add state param that is stored in Redis, to prevent CSRF attacks
class GithubAuthService extends utils_1.AbstractAuthModuleProvider {
    static validateOptions(options) {
        if (!options.clientId) {
            throw new Error("Github clientId is required");
        }
        if (!options.clientSecret) {
            throw new Error("Github clientSecret is required");
        }
        if (!options.callbackUrl) {
            throw new Error("Github callbackUrl is required");
        }
    }
    constructor({ logger }, options) {
        super({}, { provider: "github", displayName: "Github Authentication" });
        this.config_ = options;
        this.logger_ = logger;
    }
    async register(_) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Github does not support registration. Use method `authenticate` instead.");
    }
    async authenticate(req) {
        if (req.query?.error) {
            return {
                success: false,
                error: `${req.query.error_description}, read more at: ${req.query.error_uri}`,
            };
        }
        return this.getRedirect(this.config_);
    }
    async validateCallback(req, authIdentityService) {
        if (req.query && req.query.error) {
            return {
                success: false,
                error: `${req.query.error_description}, read more at: ${req.query.error_uri}`,
            };
        }
        const code = req.query?.code ?? req.body?.code;
        if (!code) {
            return { success: false, error: "No code provided" };
        }
        const params = `client_id=${this.config_.clientId}&client_secret=${this.config_.clientSecret}&code=${code}&redirect_uri=${encodeURIComponent(this.config_.callbackUrl)}`;
        const exchangeTokenUrl = new URL(`https://github.com/login/oauth/access_token?${params}`);
        try {
            const response = await fetch(exchangeTokenUrl.toString(), {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
            }).then((r) => {
                if (!r.ok) {
                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Could not exchange token, ${r.status}, ${r.statusText}`);
                }
                return r.json();
            });
            const providerMetadata = {
                access_token: response.access_token,
                refresh_token: response.refresh_token,
                // The response is in seconds
                access_token_expires_at: new Date(Date.now() + response.expires_in * 1000).toISOString(),
                refresh_token_expires_at: new Date(Date.now() + response.refresh_token_expires_in * 1000).toISOString(),
            };
            const { authIdentity, success } = await this.upsert_(providerMetadata, authIdentityService);
            return {
                success,
                authIdentity,
            };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async upsert_(providerMetadata, authIdentityService) {
        if (!providerMetadata?.access_token) {
            return { success: false, error: "No access token found" };
        }
        const user = await fetch("https://api.github.com/user", {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${providerMetadata.access_token}`,
            },
        }).then((r) => r.json());
        const entity_id = user.id.toString();
        const userMetadata = {
            profile_url: user.url,
            avatar: user.avatar_url,
            email: user.email,
            name: user.name,
            company: user.company,
            two_factor_authentication: user.two_factor_authentication ?? false,
        };
        let authIdentity;
        try {
            // Update throws if auth identity not found
            authIdentity = await authIdentityService.update(entity_id, {
                provider_metadata: providerMetadata,
                user_metadata: userMetadata,
            });
        }
        catch (error) {
            if (error.type === utils_1.MedusaError.Types.NOT_FOUND) {
                const createdAuthIdentity = await authIdentityService.create({
                    entity_id,
                    user_metadata: userMetadata,
                    provider_metadata: providerMetadata,
                });
                authIdentity = createdAuthIdentity;
            }
            else {
                return { success: false, error: error.message };
            }
        }
        return {
            success: true,
            authIdentity,
        };
    }
    getRedirect({ clientId, callbackUrl }) {
        const redirectUrlParam = `redirect_uri=${encodeURIComponent(callbackUrl)}`;
        const clientIdParam = `client_id=${clientId}`;
        const responseTypeParam = "response_type=code";
        const authUrl = new URL(`https://github.com/login/oauth/authorize?${[
            redirectUrlParam,
            clientIdParam,
            responseTypeParam,
        ].join("&")}`);
        return { success: true, location: authUrl.toString() };
    }
}
exports.GithubAuthService = GithubAuthService;
//# sourceMappingURL=github.js.map