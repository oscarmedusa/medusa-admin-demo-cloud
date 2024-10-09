"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthService = void 0;
const utils_1 = require("@medusajs/framework/utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// TODO: Add state param that is stored in Redis, to prevent CSRF attacks
class GoogleAuthService extends utils_1.AbstractAuthModuleProvider {
    static validateOptions(options) {
        if (!options.clientId) {
            throw new Error("Google clientId is required");
        }
        if (!options.clientSecret) {
            throw new Error("Google clientSecret is required");
        }
        if (!options.callbackUrl) {
            throw new Error("Google callbackUrl is required");
        }
    }
    constructor({ logger }, options) {
        super({}, { provider: "google", displayName: "Google Authentication" });
        this.config_ = options;
        this.logger_ = logger;
    }
    async register(_) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Google does not support registration. Use method `authenticate` instead.");
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
        const params = `client_id=${this.config_.clientId}&client_secret=${this.config_.clientSecret}&code=${code}&redirect_uri=${encodeURIComponent(this.config_.callbackUrl)}&grant_type=authorization_code`;
        const exchangeTokenUrl = new URL(`https://oauth2.googleapis.com/token?${params}`);
        try {
            const response = await fetch(exchangeTokenUrl.toString(), {
                method: "POST",
            }).then((r) => {
                if (!r.ok) {
                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Could not exchange token, ${r.status}, ${r.statusText}`);
                }
                return r.json();
            });
            const { authIdentity, success } = await this.verify_(response.id_token, authIdentityService);
            return {
                success,
                authIdentity,
            };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async verify_(idToken, authIdentityService) {
        if (!idToken) {
            return { success: false, error: "No ID found" };
        }
        const jwtData = jsonwebtoken_1.default.decode(idToken, {
            complete: true,
        });
        const payload = jwtData.payload;
        if (!payload.email_verified) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Email not verified, cannot proceed with authentication");
        }
        // TODO: We should probably use something else than email here, like the `sub` field (which is more constant than the email)
        const entity_id = payload.email;
        const userMetadata = {
            name: payload.name,
            picture: payload.picture,
            given_name: payload.given_name,
            family_name: payload.family_name,
        };
        let authIdentity;
        try {
            authIdentity = await authIdentityService.retrieve({
                entity_id,
            });
        }
        catch (error) {
            if (error.type === utils_1.MedusaError.Types.NOT_FOUND) {
                const createdAuthIdentity = await authIdentityService.create({
                    entity_id,
                    user_metadata: userMetadata,
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
        const scopeParam = "scope=email+profile+openid";
        const authUrl = new URL(`https://accounts.google.com/o/oauth2/v2/auth?${[
            redirectUrlParam,
            clientIdParam,
            responseTypeParam,
            scopeParam,
        ].join("&")}`);
        return { success: true, location: authUrl.toString() };
    }
}
exports.GoogleAuthService = GoogleAuthService;
//# sourceMappingURL=google.js.map