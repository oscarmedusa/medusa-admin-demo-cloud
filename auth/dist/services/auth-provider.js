"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const _types_1 = require("../types");
class AuthProviderService {
    constructor(container) {
        this.dependencies = container;
    }
    retrieveProviderRegistration(providerId) {
        try {
            return this.dependencies[`${_types_1.AuthProviderRegistrationPrefix}${providerId}`];
        }
        catch (err) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Could not find a auth provider with id: ${providerId}`);
        }
    }
    async authenticate(provider, auth, authIdentityProviderService) {
        const providerHandler = this.retrieveProviderRegistration(provider);
        return await providerHandler.authenticate(auth, authIdentityProviderService);
    }
    async register(provider, auth, authIdentityProviderService) {
        const providerHandler = this.retrieveProviderRegistration(provider);
        return await providerHandler.register(auth, authIdentityProviderService);
    }
    async update(provider, data, authIdentityProviderService) {
        const providerHandler = this.retrieveProviderRegistration(provider);
        return await providerHandler.update(data, authIdentityProviderService);
    }
    async validateCallback(provider, auth, authIdentityProviderService) {
        const providerHandler = this.retrieveProviderRegistration(provider);
        return await providerHandler.validateCallback(auth, authIdentityProviderService);
    }
}
exports.default = AuthProviderService;
//# sourceMappingURL=auth-provider.js.map