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
exports.WorkflowOrchestratorService = void 0;
const orchestration_1 = require("@medusajs/framework/orchestration");
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const ulid_1 = require("ulid");
const AnySubscriber = "any";
class WorkflowOrchestratorService {
    constructor({ inMemoryDistributedTransactionStorage, sharedContainer, }) {
        this.subscribers = new Map();
        this.container_ = sharedContainer;
        inMemoryDistributedTransactionStorage.setWorkflowOrchestratorService(this);
        orchestration_1.DistributedTransaction.setStorage(inMemoryDistributedTransactionStorage);
        orchestration_1.WorkflowScheduler.setStorage(inMemoryDistributedTransactionStorage);
    }
    async triggerParentStep(transaction, result) {
        const metadata = transaction.flow.metadata;
        const { parentStepIdempotencyKey } = metadata ?? {};
        if (parentStepIdempotencyKey) {
            const hasFailed = [
                utils_1.TransactionState.REVERTED,
                utils_1.TransactionState.FAILED,
            ].includes(transaction.flow.state);
            if (hasFailed) {
                await this.setStepFailure({
                    idempotencyKey: parentStepIdempotencyKey,
                    stepResponse: result,
                });
            }
            else {
                await this.setStepSuccess({
                    idempotencyKey: parentStepIdempotencyKey,
                    stepResponse: result,
                });
            }
        }
    }
    async run(workflowIdOrWorkflow, options, sharedContext = {}) {
        let { input, context, transactionId, resultFrom, throwOnError, logOnError, events: eventHandlers, container, } = options ?? {};
        const workflowId = (0, utils_1.isString)(workflowIdOrWorkflow)
            ? workflowIdOrWorkflow
            : workflowIdOrWorkflow.getName();
        if (!workflowId) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Workflow ID is required`);
        }
        context ??= {};
        context.transactionId ??= transactionId ?? (0, ulid_1.ulid)();
        const events = this.buildWorkflowEvents({
            customEventHandlers: eventHandlers,
            workflowId,
            transactionId: context.transactionId,
        });
        const exportedWorkflow = workflows_sdk_1.MedusaWorkflow.getWorkflow(workflowId);
        if (!exportedWorkflow) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Workflow with id "${workflowId}" not found.`);
        }
        const ret = await exportedWorkflow.run({
            input,
            throwOnError,
            logOnError,
            resultFrom,
            context,
            events,
            container: container ?? this.container_,
        });
        const hasFinished = ret.transaction.hasFinished();
        const metadata = ret.transaction.getFlow().metadata;
        const { parentStepIdempotencyKey } = metadata ?? {};
        const hasFailed = [
            utils_1.TransactionState.REVERTED,
            utils_1.TransactionState.FAILED,
        ].includes(ret.transaction.getFlow().state);
        const acknowledgement = {
            transactionId: context.transactionId,
            workflowId: workflowId,
            parentStepIdempotencyKey,
            hasFinished,
            hasFailed,
        };
        if (ret.transaction.hasFinished()) {
            const { result, errors } = ret;
            this.notify({
                eventType: "onFinish",
                workflowId,
                transactionId: context.transactionId,
                result,
                errors,
            });
            await this.triggerParentStep(ret.transaction, result);
        }
        return { acknowledgement, ...ret };
    }
    async getRunningTransaction(workflowId, transactionId, options, sharedContext = {}) {
        let { context, container } = options ?? {};
        if (!workflowId) {
            throw new Error("Workflow ID is required");
        }
        if (!transactionId) {
            throw new Error("TransactionId ID is required");
        }
        context ??= {};
        context.transactionId ??= transactionId;
        const exportedWorkflow = workflows_sdk_1.MedusaWorkflow.getWorkflow(workflowId);
        if (!exportedWorkflow) {
            throw new Error(`Workflow with id "${workflowId}" not found.`);
        }
        const flow = exportedWorkflow(container ?? this.container_);
        const transaction = await flow.getRunningTransaction(transactionId, context);
        return transaction;
    }
    async setStepSuccess({ idempotencyKey, stepResponse, options, }, sharedContext = {}) {
        const { context, throwOnError, logOnError, resultFrom, container, events: eventHandlers, } = options ?? {};
        const [idempotencyKey_, { workflowId, transactionId }] = this.buildIdempotencyKeyAndParts(idempotencyKey);
        const exportedWorkflow = workflows_sdk_1.MedusaWorkflow.getWorkflow(workflowId);
        if (!exportedWorkflow) {
            throw new Error(`Workflow with id "${workflowId}" not found.`);
        }
        const events = this.buildWorkflowEvents({
            customEventHandlers: eventHandlers,
            transactionId,
            workflowId,
        });
        const ret = await exportedWorkflow.registerStepSuccess({
            idempotencyKey: idempotencyKey_,
            context,
            resultFrom,
            throwOnError,
            logOnError,
            events,
            response: stepResponse,
            container: container ?? this.container_,
        });
        if (ret.transaction.hasFinished()) {
            const { result, errors } = ret;
            this.notify({
                eventType: "onFinish",
                workflowId,
                transactionId,
                result,
                errors,
            });
            await this.triggerParentStep(ret.transaction, result);
        }
        return ret;
    }
    async setStepFailure({ idempotencyKey, stepResponse, options, }, sharedContext = {}) {
        const { context, throwOnError, logOnError, resultFrom, container, events: eventHandlers, } = options ?? {};
        const [idempotencyKey_, { workflowId, transactionId }] = this.buildIdempotencyKeyAndParts(idempotencyKey);
        const exportedWorkflow = workflows_sdk_1.MedusaWorkflow.getWorkflow(workflowId);
        if (!exportedWorkflow) {
            throw new Error(`Workflow with id "${workflowId}" not found.`);
        }
        const events = this.buildWorkflowEvents({
            customEventHandlers: eventHandlers,
            transactionId,
            workflowId,
        });
        const ret = await exportedWorkflow.registerStepFailure({
            idempotencyKey: idempotencyKey_,
            context,
            resultFrom,
            throwOnError,
            logOnError,
            events,
            response: stepResponse,
            container: container ?? this.container_,
        });
        if (ret.transaction.hasFinished()) {
            const { result, errors } = ret;
            this.notify({
                eventType: "onFinish",
                workflowId,
                transactionId,
                result,
                errors,
            });
            await this.triggerParentStep(ret.transaction, result);
        }
        return ret;
    }
    subscribe({ workflowId, transactionId, subscriber, subscriberId }, sharedContext = {}) {
        subscriber._id = subscriberId;
        const subscribers = this.subscribers.get(workflowId) ?? new Map();
        const handlerIndex = (handlers) => {
            return handlers.indexOf((s) => s === subscriber || s._id === subscriberId);
        };
        if (transactionId) {
            const transactionSubscribers = subscribers.get(transactionId) ?? [];
            const subscriberIndex = handlerIndex(transactionSubscribers);
            if (subscriberIndex !== -1) {
                transactionSubscribers.slice(subscriberIndex, 1);
            }
            transactionSubscribers.push(subscriber);
            subscribers.set(transactionId, transactionSubscribers);
            this.subscribers.set(workflowId, subscribers);
            return;
        }
        const workflowSubscribers = subscribers.get(AnySubscriber) ?? [];
        const subscriberIndex = handlerIndex(workflowSubscribers);
        if (subscriberIndex !== -1) {
            workflowSubscribers.slice(subscriberIndex, 1);
        }
        workflowSubscribers.push(subscriber);
        subscribers.set(AnySubscriber, workflowSubscribers);
        this.subscribers.set(workflowId, subscribers);
    }
    unsubscribe({ workflowId, transactionId, subscriberOrId }, sharedContext = {}) {
        const subscribers = this.subscribers.get(workflowId) ?? new Map();
        const filterSubscribers = (handlers) => {
            return handlers.filter((handler) => {
                return handler._id
                    ? handler._id !== subscriberOrId
                    : handler !== subscriberOrId;
            });
        };
        if (transactionId) {
            const transactionSubscribers = subscribers.get(transactionId) ?? [];
            const newTransactionSubscribers = filterSubscribers(transactionSubscribers);
            subscribers.set(transactionId, newTransactionSubscribers);
            this.subscribers.set(workflowId, subscribers);
            return;
        }
        const workflowSubscribers = subscribers.get(AnySubscriber) ?? [];
        const newWorkflowSubscribers = filterSubscribers(workflowSubscribers);
        subscribers.set(AnySubscriber, newWorkflowSubscribers);
        this.subscribers.set(workflowId, subscribers);
    }
    notify(options) {
        const { eventType, workflowId, transactionId, errors, result, step, response, } = options;
        const subscribers = this.subscribers.get(workflowId) ?? new Map();
        const notifySubscribers = (handlers) => {
            handlers.forEach((handler) => {
                handler({
                    eventType,
                    workflowId,
                    transactionId,
                    step,
                    response,
                    result,
                    errors,
                });
            });
        };
        if (transactionId) {
            const transactionSubscribers = subscribers.get(transactionId) ?? [];
            notifySubscribers(transactionSubscribers);
        }
        const workflowSubscribers = subscribers.get(AnySubscriber) ?? [];
        notifySubscribers(workflowSubscribers);
    }
    buildWorkflowEvents({ customEventHandlers, workflowId, transactionId, }) {
        const notify = ({ eventType, step, result, response, errors, }) => {
            this.notify({
                workflowId,
                transactionId,
                eventType,
                response,
                step,
                result,
                errors,
            });
        };
        return {
            onTimeout: ({ transaction }) => {
                customEventHandlers?.onTimeout?.({ transaction });
                notify({ eventType: "onTimeout" });
            },
            onBegin: ({ transaction }) => {
                customEventHandlers?.onBegin?.({ transaction });
                notify({ eventType: "onBegin" });
            },
            onResume: ({ transaction }) => {
                customEventHandlers?.onResume?.({ transaction });
                notify({ eventType: "onResume" });
            },
            onCompensateBegin: ({ transaction }) => {
                customEventHandlers?.onCompensateBegin?.({ transaction });
                notify({ eventType: "onCompensateBegin" });
            },
            onFinish: ({ transaction, result, errors }) => {
                // TODO: unsubscribe transaction handlers on finish
                customEventHandlers?.onFinish?.({ transaction, result, errors });
            },
            onStepBegin: ({ step, transaction }) => {
                customEventHandlers?.onStepBegin?.({ step, transaction });
                notify({ eventType: "onStepBegin", step });
            },
            onStepSuccess: async ({ step, transaction }) => {
                const stepName = step.definition.action;
                const response = await (0, workflows_sdk_1.resolveValue)(transaction.getContext().invoke[stepName], transaction);
                customEventHandlers?.onStepSuccess?.({ step, transaction, response });
                notify({ eventType: "onStepSuccess", step, response });
            },
            onStepFailure: ({ step, transaction }) => {
                const stepName = step.definition.action;
                const errors = transaction
                    .getErrors(orchestration_1.TransactionHandlerType.INVOKE)
                    .filter((err) => err.action === stepName);
                customEventHandlers?.onStepFailure?.({ step, transaction, errors });
                notify({ eventType: "onStepFailure", step, errors });
            },
            onStepAwaiting: ({ step, transaction }) => {
                customEventHandlers?.onStepAwaiting?.({ step, transaction });
                notify({ eventType: "onStepAwaiting", step });
            },
            onCompensateStepSuccess: ({ step, transaction }) => {
                const stepName = step.definition.action;
                const response = transaction.getContext().compensate[stepName];
                customEventHandlers?.onCompensateStepSuccess?.({
                    step,
                    transaction,
                    response,
                });
                notify({ eventType: "onCompensateStepSuccess", step, response });
            },
            onCompensateStepFailure: ({ step, transaction }) => {
                const stepName = step.definition.action;
                const errors = transaction
                    .getErrors(orchestration_1.TransactionHandlerType.COMPENSATE)
                    .filter((err) => err.action === stepName);
                customEventHandlers?.onStepFailure?.({ step, transaction, errors });
                notify({ eventType: "onCompensateStepFailure", step, errors });
            },
        };
    }
    buildIdempotencyKeyAndParts(idempotencyKey) {
        const parts = {
            workflowId: "",
            transactionId: "",
            stepId: "",
            action: "invoke",
        };
        let idempotencyKey_ = idempotencyKey;
        const setParts = (workflowId, transactionId, stepId, action) => {
            parts.workflowId = workflowId;
            parts.transactionId = transactionId;
            parts.stepId = stepId;
            parts.action = action;
        };
        if (!(0, utils_1.isString)(idempotencyKey)) {
            const { workflowId, transactionId, stepId, action } = idempotencyKey;
            idempotencyKey_ = [workflowId, transactionId, stepId, action].join(":");
            setParts(workflowId, transactionId, stepId, action);
        }
        else {
            const [workflowId, transactionId, stepId, action] = idempotencyKey_.split(":");
            setParts(workflowId, transactionId, stepId, action);
        }
        return [idempotencyKey_, parts];
    }
}
exports.WorkflowOrchestratorService = WorkflowOrchestratorService;
__decorate([
    (0, utils_1.InjectSharedContext)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], WorkflowOrchestratorService.prototype, "run", null);
__decorate([
    (0, utils_1.InjectSharedContext)(),
    __param(3, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], WorkflowOrchestratorService.prototype, "getRunningTransaction", null);
__decorate([
    (0, utils_1.InjectSharedContext)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WorkflowOrchestratorService.prototype, "setStepSuccess", null);
__decorate([
    (0, utils_1.InjectSharedContext)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WorkflowOrchestratorService.prototype, "setStepFailure", null);
__decorate([
    (0, utils_1.InjectSharedContext)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WorkflowOrchestratorService.prototype, "subscribe", null);
__decorate([
    (0, utils_1.InjectSharedContext)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WorkflowOrchestratorService.prototype, "unsubscribe", null);
//# sourceMappingURL=workflow-orchestrator.js.map