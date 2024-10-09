import { DistributedTransactionType, IDistributedSchedulerStorage, IDistributedTransactionStorage, SchedulerOptions, TransactionCheckpoint, TransactionOptions, TransactionStep } from "@medusajs/framework/orchestration";
import { Logger, ModulesSdkTypes } from "@medusajs/framework/types";
import Redis from "ioredis";
export declare class RedisDistributedTransactionStorage implements IDistributedTransactionStorage, IDistributedSchedulerStorage {
    private static TTL_AFTER_COMPLETED;
    private workflowExecutionService_;
    private logger_;
    private workflowOrchestratorService_;
    private redisClient;
    private redisWorkerConnection;
    private queueName;
    private queue;
    private worker;
    constructor({ workflowExecutionService, redisConnection, redisWorkerConnection, redisQueueName, logger, }: {
        workflowExecutionService: ModulesSdkTypes.IMedusaInternalService<any>;
        redisConnection: Redis;
        redisWorkerConnection: Redis;
        redisQueueName: string;
        logger: Logger;
    });
    onApplicationPrepareShutdown(): Promise<void>;
    onApplicationShutdown(): Promise<void>;
    onApplicationStart(): Promise<void>;
    setWorkflowOrchestratorService(workflowOrchestratorService: any): void;
    private saveToDb;
    private deleteFromDb;
    private executeTransaction;
    private executeScheduledJob;
    get(key: string, options?: TransactionOptions): Promise<TransactionCheckpoint | undefined>;
    list(): Promise<TransactionCheckpoint[]>;
    save(key: string, data: TransactionCheckpoint, ttl?: number, options?: TransactionOptions): Promise<void>;
    scheduleRetry(transaction: DistributedTransactionType, step: TransactionStep, timestamp: number, interval: number): Promise<void>;
    clearRetry(transaction: DistributedTransactionType, step: TransactionStep): Promise<void>;
    scheduleTransactionTimeout(transaction: DistributedTransactionType, _: number, interval: number): Promise<void>;
    clearTransactionTimeout(transaction: DistributedTransactionType): Promise<void>;
    scheduleStepTimeout(transaction: DistributedTransactionType, step: TransactionStep, timestamp: number, interval: number): Promise<void>;
    clearStepTimeout(transaction: DistributedTransactionType, step: TransactionStep): Promise<void>;
    private getJobId;
    private removeJob;
    schedule(jobDefinition: string | {
        jobId: string;
    }, schedulerOptions: SchedulerOptions): Promise<void>;
    remove(jobId: string): Promise<void>;
    removeAll(): Promise<void>;
}
//# sourceMappingURL=workflow-orchestrator-storage.d.ts.map