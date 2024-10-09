import Stripe from "stripe";
import { CreatePaymentProviderSession, MedusaContainer, PaymentProviderError, PaymentProviderSessionResponse, ProviderWebhookPayload, UpdatePaymentProviderSession, WebhookActionResult } from "@medusajs/framework/types";
import { AbstractPaymentProvider, PaymentSessionStatus } from "@medusajs/framework/utils";
import { PaymentIntentOptions, StripeOptions } from "../types";
declare abstract class StripeBase extends AbstractPaymentProvider<StripeOptions> {
    protected readonly options_: StripeOptions;
    protected stripe_: Stripe;
    protected container_: MedusaContainer;
    static validateOptions(options: StripeOptions): void;
    protected constructor(container: MedusaContainer, options: StripeOptions);
    abstract get paymentIntentOptions(): PaymentIntentOptions;
    get options(): StripeOptions;
    getPaymentIntentOptions(): PaymentIntentOptions;
    getPaymentStatus(paymentSessionData: Record<string, unknown>): Promise<PaymentSessionStatus>;
    initiatePayment(input: CreatePaymentProviderSession): Promise<PaymentProviderError | PaymentProviderSessionResponse>;
    authorizePayment(paymentSessionData: Record<string, unknown>, context: Record<string, unknown>): Promise<PaymentProviderError | {
        status: PaymentSessionStatus;
        data: PaymentProviderSessionResponse["data"];
    }>;
    cancelPayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    capturePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    deletePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    refundPayment(paymentSessionData: Record<string, unknown>, refundAmount: number): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    retrievePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    updatePayment(input: UpdatePaymentProviderSession): Promise<PaymentProviderError | PaymentProviderSessionResponse>;
    updatePaymentData(sessionId: string, data: Record<string, unknown>): Promise<PaymentProviderError | Record<string, unknown>>;
    getWebhookActionAndData(webhookData: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult>;
    /**
     * Constructs Stripe Webhook event
     * @param {object} data - the data of the webhook request: req.body
     *    ensures integrity of the webhook event
     * @return {object} Stripe Webhook event
     */
    constructWebhookEvent(data: ProviderWebhookPayload["payload"]): Stripe.Event;
    protected buildError(message: string, error: Stripe.StripeRawError | PaymentProviderError | Error): PaymentProviderError;
}
export default StripeBase;
//# sourceMappingURL=stripe-base.d.ts.map