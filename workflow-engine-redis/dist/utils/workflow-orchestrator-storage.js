"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisDistributedTransactionStorage = void 0;
const orchestration_1 = require("@medusajs/framework/orchestration");
const utils_1 = require("@medusajs/framework/utils");
const bullmq_1 = require("bullmq");
var JobType;
(function (JobType) {
    JobType["SCHEDULE"] = "schedule";
    JobType["RETRY"] = "retry";
    JobType["STEP_TIMEOUT"] = "step_timeout";
    JobType["TRANSACTION_TIMEOUT"] = "transaction_timeout";
})(JobType || (JobType = {}));
class RedisDistributedTransactionStorage {
    constructor({ workflowExecutionService, redisConnection, redisWorkerConnection, redisQueueName, logger, }) {
        this.workflowExecutionService_ = workflowExecutionService;
        this.logger_ = logger;
        this.redisClient = redisConnection;
        this.redisWorkerConnection = redisWorkerConnection;
        this.queueName = redisQueueName;
        this.queue = new bullmq_1.Queue(redisQueueName, { connection: this.redisClient });
    }
    async onApplicationPrepareShutdown() {
        // Close worker gracefully, i.e. wait for the current jobs to finish
        await this.worker?.close();
    }
    async onApplicationShutdown() {
        await this.queue?.close();
    }
    async onApplicationStart() {
        const allowedJobs = [
            JobType.RETRY,
            JobType.STEP_TIMEOUT,
            JobType.TRANSACTION_TIMEOUT,
        ];
        this.worker = new bullmq_1.Worker(this.queueName, async (job) => {
            if (allowedJobs.includes(job.name)) {
                await this.executeTransaction(job.data.workflowId, job.data.transactionId);
            }
            // Note: We might even want a separate worker with different concurrency settings in the future, but for now we keep it simple
            if (job.name === JobType.SCHEDULE) {
                await this.executeScheduledJob(job.data.jobId, job.data.schedulerOptions);
            }
        }, { connection: this.redisWorkerConnection });
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
    async executeTransaction(workflowId, transactionId) {
        return await this.workflowOrchestratorService_.run(workflowId, {
            transactionId,
            logOnError: true,
            throwOnError: false,
        });
    }
    async executeScheduledJob(jobId, schedulerOptions) {
        try {
            // TODO: In the case of concurrency being forbidden, we want to generate a predictable transaction ID and rely on the idempotency
            // of the transaction to ensure that the transaction is only executed once.
            return await this.workflowOrchestratorService_.run(jobId, {
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
    async get(key, options) {
        const data = await this.redisClient.get(key);
        if (data) {
            return JSON.parse(data);
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
        const keys = await this.redisClient.keys(orchestration_1.DistributedTransaction.keyPrefix + ":*");
        const transactions = [];
        for (const key of keys) {
            const data = await this.redisClient.get(key);
            if (data) {
                transactions.push(JSON.parse(data));
            }
        }
        return transactions;
    }
    async save(key, data, ttl, options) {
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
        if (!hasFinished) {
            if (ttl) {
                await this.redisClient.set(key, stringifiedData, "EX", ttl);
            }
            else {
                await this.redisClient.set(key, stringifiedData);
            }
        }
        if (hasFinished && !retentionTime && !idempotent) {
            await this.deleteFromDb(parsedData);
        }
        else {
            await this.saveToDb(parsedData);
        }
        if (hasFinished) {
            await this.redisClient.set(key, stringifiedData, "EX", RedisDistributedTransactionStorage.TTL_AFTER_COMPLETED);
        }
    }
    async scheduleRetry(transaction, step, timestamp, interval) {
        await this.queue.add(JobType.RETRY, {
            workflowId: transaction.modelId,
            transactionId: transaction.transactionId,
            stepId: step.id,
        }, {
            delay: interval > 0 ? interval * 1000 : undefined,
            jobId: this.getJobId(JobType.RETRY, transaction, step),
            removeOnComplete: true,
        });
    }
    async clearRetry(transaction, step) {
        await this.removeJob(JobType.RETRY, transaction, step);
    }
    async scheduleTransactionTimeout(transaction, _, interval) {
        await this.queue.add(JobType.TRANSACTION_TIMEOUT, {
            workflowId: transaction.modelId,
            transactionId: transaction.transactionId,
        }, {
            delay: interval * 1000,
            jobId: this.getJobId(JobType.TRANSACTION_TIMEOUT, transaction),
            removeOnComplete: true,
        });
    }
    async clearTransactionTimeout(transaction) {
        await this.removeJob(JobType.TRANSACTION_TIMEOUT, transaction);
    }
    async scheduleStepTimeout(transaction, step, timestamp, interval) {
        await this.queue.add(JobType.STEP_TIMEOUT, {
            workflowId: transaction.modelId,
            transactionId: transaction.transactionId,
            stepId: step.id,
        }, {
            delay: interval * 1000,
            jobId: this.getJobId(JobType.STEP_TIMEOUT, transaction, step),
            removeOnComplete: true,
        });
    }
    async clearStepTimeout(transaction, step) {
        await this.removeJob(JobType.STEP_TIMEOUT, transaction, step);
    }
    getJobId(type, transaction, step) {
        const key = [type, transaction.modelId, transaction.transactionId];
        if (step) {
            key.push(step.id, step.attempts + "");
            if (step.isCompensating()) {
                key.push("compensate");
            }
        }
        return key.join(":");
    }
    async removeJob(type, transaction, step) {
        const jobId = this.getJobId(type, transaction, step);
        const job = await this.queue.getJob(jobId);
        if (job && job.attemptsStarted === 0) {
            await job.remove();
        }
    }
    /* Scheduler storage methods */
    async schedule(jobDefinition, schedulerOptions) {
        const jobId = typeof jobDefinition === "string" ? jobDefinition : jobDefinition.jobId;
        // If it is the same key (eg. the same workflow name), the old one will get overridden.
        await this.queue.add(JobType.SCHEDULE, {
            jobId,
            schedulerOptions,
        }, {
            repeat: {
                pattern: schedulerOptions.cron,
                limit: schedulerOptions.numberOfExecutions,
                key: `${JobType.SCHEDULE}_${jobId}`,
            },
            removeOnComplete: {
                age: 86400,
                count: 1000,
            },
            removeOnFail: {
                age: 604800,
                count: 5000,
            },
        });
    }
    async remove(jobId) {
        await this.queue.removeRepeatableByKey(`${JobType.SCHEDULE}_${jobId}`);
    }
    async removeAll() {
        const repeatableJobs = await this.queue.getRepeatableJobs();
        await (0, utils_1.promiseAll)(repeatableJobs.map((job) => this.queue.removeRepeatableByKey(job.key)));
    }
}
exports.RedisDistributedTransactionStorage = RedisDistributedTransactionStorage;
RedisDistributedTransactionStorage.TTL_AFTER_COMPLETED = 60 * 2; // 2 minutes
//# sourceMappingURL=workflow-orchestrator-storage.js.map