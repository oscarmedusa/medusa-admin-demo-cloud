import { CaptureDTO, Context, CreateCaptureDTO, CreatePaymentCollectionDTO, CreatePaymentSessionDTO, CreateRefundDTO, DAL, FilterablePaymentCollectionProps, FilterablePaymentProviderProps, FilterablePaymentSessionProps, FindConfig, InternalModuleDeclaration, IPaymentModuleService, ModuleJoinerConfig, ModulesSdkTypes, PaymentCollectionDTO, PaymentCollectionUpdatableFields, PaymentDTO, PaymentProviderDTO, PaymentSessionDTO, ProviderWebhookPayload, RefundDTO, RefundReasonDTO, UpdatePaymentCollectionDTO, UpdatePaymentDTO, UpdatePaymentSessionDTO, UpsertPaymentCollectionDTO } from "@medusajs/framework/types";
import { ModulesSdkUtils, PaymentSessionStatus } from "@medusajs/framework/utils";
import { Capture, Payment, PaymentCollection, PaymentSession, Refund } from "../models";
import PaymentProviderService from "./payment-provider";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    paymentService: ModulesSdkTypes.IMedusaInternalService<any>;
    captureService: ModulesSdkTypes.IMedusaInternalService<any>;
    refundService: ModulesSdkTypes.IMedusaInternalService<any>;
    paymentSessionService: ModulesSdkTypes.IMedusaInternalService<any>;
    paymentCollectionService: ModulesSdkTypes.IMedusaInternalService<any>;
    paymentProviderService: PaymentProviderService;
};
declare const PaymentModuleService_base: ModulesSdkUtils.MedusaServiceReturnType<{
    PaymentCollection: {
        dto: PaymentCollectionDTO;
    };
    PaymentSession: {
        dto: PaymentSessionDTO;
    };
    Payment: {
        dto: PaymentDTO;
    };
    Capture: {
        dto: CaptureDTO;
    };
    Refund: {
        dto: RefundDTO;
    };
    RefundReason: {
        dto: RefundReasonDTO;
    };
}>;
export default class PaymentModuleService extends PaymentModuleService_base implements IPaymentModuleService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected paymentService_: ModulesSdkTypes.IMedusaInternalService<Payment>;
    protected captureService_: ModulesSdkTypes.IMedusaInternalService<Capture>;
    protected refundService_: ModulesSdkTypes.IMedusaInternalService<Refund>;
    protected paymentSessionService_: ModulesSdkTypes.IMedusaInternalService<PaymentSession>;
    protected paymentCollectionService_: ModulesSdkTypes.IMedusaInternalService<PaymentCollection>;
    protected paymentProviderService_: PaymentProviderService;
    constructor({ baseRepository, paymentService, captureService, refundService, paymentSessionService, paymentProviderService, paymentCollectionService, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __joinerConfig(): ModuleJoinerConfig;
    createPaymentCollections(data: CreatePaymentCollectionDTO, sharedContext?: Context): Promise<PaymentCollectionDTO>;
    createPaymentCollections(data: CreatePaymentCollectionDTO[], sharedContext?: Context): Promise<PaymentCollectionDTO[]>;
    createPaymentCollections_(data: CreatePaymentCollectionDTO[], sharedContext?: Context): Promise<PaymentCollection[]>;
    updatePaymentCollections(paymentCollectionId: string, data: PaymentCollectionUpdatableFields, sharedContext?: Context): Promise<PaymentCollectionDTO>;
    updatePaymentCollections(selector: FilterablePaymentCollectionProps, data: PaymentCollectionUpdatableFields, sharedContext?: Context): Promise<PaymentCollectionDTO[]>;
    updatePaymentCollections_(data: UpdatePaymentCollectionDTO[], sharedContext?: Context): Promise<PaymentCollection[]>;
    upsertPaymentCollections(data: UpsertPaymentCollectionDTO[], sharedContext?: Context): Promise<PaymentCollectionDTO[]>;
    upsertPaymentCollections(data: UpsertPaymentCollectionDTO, sharedContext?: Context): Promise<PaymentCollectionDTO>;
    completePaymentCollections(paymentCollectionId: string, sharedContext?: Context): Promise<PaymentCollectionDTO>;
    completePaymentCollections(paymentCollectionId: string[], sharedContext?: Context): Promise<PaymentCollectionDTO[]>;
    createPaymentSession(paymentCollectionId: string, input: CreatePaymentSessionDTO, sharedContext?: Context): Promise<PaymentSessionDTO>;
    createPaymentSession_(paymentCollectionId: string, data: CreatePaymentSessionDTO, sharedContext?: Context): Promise<PaymentSession>;
    updatePaymentSession(data: UpdatePaymentSessionDTO, sharedContext?: Context): Promise<PaymentSessionDTO>;
    deletePaymentSession(id: string, sharedContext?: Context): Promise<void>;
    authorizePaymentSession(id: string, context: Record<string, unknown>, sharedContext?: Context): Promise<PaymentDTO>;
    authorizePaymentSession_(session: PaymentSession, data: Record<string, unknown>, status: PaymentSessionStatus, sharedContext?: Context): Promise<Payment>;
    retrievePaymentSession(id: string, config?: FindConfig<PaymentSessionDTO>, sharedContext?: Context): Promise<PaymentSessionDTO>;
    listPaymentSessions(filters?: FilterablePaymentSessionProps, config?: FindConfig<PaymentSessionDTO>, sharedContext?: Context): Promise<PaymentSessionDTO[]>;
    updatePayment(data: UpdatePaymentDTO, sharedContext?: Context): Promise<PaymentDTO>;
    capturePayment(data: CreateCaptureDTO, sharedContext?: Context): Promise<PaymentDTO>;
    private capturePayment_;
    private capturePaymentFromProvider_;
    refundPayment(data: CreateRefundDTO, sharedContext?: Context): Promise<PaymentDTO>;
    private refundPayment_;
    private refundPaymentFromProvider_;
    cancelPayment(paymentId: string, sharedContext?: Context): Promise<PaymentDTO>;
    processEvent(eventData: ProviderWebhookPayload, sharedContext?: Context): Promise<void>;
    listPaymentProviders(filters?: FilterablePaymentProviderProps, config?: FindConfig<PaymentProviderDTO>, sharedContext?: Context): Promise<PaymentProviderDTO[]>;
    listAndCountPaymentProviders(filters?: FilterablePaymentProviderProps, config?: FindConfig<PaymentProviderDTO>, sharedContext?: Context): Promise<[PaymentProviderDTO[], number]>;
    private maybeUpdatePaymentCollection_;
}
export {};
//# sourceMappingURL=payment-module.d.ts.map