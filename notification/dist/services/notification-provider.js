"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("../models");
const _types_1 = require("../types");
class NotificationProviderService extends utils_1.ModulesSdkUtils.MedusaInternalService(_models_1.NotificationProvider) {
    constructor(container) {
        super(container);
        this.notificationProviderRepository_ =
            container.notificationProviderRepository;
    }
    retrieveProviderRegistration(providerId) {
        try {
            return this.__container__[`${_types_1.NotificationProviderRegistrationPrefix}${providerId}`];
        }
        catch (err) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Could not find a notification provider with id: ${providerId}`);
        }
    }
    async getProviderForChannels(channels) {
        if (!this.providersCache) {
            const providers = await this.notificationProviderRepository_.find();
            this.providersCache = new Map(providers.flatMap((provider) => provider.channels.map((c) => [c, provider])));
        }
        const normalizedChannels = Array.isArray(channels) ? channels : [channels];
        const results = normalizedChannels
            .map((channel) => this.providersCache.get(channel))
            .filter(Boolean);
        return (Array.isArray(channels) ? results : results[0]);
    }
    async send(provider, notification) {
        const providerHandler = this.retrieveProviderRegistration(provider.id);
        return await providerHandler.send(notification);
    }
}
exports.default = NotificationProviderService;
//# sourceMappingURL=notification-provider.js.map