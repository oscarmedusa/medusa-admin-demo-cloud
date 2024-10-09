import { BigNumberInput, CreatePaymentProviderSession, DAL, IPaymentProvider, PaymentProviderDataInput, PaymentProviderSessionResponse, PaymentSessionStatus, ProviderWebhookPayload, UpdatePaymentProviderSession, WebhookActionResult } from "@medusajs/framework/types";
type InjectedDependencies = {
    paymentProviderRepository: DAL.RepositoryService;
    [key: `pp_${string}`]: IPaymentProvider;
};
declare const PaymentProviderService_base: new (container: InjectedDependencies) => import("@medusajs/framework/types").IMedusaInternalService<any, InjectedDependencies>;
export default class PaymentProviderService extends PaymentProviderService_base {
    retrieveProvider(providerId: string): IPaymentProvider;
    createSession(providerId: string, sessionInput: CreatePaymentProviderSession): Promise<PaymentProviderSessionResponse["data"]>;
    updateSession(providerId: string, sessionInput: UpdatePaymentProviderSession): Promise<Record<string, unknown> | undefined>;
    deleteSession(input: PaymentProviderDataInput): Promise<void>;
    authorizePayment(input: PaymentProviderDataInput, context: Record<string, unknown>): Promise<{
        data: Record<string, unknown>;
        status: PaymentSessionStatus;
    }>;
    getStatus(input: PaymentProviderDataInput): Promise<PaymentSessionStatus>;
    capturePayment(input: PaymentProviderDataInput): Promise<Record<string, unknown>>;
    cancelPayment(input: PaymentProviderDataInput): Promise<void>;
    refundPayment(input: PaymentProviderDataInput, amount: BigNumberInput): Promise<Record<string, unknown>>;
    getWebhookActionAndData(providerId: string, data: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult>;
    private throwPaymentProviderError;
}
export {};
//# sourceMappingURL=payment-provider.d.ts.map