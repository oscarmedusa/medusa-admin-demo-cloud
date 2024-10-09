"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("../models");
// TODO rework DTO's
class FulfillmentProviderService extends utils_1.ModulesSdkUtils.MedusaInternalService(_models_1.FulfillmentProvider) {
    constructor(container) {
        super(container);
        this.fulfillmentProviderRepository_ =
            container.fulfillmentProviderRepository;
    }
    static getRegistrationIdentifier(providerClass, optionName) {
        if (!providerClass.identifier) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_ARGUMENT, `Trying to register a fulfillment provider without an identifier.`);
        }
        return `${providerClass.identifier}_${optionName}`;
    }
    retrieveProviderRegistration(providerId) {
        try {
            return this.__container__[`fp_${providerId}`];
        }
        catch (err) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Could not find a fulfillment provider with id: ${providerId}`);
        }
    }
    async listFulfillmentOptions(providerIds) {
        return await (0, utils_1.promiseAll)(providerIds.map(async (p) => {
            const provider = this.retrieveProviderRegistration(p);
            return {
                provider_id: p,
                options: (await provider.getFulfillmentOptions()),
            };
        }));
    }
    async getFulfillmentOptions(providerId) {
        const provider = this.retrieveProviderRegistration(providerId);
        return await provider.getFulfillmentOptions();
    }
    async validateFulfillmentData(providerId, optionData, data, context) {
        const provider = this.retrieveProviderRegistration(providerId);
        return await provider.validateFulfillmentData(optionData, data, context);
    }
    async validateOption(providerId, data) {
        const provider = this.retrieveProviderRegistration(providerId);
        return await provider.validateOption(data);
    }
    async createFulfillment(providerId, data, items, order, fulfillment) {
        const provider = this.retrieveProviderRegistration(providerId);
        return await provider.createFulfillment(data, items, order, fulfillment);
    }
    async cancelFulfillment(providerId, fulfillment) {
        const provider = this.retrieveProviderRegistration(providerId);
        return await provider.cancelFulfillment(fulfillment);
    }
    async createReturn(providerId, fulfillment) {
        const provider = this.retrieveProviderRegistration(providerId);
        return await provider.createReturnFulfillment(fulfillment);
    }
}
exports.default = FulfillmentProviderService;
//# sourceMappingURL=fulfillment-provider.js.map