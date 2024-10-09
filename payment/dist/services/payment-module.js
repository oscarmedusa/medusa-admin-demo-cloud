"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("../models");
const joiner_config_1 = require("../joiner-config");
const generateMethodForModels = {
    PaymentCollection: _models_1.PaymentCollection,
    PaymentSession: _models_1.PaymentSession,
    Payment: _models_1.Payment,
    Capture: _models_1.Capture,
    Refund: _models_1.Refund,
    RefundReason: _models_1.RefundReason,
};
class PaymentModuleService extends utils_1.ModulesSdkUtils.MedusaService(generateMethodForModels) {
    constructor({ baseRepository, paymentService, captureService, refundService, paymentSessionService, paymentProviderService, paymentCollectionService, }, moduleDeclaration) {
        // @ts-ignore
        super(...arguments);
        this.moduleDeclaration = moduleDeclaration;
        this.baseRepository_ = baseRepository;
        this.refundService_ = refundService;
        this.captureService_ = captureService;
        this.paymentService_ = paymentService;
        this.paymentSessionService_ = paymentSessionService;
        this.paymentProviderService_ = paymentProviderService;
        this.paymentCollectionService_ = paymentCollectionService;
    }
    __joinerConfig() {
        return joiner_config_1.joinerConfig;
    }
    async createPaymentCollections(data, sharedContext) {
        const input = Array.isArray(data) ? data : [data];
        const collections = await this.createPaymentCollections_(input, sharedContext);
        return await this.baseRepository_.serialize(Array.isArray(data) ? collections : collections[0], {
            populate: true,
        });
    }
    async createPaymentCollections_(data, sharedContext) {
        return await this.paymentCollectionService_.create(data, sharedContext);
    }
    async updatePaymentCollections(idOrSelector, data, sharedContext) {
        let updateData = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            updateData = [
                {
                    id: idOrSelector,
                    ...data,
                },
            ];
        }
        else {
            const collections = await this.paymentCollectionService_.list(idOrSelector, {}, sharedContext);
            updateData = collections.map((c) => ({
                id: c.id,
                ...data,
            }));
        }
        const result = await this.updatePaymentCollections_(updateData, sharedContext);
        return await this.baseRepository_.serialize(Array.isArray(data) ? result : result[0], {
            populate: true,
        });
    }
    async updatePaymentCollections_(data, sharedContext) {
        return await this.paymentCollectionService_.update(data, sharedContext);
    }
    async upsertPaymentCollections(data, sharedContext) {
        const input = Array.isArray(data) ? data : [data];
        const forUpdate = input.filter((collection) => !!collection.id);
        const forCreate = input.filter((collection) => !collection.id);
        const operations = [];
        if (forCreate.length) {
            operations.push(this.createPaymentCollections_(forCreate, sharedContext));
        }
        if (forUpdate.length) {
            operations.push(this.updatePaymentCollections_(forUpdate, sharedContext));
        }
        const result = (await (0, utils_1.promiseAll)(operations)).flat();
        return await this.baseRepository_.serialize(Array.isArray(data) ? result : result[0]);
    }
    async completePaymentCollections(paymentCollectionId, sharedContext) {
        const input = Array.isArray(paymentCollectionId)
            ? paymentCollectionId.map((id) => ({
                id,
                completed_at: new Date(),
            }))
            : [{ id: paymentCollectionId, completed_at: new Date() }];
        // TODO: what checks should be done here? e.g. captured_amount === amount?
        const updated = await this.paymentCollectionService_.update(input, sharedContext);
        return await this.baseRepository_.serialize(Array.isArray(paymentCollectionId) ? updated : updated[0], { populate: true });
    }
    async createPaymentSession(paymentCollectionId, input, sharedContext) {
        let paymentSession;
        try {
            paymentSession = await this.createPaymentSession_(paymentCollectionId, input, sharedContext);
            const providerSessionSession = await this.paymentProviderService_.createSession(input.provider_id, {
                context: { ...input.context, session_id: paymentSession.id },
                amount: input.amount,
                currency_code: input.currency_code,
            });
            paymentSession = (await this.paymentSessionService_.update({
                id: paymentSession.id,
                data: { ...input.data, ...providerSessionSession },
            }, sharedContext))[0];
        }
        catch (error) {
            if (paymentSession) {
                // In case the session is created, but fails to be updated in Medusa,
                // we catch the error and delete the session and rethrow.
                await this.paymentProviderService_.deleteSession({
                    provider_id: input.provider_id,
                    data: input.data,
                });
                await this.paymentSessionService_.delete(paymentSession.id, sharedContext);
            }
            throw error;
        }
        return await this.baseRepository_.serialize(paymentSession, {
            populate: true,
        });
    }
    async createPaymentSession_(paymentCollectionId, data, sharedContext) {
        const paymentSession = await this.paymentSessionService_.create({
            payment_collection_id: paymentCollectionId,
            provider_id: data.provider_id,
            amount: data.amount,
            currency_code: data.currency_code,
            context: data.context,
            data: data.data,
        }, sharedContext);
        return paymentSession;
    }
    async updatePaymentSession(data, sharedContext) {
        const session = await this.paymentSessionService_.retrieve(data.id, { select: ["id", "data", "provider_id"] }, sharedContext);
        const updated = await this.paymentSessionService_.update({
            id: session.id,
            amount: data.amount,
            currency_code: data.currency_code,
            data: data.data,
        }, sharedContext);
        return await this.baseRepository_.serialize(updated[0], { populate: true });
    }
    async deletePaymentSession(id, sharedContext) {
        const session = await this.paymentSessionService_.retrieve(id, { select: ["id", "data", "provider_id"] }, sharedContext);
        await this.paymentProviderService_.deleteSession({
            provider_id: session.provider_id,
            data: session.data,
        });
        await this.paymentSessionService_.delete(id, sharedContext);
    }
    async authorizePaymentSession(id, context, sharedContext) {
        const session = await this.paymentSessionService_.retrieve(id, {
            select: [
                "id",
                "data",
                "provider_id",
                "amount",
                "raw_amount",
                "currency_code",
                "payment_collection_id",
            ],
        }, sharedContext);
        // this method needs to be idempotent
        if (session.authorized_at) {
            const payment = await this.paymentService_.retrieve({ session_id: session.id }, { relations: ["payment_collection"] }, sharedContext);
            return await this.baseRepository_.serialize(payment, { populate: true });
        }
        let { data, status } = await this.paymentProviderService_.authorizePayment({
            provider_id: session.provider_id,
            data: session.data,
        }, context);
        if (status !== utils_1.PaymentSessionStatus.AUTHORIZED &&
            status !== utils_1.PaymentSessionStatus.CAPTURED) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, `Session: ${session.id} is not authorized with the provider.`);
        }
        let payment;
        try {
            payment = await this.authorizePaymentSession_(session, data, status, sharedContext);
        }
        catch (error) {
            await this.paymentProviderService_.cancelPayment({
                provider_id: session.provider_id,
                data,
            });
            throw error;
        }
        await this.maybeUpdatePaymentCollection_(session.payment_collection_id, sharedContext);
        return await this.retrievePayment(payment.id, { relations: ["payment_collection"] }, sharedContext);
    }
    async authorizePaymentSession_(session, data, status, sharedContext) {
        let autoCapture = false;
        if (status === utils_1.PaymentSessionStatus.CAPTURED) {
            status = utils_1.PaymentSessionStatus.AUTHORIZED;
            autoCapture = true;
        }
        await this.paymentSessionService_.update({
            id: session.id,
            data,
            status,
            authorized_at: status === utils_1.PaymentSessionStatus.AUTHORIZED ? new Date() : null,
        }, sharedContext);
        const payment = await this.paymentService_.create({
            amount: session.amount,
            currency_code: session.currency_code,
            payment_session: session.id,
            payment_collection_id: session.payment_collection_id,
            provider_id: session.provider_id,
            data,
        }, sharedContext);
        if (autoCapture) {
            await this.capturePayment({ payment_id: payment.id, amount: session.amount }, sharedContext);
        }
        return payment;
    }
    // @ts-expect-error
    async retrievePaymentSession(id, config = {}, sharedContext) {
        const session = await this.paymentSessionService_.retrieve(id, config, sharedContext);
        return await this.baseRepository_.serialize(session);
    }
    // @ts-expect-error
    async listPaymentSessions(filters, config, sharedContext) {
        const sessions = await this.paymentSessionService_.list(filters, config, sharedContext);
        return await this.baseRepository_.serialize(sessions);
    }
    async updatePayment(data, sharedContext) {
        // NOTE: currently there is no update with the provider but maybe data could be updated
        const result = await this.paymentService_.update(data, sharedContext);
        return await this.baseRepository_.serialize(result[0], {
            populate: true,
        });
    }
    async capturePayment(data, sharedContext = {}) {
        const [payment, isFullyCaptured] = await this.capturePayment_(data, sharedContext);
        try {
            await this.capturePaymentFromProvider_(payment, isFullyCaptured, sharedContext);
        }
        catch (error) {
            await super.deleteCaptures(data.payment_id, sharedContext);
            throw error;
        }
        await this.maybeUpdatePaymentCollection_(payment.payment_collection_id, sharedContext);
        return await this.retrievePayment(payment.id, { relations: ["captures"] }, sharedContext);
    }
    async capturePayment_(data, sharedContext = {}) {
        const payment = await this.paymentService_.retrieve(data.payment_id, {
            select: [
                "id",
                "data",
                "provider_id",
                "payment_collection_id",
                "amount",
                "raw_amount",
                "canceled_at",
            ],
            relations: ["captures.raw_amount"],
        }, sharedContext);
        // If no custom amount is passed, we assume the full amount needs to be captured
        if (!data.amount) {
            data.amount = payment.amount;
        }
        if (payment.canceled_at) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `The payment: ${payment.id} has been canceled.`);
        }
        if (payment.captured_at) {
            return [
                (await this.retrievePayment(data.payment_id, { relations: ["captures"] }, sharedContext)),
                true,
            ];
        }
        const capturedAmount = payment.captures.reduce((captureAmount, next) => {
            return utils_1.MathBN.add(captureAmount, next.raw_amount);
        }, utils_1.MathBN.convert(0));
        const authorizedAmount = new utils_1.BigNumber(payment.raw_amount);
        const newCaptureAmount = new utils_1.BigNumber(data.amount);
        const remainingToCapture = utils_1.MathBN.sub(authorizedAmount, capturedAmount);
        if (utils_1.MathBN.gt(newCaptureAmount, remainingToCapture)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `You cannot capture more than the authorized amount substracted by what is already captured.`);
        }
        // When the entire authorized amount has been captured, we return it as complete
        const totalCaptured = utils_1.MathBN.convert(utils_1.MathBN.add(capturedAmount, newCaptureAmount));
        const isFullyCaptured = utils_1.MathBN.gte(totalCaptured, authorizedAmount);
        await this.captureService_.create({
            payment: data.payment_id,
            amount: data.amount,
            captured_by: data.captured_by,
        }, sharedContext);
        return [payment, isFullyCaptured];
    }
    async capturePaymentFromProvider_(payment, isFullyCaptured, sharedContext = {}) {
        const paymentData = await this.paymentProviderService_.capturePayment({
            data: payment.data,
            provider_id: payment.provider_id,
        });
        await this.paymentService_.update({
            id: payment.id,
            data: paymentData,
            captured_at: isFullyCaptured ? new Date() : undefined,
        }, sharedContext);
        return payment;
    }
    async refundPayment(data, sharedContext = {}) {
        const payment = await this.paymentService_.retrieve(data.payment_id, {
            select: [
                "id",
                "data",
                "provider_id",
                "payment_collection_id",
                "amount",
                "raw_amount",
            ],
            relations: ["captures.raw_amount", "refunds.raw_amount"],
        }, sharedContext);
        const refund = await this.refundPayment_(payment, data, sharedContext);
        try {
            await this.refundPaymentFromProvider_(payment, refund, sharedContext);
        }
        catch (error) {
            await super.deleteRefunds(data.payment_id, sharedContext);
            throw error;
        }
        await this.maybeUpdatePaymentCollection_(payment.payment_collection_id, sharedContext);
        return await this.retrievePayment(payment.id, { relations: ["refunds"] }, sharedContext);
    }
    async refundPayment_(payment, data, sharedContext = {}) {
        if (!data.amount) {
            data.amount = payment.amount;
        }
        const capturedAmount = payment.captures.reduce((captureAmount, next) => {
            const amountAsBigNumber = new utils_1.BigNumber(next.raw_amount);
            return utils_1.MathBN.add(captureAmount, amountAsBigNumber);
        }, utils_1.MathBN.convert(0));
        const refundedAmount = payment.refunds.reduce((refundedAmount, next) => {
            return utils_1.MathBN.add(refundedAmount, next.raw_amount);
        }, utils_1.MathBN.convert(0));
        const totalRefundedAmount = utils_1.MathBN.add(refundedAmount, data.amount);
        if (utils_1.MathBN.lt(capturedAmount, totalRefundedAmount)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `You cannot refund more than what is captured on the payment.`);
        }
        const refund = await this.refundService_.create({
            payment: data.payment_id,
            amount: data.amount,
            created_by: data.created_by,
            note: data.note,
            refund_reason_id: data.refund_reason_id,
        }, sharedContext);
        return refund;
    }
    async refundPaymentFromProvider_(payment, refund, sharedContext = {}) {
        const paymentData = await this.paymentProviderService_.refundPayment({
            data: payment.data,
            provider_id: payment.provider_id,
        }, refund.raw_amount);
        await this.paymentService_.update({ id: payment.id, data: paymentData }, sharedContext);
        return payment;
    }
    async cancelPayment(paymentId, sharedContext) {
        const payment = await this.paymentService_.retrieve(paymentId, { select: ["id", "data", "provider_id"] }, sharedContext);
        // TODO: revisit when totals are implemented
        //   if (payment.captured_amount !== 0) {
        //     throw new MedusaError(
        //       MedusaError.Types.INVALID_DATA,
        //       `Cannot cancel a payment: ${payment.id} that has been captured.`
        //     )
        //   }
        await this.paymentProviderService_.cancelPayment({
            data: payment.data,
            provider_id: payment.provider_id,
        });
        await this.paymentService_.update({ id: paymentId, canceled_at: new Date() }, sharedContext);
        return await this.retrievePayment(payment.id, {}, sharedContext);
    }
    async processEvent(eventData, sharedContext) {
        const providerId = `pp_${eventData.provider}`;
        const event = await this.paymentProviderService_.getWebhookActionAndData(providerId, eventData.payload);
        if (event.action === utils_1.PaymentActions.NOT_SUPPORTED) {
            return;
        }
        switch (event.action) {
            case utils_1.PaymentActions.SUCCESSFUL: {
                const [payment] = await this.listPayments({
                    payment_session_id: event.data.session_id,
                }, {}, sharedContext);
                if (payment && !payment.captured_at) {
                    await this.capturePayment({ payment_id: payment.id, amount: event.data.amount }, sharedContext);
                }
                break;
            }
            case utils_1.PaymentActions.AUTHORIZED:
                await this.authorizePaymentSession(event.data.session_id, {}, sharedContext);
        }
    }
    async listPaymentProviders(filters = {}, config = {}, sharedContext) {
        const providers = await this.paymentProviderService_.list(filters, config, sharedContext);
        return await this.baseRepository_.serialize(providers, {
            populate: true,
        });
    }
    async listAndCountPaymentProviders(filters = {}, config = {}, sharedContext) {
        const [providers, count] = await this.paymentProviderService_.listAndCount(filters, config, sharedContext);
        return [
            await this.baseRepository_.serialize(providers, {
                populate: true,
            }),
            count,
        ];
    }
    async maybeUpdatePaymentCollection_(paymentCollectionId, sharedContext) {
        const paymentCollection = await this.paymentCollectionService_.retrieve(paymentCollectionId, {
            select: ["amount", "raw_amount", "status"],
            relations: [
                "payment_sessions.amount",
                "payment_sessions.raw_amount",
                "payments.captures.amount",
                "payments.captures.raw_amount",
                "payments.refunds.amount",
                "payments.refunds.raw_amount",
            ],
        }, sharedContext);
        const paymentSessions = paymentCollection.payment_sessions;
        const captures = paymentCollection.payments
            .map((pay) => [...pay.captures])
            .flat();
        const refunds = paymentCollection.payments
            .map((pay) => [...pay.refunds])
            .flat();
        let authorizedAmount = utils_1.MathBN.convert(0);
        let capturedAmount = utils_1.MathBN.convert(0);
        let refundedAmount = utils_1.MathBN.convert(0);
        for (const ps of paymentSessions) {
            if (ps.status === utils_1.PaymentSessionStatus.AUTHORIZED) {
                authorizedAmount = utils_1.MathBN.add(authorizedAmount, ps.amount);
            }
        }
        for (const capture of captures) {
            capturedAmount = utils_1.MathBN.add(capturedAmount, capture.amount);
        }
        for (const refund of refunds) {
            refundedAmount = utils_1.MathBN.add(refundedAmount, refund.amount);
        }
        let status = paymentSessions.length === 0
            ? utils_1.PaymentCollectionStatus.NOT_PAID
            : utils_1.PaymentCollectionStatus.AWAITING;
        if (utils_1.MathBN.gt(authorizedAmount, 0)) {
            status = utils_1.MathBN.gte(authorizedAmount, paymentCollection.amount)
                ? utils_1.PaymentCollectionStatus.AUTHORIZED
                : utils_1.PaymentCollectionStatus.PARTIALLY_AUTHORIZED;
        }
        await this.paymentCollectionService_.update({
            id: paymentCollectionId,
            status,
            authorized_amount: authorizedAmount,
            captured_amount: capturedAmount,
            refunded_amount: refundedAmount,
        }, sharedContext);
    }
}
exports.default = PaymentModuleService;
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "createPaymentCollections", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "createPaymentCollections_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "updatePaymentCollections", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "updatePaymentCollections_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "upsertPaymentCollections", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "completePaymentCollections", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "createPaymentSession", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "createPaymentSession_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "updatePaymentSession", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "deletePaymentSession", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "authorizePaymentSession", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(3, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_models_1.PaymentSession, Object, String, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "authorizePaymentSession_", null);
__decorate([
    (0, utils_1.InjectManager)()
    // @ts-expect-error
    ,
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "retrievePaymentSession", null);
__decorate([
    (0, utils_1.InjectManager)()
    // @ts-expect-error
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "listPaymentSessions", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "updatePayment", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "capturePayment", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "capturePayment_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_models_1.Payment, Boolean, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "capturePaymentFromProvider_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "refundPayment", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_models_1.Payment, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "refundPayment_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_models_1.Payment,
        _models_1.Refund, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "refundPaymentFromProvider_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "cancelPayment", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "processEvent", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "listPaymentProviders", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "listAndCountPaymentProviders", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentModuleService.prototype, "maybeUpdatePaymentCollection_", null);
//# sourceMappingURL=payment-module.js.map