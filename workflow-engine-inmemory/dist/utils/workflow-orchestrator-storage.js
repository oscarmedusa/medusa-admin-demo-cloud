"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDistributedTransactionStorage = void 0;
const utils_1 = require("@medusajs/framework/utils");
const cron_parser_1 = require("cron-parser");
class InMemoryDistributedTransactionStorage {
    constructor({ workflowExecutionService, logger, }) {
        this.storage = new Map();
        this.scheduled = new Map();
        this.retries = new Map();
        this.timeouts = new Map();
        this.workflowExecutionService_ = workflowExecutionService;
        this.logger_ = logger;
    }
    setWorkflowOrchestratorService(workflowOrchestratorService) {
        this.workflowOrchestratorService_ = workflowOrchestratorService;
    }
    async saveToDb(data) {
        await this.workflowExecutionService_.upsert([
            {
                workflow_id: data.flow.modelId,
                transaction_id: data.flow.transactionId,
                execution: data.flow,
                context: {
                    data: data.context,
                    errors: data.errors,
                },
                state: data.flow.state,
            },
        ]);
    }
    async deleteFromDb(data) {
        await this.workflowExecutionService_.delete([
            {
                workflow_id: data.flow.modelId,
                transaction_id: data.flow.transactionId,
            },
        ]);
    }
    async get(key, options) {
        const data = this.storage.get(key);
        if (data) {
            return data;
        }
        const { idempotent } = options ?? {};
        if (!idempotent) {
            return;
        }
        const [_, workflowId, transactionId] = key.split(":");
        const trx = await this.workflowExecutionService_
            .retrieve({
            workflow_id: workflowId,
            transaction_id: transactionId,
        }, {
            select: ["execution", "context"],
        })
            .catch(() => undefined);
        if (trx) {
            return {
                flow: trx.execution,
                context: trx.context.data,
                errors: trx.context.errors,
            };
        }
        return;
    }
    async list() {
        return Array.from(this.storage.values());
    }
    async save(key, data, ttl, options) {
        this.storage.set(key, data);
        /**
         * Store the retention time only if the transaction is done, failed or reverted.
         * From that moment, this tuple can be later on archived or deleted after the retention time.
         */
        const hasFinished = [
            utils_1.TransactionState.DONE,
            utils_1.TransactionState.FAILED,
            utils_1.TransactionState.REVERTED,
        ].includes(data.flow.state);
        const { retentionTime, idempotent } = options ?? {};
        if (hasFinished) {
            Object.assign(data, {
                retention_time: retentionTime,
            });
        }
        const stringifiedData = JSON.stringify(data);
        const parsedData = JSON.parse(stringifiedData);
        if (hasFinished && !retentionTime && !idempotent) {
            await this.deleteFromDb(parsedData);
        }
        else {
            await this.saveToDb(parsedData);
        }
        if (hasFinished) {
            this.storage.delete(key);
        }
    }
    async scheduleRetry(transaction, step, timestamp, interval) {
        const { modelId: workflowId, transactionId } = transaction;
        const inter = setTimeout(async () => {
            await this.workflowOrchestratorService_.run(workflowId, {
                transactionId,
                logOnError: true,
                throwOnError: false,
            });
        }, interval * 1e3);
        const key = `${workflowId}:${transactionId}:${step.id}`;
        this.retries.set(key, inter);
    }
    async clearRetry(transaction, step) {
        const { modelId: workflowId, transactionId } = transaction;
        const key = `${workflowId}:${transactionId}:${step.id}`;
        const inter = this.retries.get(key);
        if (inter) {
            clearTimeout(inter);
            this.retries.delete(key);
        }
    }
    async scheduleTransactionTimeout(transaction, timestamp, interval) {
        const { modelId: workflowId, transactionId } = transaction;
        const inter = setTimeout(async () => {
            await this.workflowOrchestratorService_.run(workflowId, {
                transactionId,
                throwOnError: false,
            });
        }, interval * 1e3);
        const key = `${workflowId}:${transactionId}`;
        this.timeouts.set(key, inter);
    }
    async clearTransactionTimeout(transaction) {
        const { modelId: workflowId, transactionId } = transaction;
        const key = `${workflowId}:${transactionId}`;
        const inter = this.timeouts.get(key);
        if (inter) {
            clearTimeout(inter);
            this.timeouts.delete(key);
        }
    }
    async scheduleStepTimeout(transaction, step, timestamp, interval) {
        const { modelId: workflowId, transactionId } = transaction;
        const inter = setTimeout(async () => {
            await this.workflowOrchestratorService_.run(workflowId, {
                transactionId,
                throwOnError: false,
            });
        }, interval * 1e3);
        const key = `${workflowId}:${transactionId}:${step.id}`;
        this.timeouts.set(key, inter);
    }
    async clearStepTimeout(transaction, step) {
        const { modelId: workflowId, transactionId } = transaction;
        const key = `${workflowId}:${transactionId}:${step.id}`;
        const inter = this.timeouts.get(key);
        if (inter) {
            clearTimeout(inter);
            this.timeouts.delete(key);
        }
    }
    /* Scheduler storage methods */
    async schedule(jobDefinition, schedulerOptions) {
        const jobId = typeof jobDefinition === "string" ? jobDefinition : jobDefinition.jobId;
        // In order to ensure that the schedule configuration is always up to date, we first cancel an existing job, if there was one
        // any only then we add the new one.
        await this.remove(jobId);
        const expression = (0, cron_parser_1.parseExpression)(schedulerOptions.cron);
        const nextExecution = expression.next().getTime() - Date.now();
        const timer = setTimeout(async () => {
            this.jobHandler(jobId);
        }, nextExecution);
        this.scheduled.set(jobId, {
            timer,
            expression,
            numberOfExecutions: 0,
            config: schedulerOptions,
        });
    }
    async remove(jobId) {
        const job = this.scheduled.get(jobId);
        if (!job) {
            return;
        }
        clearTimeout(job.timer);
        this.scheduled.delete(jobId);
    }
    async removeAll() {
        for (const [key] of this.scheduled) {
            await this.remove(key);
        }
    }
    async jobHandler(jobId) {
        const job = this.scheduled.get(jobId);
        if (!job) {
            return;
        }
        if (job.config?.numberOfExecutions !== undefined &&
            job.config.numberOfExecutions <= job.numberOfExecutions) {
            this.scheduled.delete(jobId);
            return;
        }
        const nextExecution = job.expression.next().getTime() - Date.now();
        const timer = setTimeout(async () => {
            this.jobHandler(jobId);
        }, nextExecution);
        this.scheduled.set(jobId, {
            timer,
            expression: job.expression,
            numberOfExecutions: (job.numberOfExecutions ?? 0) + 1,
            config: job.config,
        });
        try {
            // With running the job after setting a new timer we basically allow for concurrent runs, unless we add idempotency keys once they are supported.
            await this.workflowOrchestratorService_.run(jobId, {
                logOnError: true,
                throwOnError: false,
            });
        }
        catch (e) {
            if (e instanceof utils_1.MedusaError && e.type === utils_1.MedusaError.Types.NOT_FOUND) {
                this.logger_?.warn(`Tried to execute a scheduled workflow with ID ${jobId} that does not exist, removing it from the scheduler.`);
                await this.remove(jobId);
                return;
            }
            throw e;
        }
    }
}
exports.InMemoryDistributedTransactionStorage = InMemoryDistributedTransactionStorage;
//# sourceMappingURL=workflow-orchestrator-storage.js.map