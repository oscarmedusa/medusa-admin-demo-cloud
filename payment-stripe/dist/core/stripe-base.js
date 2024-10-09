"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const stripe_1 = __importDefault(require("stripe"));
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../types");
const get_smallest_unit_1 = require("../utils/get-smallest-unit");
class StripeBase extends utils_1.AbstractPaymentProvider {
    static validateOptions(options) {
        if (!(0, utils_1.isDefined)(options.apiKey)) {
            throw new Error("Required option `apiKey` is missing in Stripe plugin");
        }
    }
    constructor(container, options) {
        // @ts-ignore
        super(...arguments);
        this.container_ = container;
        this.options_ = options;
        this.stripe_ = new stripe_1.default(options.apiKey);
    }
    get options() {
        return this.options_;
    }
    getPaymentIntentOptions() {
        const options = {};
        if (this?.paymentIntentOptions?.capture_method) {
            options.capture_method = this.paymentIntentOptions.capture_method;
        }
        if (this?.paymentIntentOptions?.setup_future_usage) {
            options.setup_future_usage = this.paymentIntentOptions.setup_future_usage;
        }
        if (this?.paymentIntentOptions?.payment_method_types) {
            options.payment_method_types =
                this.paymentIntentOptions.payment_method_types;
        }
        return options;
    }
    async getPaymentStatus(paymentSessionData) {
        const id = paymentSessionData.id;
        const paymentIntent = await this.stripe_.paymentIntents.retrieve(id);
        switch (paymentIntent.status) {
            case "requires_payment_method":
            case "requires_confirmation":
            case "processing":
                return utils_1.PaymentSessionStatus.PENDING;
            case "requires_action":
                return utils_1.PaymentSessionStatus.REQUIRES_MORE;
            case "canceled":
                return utils_1.PaymentSessionStatus.CANCELED;
            case "requires_capture":
                return utils_1.PaymentSessionStatus.AUTHORIZED;
            case "succeeded":
                return utils_1.PaymentSessionStatus.CAPTURED;
            default:
                return utils_1.PaymentSessionStatus.PENDING;
        }
    }
    async initiatePayment(input) {
        const intentRequestData = this.getPaymentIntentOptions();
        const { email, extra, session_id, customer } = input.context;
        const { currency_code, amount } = input;
        const description = (extra?.payment_description ??
            this.options_?.paymentDescription);
        const intentRequest = {
            description,
            amount: (0, get_smallest_unit_1.getSmallestUnit)(amount, currency_code),
            currency: currency_code,
            metadata: { session_id: session_id },
            capture_method: this.options_.capture ? "automatic" : "manual",
            ...intentRequestData,
        };
        if (this.options_?.automaticPaymentMethods) {
            intentRequest.automatic_payment_methods = { enabled: true };
        }
        if (customer?.metadata?.stripe_id) {
            intentRequest.customer = customer.metadata.stripe_id;
        }
        else {
            let stripeCustomer;
            try {
                stripeCustomer = await this.stripe_.customers.create({
                    email,
                });
            }
            catch (e) {
                return this.buildError("An error occurred in initiatePayment when creating a Stripe customer", e);
            }
            intentRequest.customer = stripeCustomer.id;
        }
        let sessionData;
        try {
            sessionData = (await this.stripe_.paymentIntents.create(intentRequest));
        }
        catch (e) {
            return this.buildError("An error occurred in InitiatePayment during the creation of the stripe payment intent", e);
        }
        return {
            data: sessionData,
            // TODO: REVISIT
            // update_requests: customer?.metadata?.stripe_id
            //   ? undefined
            //   : {
            //       customer_metadata: {
            //         stripe_id: intentRequest.customer,
            //       },
            //     },
        };
    }
    async authorizePayment(paymentSessionData, context) {
        const status = await this.getPaymentStatus(paymentSessionData);
        return { data: paymentSessionData, status };
    }
    async cancelPayment(paymentSessionData) {
        try {
            const id = paymentSessionData.id;
            return (await this.stripe_.paymentIntents.cancel(id));
        }
        catch (error) {
            if (error.payment_intent?.status === types_1.ErrorIntentStatus.CANCELED) {
                return error.payment_intent;
            }
            return this.buildError("An error occurred in cancelPayment", error);
        }
    }
    async capturePayment(paymentSessionData) {
        const id = paymentSessionData.id;
        try {
            const intent = await this.stripe_.paymentIntents.capture(id);
            return intent;
        }
        catch (error) {
            if (error.code === types_1.ErrorCodes.PAYMENT_INTENT_UNEXPECTED_STATE) {
                if (error.payment_intent?.status === types_1.ErrorIntentStatus.SUCCEEDED) {
                    return error.payment_intent;
                }
            }
            return this.buildError("An error occurred in capturePayment", error);
        }
    }
    async deletePayment(paymentSessionData) {
        return await this.cancelPayment(paymentSessionData);
    }
    async refundPayment(paymentSessionData, refundAmount) {
        const id = paymentSessionData.id;
        try {
            const { currency } = paymentSessionData;
            await this.stripe_.refunds.create({
                amount: (0, get_smallest_unit_1.getSmallestUnit)(refundAmount, currency),
                payment_intent: id,
            });
        }
        catch (e) {
            return this.buildError("An error occurred in refundPayment", e);
        }
        return paymentSessionData;
    }
    async retrievePayment(paymentSessionData) {
        try {
            const id = paymentSessionData.id;
            const intent = await this.stripe_.paymentIntents.retrieve(id);
            intent.amount = (0, get_smallest_unit_1.getAmountFromSmallestUnit)(intent.amount, intent.currency);
            return intent;
        }
        catch (e) {
            return this.buildError("An error occurred in retrievePayment", e);
        }
    }
    async updatePayment(input) {
        const { context, data, currency_code, amount } = input;
        const amountNumeric = (0, get_smallest_unit_1.getSmallestUnit)(amount, currency_code);
        const stripeId = context.customer?.metadata?.stripe_id;
        if (stripeId !== data.customer) {
            const result = await this.initiatePayment(input);
            if ((0, utils_1.isPaymentProviderError)(result)) {
                return this.buildError("An error occurred in updatePayment during the initiate of the new payment for the new customer", result);
            }
            return result;
        }
        else {
            if ((0, utils_1.isPresent)(amount) && data.amount === amountNumeric) {
                return { data };
            }
            try {
                const id = data.id;
                const sessionData = (await this.stripe_.paymentIntents.update(id, {
                    amount: amountNumeric,
                }));
                return { data: sessionData };
            }
            catch (e) {
                return this.buildError("An error occurred in updatePayment", e);
            }
        }
    }
    async updatePaymentData(sessionId, data) {
        try {
            // Prevent from updating the amount from here as it should go through
            // the updatePayment method to perform the correct logic
            if ((0, utils_1.isPresent)(data.amount)) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Cannot update amount, use updatePayment instead");
            }
            return (await this.stripe_.paymentIntents.update(sessionId, {
                ...data,
            }));
        }
        catch (e) {
            return this.buildError("An error occurred in updatePaymentData", e);
        }
    }
    async getWebhookActionAndData(webhookData) {
        const event = this.constructWebhookEvent(webhookData);
        const intent = event.data.object;
        const { currency } = intent;
        switch (event.type) {
            case "payment_intent.amount_capturable_updated":
                return {
                    action: utils_1.PaymentActions.AUTHORIZED,
                    data: {
                        session_id: intent.metadata.session_id,
                        amount: (0, get_smallest_unit_1.getAmountFromSmallestUnit)(intent.amount_capturable, currency), // NOTE: revisit when implementing multicapture
                    },
                };
            case "payment_intent.succeeded":
                return {
                    action: utils_1.PaymentActions.SUCCESSFUL,
                    data: {
                        session_id: intent.metadata.session_id,
                        amount: (0, get_smallest_unit_1.getAmountFromSmallestUnit)(intent.amount_received, currency),
                    },
                };
            case "payment_intent.payment_failed":
                return {
                    action: utils_1.PaymentActions.FAILED,
                    data: {
                        session_id: intent.metadata.session_id,
                        amount: (0, get_smallest_unit_1.getAmountFromSmallestUnit)(intent.amount, currency),
                    },
                };
            default:
                return { action: utils_1.PaymentActions.NOT_SUPPORTED };
        }
    }
    /**
     * Constructs Stripe Webhook event
     * @param {object} data - the data of the webhook request: req.body
     *    ensures integrity of the webhook event
     * @return {object} Stripe Webhook event
     */
    constructWebhookEvent(data) {
        const signature = data.headers["stripe-signature"];
        return this.stripe_.webhooks.constructEvent(data.rawData, signature, this.options_.webhookSecret);
    }
    buildError(message, error) {
        return {
            error: message,
            code: "code" in error ? error.code : "unknown",
            detail: (0, utils_1.isPaymentProviderError)(error)
                ? `${error.error}${os_1.EOL}${error.detail ?? ""}`
                : "detail" in error
                    ? error.detail
                    : error.message ?? "",
        };
    }
}
exports.default = StripeBase;
//# sourceMappingURL=stripe-base.js.map