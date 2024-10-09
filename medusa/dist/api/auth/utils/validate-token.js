"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const utils_1 = require("@medusajs/framework/utils");
const jsonwebtoken_1 = require("jsonwebtoken");
// Middleware to validate that a token is valid
const validateToken = () => {
    return async (req, res, next) => {
        const { actor_type, auth_provider } = req.params;
        const { token } = req.query;
        const req_ = req;
        if (!token) {
            return next();
        }
        // @ts-ignore
        const { http } = req_.scope.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE).projectConfig;
        const authModule = req.scope.resolve(utils_1.Modules.AUTH);
        const decoded = (0, jsonwebtoken_1.decode)(token);
        const [providerIdentity] = await authModule.listProviderIdentities({
            entity_id: decoded.entity_id,
            provider: auth_provider,
        }, {
            select: ["provider_metadata", "auth_identity_id", "entity_id"],
        });
        if (!providerIdentity) {
            return res.status(401).json({ message: "Invalid token" });
        }
        let verified = null;
        try {
            verified = (0, jsonwebtoken_1.verify)(token, http.jwtSecret);
        }
        catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req_.auth_context = {
            actor_type,
            auth_identity_id: verified.auth_identity_id,
            actor_id: providerIdentity.entity_id,
            app_metadata: {},
        };
        return next();
    };
};
exports.validateToken = validateToken;
//# sourceMappingURL=validate-token.js.map