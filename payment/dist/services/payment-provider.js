"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("../models");
const os_1 = require("os");
class PaymentProviderService extends utils_1.ModulesSdkUtils.MedusaInternalService(_models_1.PaymentProvider) {
    retrieveProvider(providerId) {
        try {
            return this.__container__[providerId];
        }
        catch (e) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Could not find a payment provider with id: ${providerId}`);
        }
    }
    async createSession(providerId, sessionInput) {
        const provider = this.retrieveProvider(providerId);
        const paymentResponse = await provider.initiatePayment(sessionInput);
        if ((0, utils_1.isPaymentProviderError)(paymentResponse)) {
            this.throwPaymentProviderError(paymentResponse);
        }
        return paymentResponse.data;
    }
    async updateSession(providerId, sessionInput) {
        const provider = this.retrieveProvider(providerId);
        const paymentResponse = await provider.updatePayment(sessionInput);
        if ((0, utils_1.isPaymentProviderError)(paymentResponse)) {
            this.throwPaymentProviderError(paymentResponse);
        }
        return paymentResponse?.data;
    }
    async deleteSession(input) {
        const provider = this.retrieveProvider(input.provider_id);
        const error = await provider.deletePayment(input.data);
        if ((0, utils_1.isPaymentProviderError)(error)) {
            this.throwPaymentProviderError(error);
        }
    }
    async authorizePayment(input, context) {
        const provider = this.retrieveProvider(input.provider_id);
        const res = await provider.authorizePayment(input.data, context);
        if ((0, utils_1.isPaymentProviderError)(res)) {
            this.throwPaymentProviderError(res);
        }
        const { data, status } = res;
        return { data, status };
    }
    async getStatus(input) {
        const provider = this.retrieveProvider(input.provider_id);
        return await provider.getPaymentStatus(input.data);
    }
    async capturePayment(input) {
        const provider = this.retrieveProvider(input.provider_id);
        const res = await provider.capturePayment(input.data);
        if ((0, utils_1.isPaymentProviderError)(res)) {
            this.throwPaymentProviderError(res);
        }
        return res;
    }
    async cancelPayment(input) {
        const provider = this.retrieveProvider(input.provider_id);
        const error = await provider.cancelPayment(input.data);
        if ((0, utils_1.isPaymentProviderError)(error)) {
            this.throwPaymentProviderError(error);
        }
    }
    async refundPayment(input, amount) {
        const provider = this.retrieveProvider(input.provider_id);
        const res = await provider.refundPayment(input.data, amount);
        if ((0, utils_1.isPaymentProviderError)(res)) {
            this.throwPaymentProviderError(res);
        }
        return res;
    }
    async getWebhookActionAndData(providerId, data) {
        const provider = this.retrieveProvider(providerId);
        return await provider.getWebhookActionAndData(data);
    }
    throwPaymentProviderError(errObj) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `${errObj.error}${errObj.detail ? `:${os_1.EOL}${errObj.detail}` : ""}`, errObj.code);
    }
}
exports.default = PaymentProviderService;
//# sourceMappingURL=payment-provider.js.map