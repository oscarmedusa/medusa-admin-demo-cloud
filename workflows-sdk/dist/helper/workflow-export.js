"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportWorkflow = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const orchestration_1 = require("@medusajs/orchestration");
const utils_1 = require("@medusajs/utils");
const os_1 = require("os");
const ulid_1 = require("ulid");
const medusa_workflow_1 = require("../medusa-workflow");
const resolve_value_1 = require("../utils/composer/helpers/resolve-value");
function createContextualWorkflowRunner({ workflowId, defaultResult, dataPreparation, options, container, }) {
    const flow = new orchestration_1.LocalWorkflow(workflowId, container);
    const originalRun = flow.run.bind(flow);
    const originalRegisterStepSuccess = flow.registerStepSuccess.bind(flow);
    const originalRegisterStepFailure = flow.registerStepFailure.bind(flow);
    const originalCancel = flow.cancel.bind(flow);
    const originalExecution = async (method, { throwOnError, logOnError = false, resultFrom, isCancel = false, container: executionContainer, }, transactionOrIdOrIdempotencyKey, input, context, events = {}) => {
        if (!executionContainer) {
            const container_ = flow.container;
            if (!container_ || !(0, utils_1.isPresent)(container_?.registrations)) {
                executionContainer = modules_sdk_1.MedusaModule.getLoadedModules().map((mod) => Object.values(mod)[0]);
            }
        }
        if (executionContainer) {
            flow.container = executionContainer;
        }
        const { eventGroupId, parentStepIdempotencyKey } = context;
        attachOnFinishReleaseEvents(events, flow, { logOnError });
        const flowMetadata = {
            eventGroupId,
            parentStepIdempotencyKey,
            sourcePath: options?.sourcePath,
        };
        const args = [
            transactionOrIdOrIdempotencyKey,
            input,
            context,
            events,
            flowMetadata,
        ];
        const transaction = await method.apply(method, args);
        let errors = transaction.getErrors(orchestration_1.TransactionHandlerType.INVOKE);
        const failedStatus = [orchestration_1.TransactionState.FAILED, orchestration_1.TransactionState.REVERTED];
        const isCancelled = isCancel && transaction.getState() === orchestration_1.TransactionState.REVERTED;
        if (!isCancelled &&
            failedStatus.includes(transaction.getState()) &&
            throwOnError) {
            /*const errorMessage = errors
              ?.map((err) => `${err.error?.message}${EOL}${err.error?.stack}`)
              ?.join(`${EOL}`)*/
            const firstError = errors?.[0]?.error ?? new Error("Unknown error");
            throw firstError;
        }
        let result;
        if (options?.wrappedInput) {
            result = (0, resolve_value_1.resolveValue)(resultFrom, transaction.getContext());
            if (result instanceof Promise) {
                result = await result.catch((e) => {
                    if (throwOnError) {
                        throw e;
                    }
                    errors ??= [];
                    errors.push(e);
                });
            }
        }
        else {
            result = transaction.getContext().invoke?.[resultFrom];
        }
        return {
            errors,
            transaction,
            result,
        };
    };
    const newRun = async ({ input, context: outerContext, throwOnError, logOnError, resultFrom, events, container, } = {}) => {
        resultFrom ??= defaultResult;
        throwOnError ??= true;
        logOnError ??= false;
        const context = {
            ...outerContext,
            __type: utils_1.MedusaContextType,
        };
        context.transactionId ??= (0, ulid_1.ulid)();
        context.eventGroupId ??= (0, ulid_1.ulid)();
        if (typeof dataPreparation === "function") {
            try {
                const copyInput = input ? JSON.parse(JSON.stringify(input)) : input;
                input = await dataPreparation(copyInput);
            }
            catch (err) {
                if (throwOnError) {
                    throw new Error(`Data preparation failed: ${err.message}${os_1.EOL}${err.stack}`);
                }
                return {
                    errors: [err],
                };
            }
        }
        return await originalExecution(originalRun, {
            throwOnError,
            resultFrom,
            container,
            logOnError,
        }, context.transactionId, input, context, events);
    };
    flow.run = newRun;
    const newRegisterStepSuccess = async ({ response, idempotencyKey, context: outerContext, throwOnError, logOnError, resultFrom, events, container, } = {
        idempotencyKey: "",
    }) => {
        idempotencyKey ??= "";
        resultFrom ??= defaultResult;
        throwOnError ??= true;
        logOnError ??= false;
        const [, transactionId] = idempotencyKey.split(":");
        const context = {
            ...outerContext,
            transactionId,
            __type: utils_1.MedusaContextType,
        };
        context.eventGroupId ??= (0, ulid_1.ulid)();
        return await originalExecution(originalRegisterStepSuccess, {
            throwOnError,
            resultFrom,
            container,
            logOnError,
        }, idempotencyKey, response, context, events);
    };
    flow.registerStepSuccess = newRegisterStepSuccess;
    const newRegisterStepFailure = async ({ response, idempotencyKey, context: outerContext, throwOnError, logOnError, resultFrom, events, container, } = {
        idempotencyKey: "",
    }) => {
        idempotencyKey ??= "";
        resultFrom ??= defaultResult;
        throwOnError ??= true;
        logOnError ??= false;
        const [, transactionId] = idempotencyKey.split(":");
        const context = {
            ...outerContext,
            transactionId,
            __type: utils_1.MedusaContextType,
        };
        context.eventGroupId ??= (0, ulid_1.ulid)();
        return await originalExecution(originalRegisterStepFailure, {
            throwOnError,
            resultFrom,
            container,
            logOnError,
        }, idempotencyKey, response, context, events);
    };
    flow.registerStepFailure = newRegisterStepFailure;
    const newCancel = async ({ transaction, transactionId, context: outerContext, throwOnError, logOnError, events, container, } = {}) => {
        throwOnError ??= true;
        logOnError ??= false;
        const context = {
            ...outerContext,
            transactionId,
            __type: utils_1.MedusaContextType,
        };
        context.eventGroupId ??= (0, ulid_1.ulid)();
        return await originalExecution(originalCancel, {
            throwOnError,
            resultFrom: undefined,
            isCancel: true,
            container,
            logOnError,
        }, transaction ?? transactionId, undefined, context, events);
    };
    flow.cancel = newCancel;
    return flow;
}
const exportWorkflow = (workflowId, defaultResult, dataPreparation, options) => {
    function exportedWorkflow(
    // TODO: rm when all usage have been migrated
    container) {
        return createContextualWorkflowRunner({
            workflowId,
            defaultResult,
            dataPreparation,
            options,
            container,
        });
    }
    const buildRunnerFn = (action, container) => {
        const contextualRunner = createContextualWorkflowRunner({
            workflowId,
            defaultResult,
            dataPreparation,
            options,
            container,
        });
        return contextualRunner[action];
    };
    exportedWorkflow.run = async (args) => {
        const container = args?.container;
        delete args?.container;
        const inputArgs = { ...args };
        return await buildRunnerFn("run", container)(inputArgs);
    };
    exportedWorkflow.registerStepSuccess = async (args) => {
        const container = args?.container;
        delete args?.container;
        const inputArgs = { ...args };
        return await buildRunnerFn("registerStepSuccess", container)(inputArgs);
    };
    exportedWorkflow.registerStepFailure = async (args) => {
        const container = args?.container;
        delete args?.container;
        const inputArgs = { ...args };
        return await buildRunnerFn("registerStepFailure", container)(inputArgs);
    };
    exportedWorkflow.cancel = async (args) => {
        const container = args?.container;
        delete args?.container;
        const inputArgs = { ...args };
        return await buildRunnerFn("cancel", container)(inputArgs);
    };
    medusa_workflow_1.MedusaWorkflow.registerWorkflow(workflowId, exportedWorkflow);
    return exportedWorkflow;
};
exports.exportWorkflow = exportWorkflow;
function attachOnFinishReleaseEvents(events = {}, flow, { logOnError, } = {}) {
    const onFinish = events.onFinish;
    const wrappedOnFinish = async (args) => {
        const { transaction } = args;
        const flowEventGroupId = transaction.getFlow().metadata?.eventGroupId;
        const logger = flow.container.resolve(utils_1.ContainerRegistrationKeys.LOGGER, { allowUnregistered: true }) || console;
        if (logOnError) {
            const TERMINAL_SIZE = process.stdout?.columns ?? 60;
            const separator = new Array(TERMINAL_SIZE).join("-");
            const workflowName = transaction.getFlow().modelId;
            const allWorkflowErrors = transaction
                .getErrors()
                .map((err) => `${workflowName}:${err?.action}:${err?.handlerType} - ${err?.error?.message}${os_1.EOL}${err?.error?.stack}`)
                .join(os_1.EOL + separator + os_1.EOL);
            if (allWorkflowErrors) {
                logger.error(allWorkflowErrors);
            }
        }
        await onFinish?.(args);
        const eventBusService = flow.container.resolve(utils_1.Modules.EVENT_BUS, { allowUnregistered: true });
        if (!eventBusService || !flowEventGroupId) {
            return;
        }
        const failedStatus = [orchestration_1.TransactionState.FAILED, orchestration_1.TransactionState.REVERTED];
        if (failedStatus.includes(transaction.getState())) {
            return await eventBusService
                .clearGroupedEvents(flowEventGroupId)
                .catch(() => {
                logger.warn(`Failed to clear events for eventGroupId - ${flowEventGroupId}`);
            });
        }
        await eventBusService.releaseGroupedEvents(flowEventGroupId).catch((e) => {
            logger.error(`Failed to release grouped events for eventGroupId: ${flowEventGroupId}`, e);
            return flow.cancel(transaction);
        });
    };
    events.onFinish = wrappedOnFinish;
}
//# sourceMappingURL=workflow-export.js.map