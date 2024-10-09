import { Context, DAL, InternalModuleDeclaration, ModulesSdkTypes, WorkflowsSdkTypes } from "@medusajs/framework/types";
import { ModulesSdkUtils } from "@medusajs/framework/utils";
import type { ReturnWorkflow, UnwrapWorkflowInputDataType } from "@medusajs/framework/workflows-sdk";
import { WorkflowExecution } from "../models";
import { WorkflowOrchestratorService } from ".";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    workflowExecutionService: ModulesSdkTypes.IMedusaInternalService<any>;
    workflowOrchestratorService: WorkflowOrchestratorService;
    redisDisconnectHandler: () => Promise<void>;
};
declare const WorkflowsModuleService_base: ModulesSdkUtils.MedusaServiceReturnType<{
    WorkflowExecution: {
        dto: WorkflowExecution;
    };
}>;
export declare class WorkflowsModuleService<TWorkflowExecution extends WorkflowExecution = WorkflowExecution> extends WorkflowsModuleService_base {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected workflowExecutionService_: ModulesSdkTypes.IMedusaInternalService<TWorkflowExecution>;
    protected workflowOrchestratorService_: WorkflowOrchestratorService;
    protected redisDisconnectHandler_: () => Promise<void>;
    constructor({ baseRepository, workflowExecutionService, workflowOrchestratorService, redisDisconnectHandler, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __hooks: {
        onApplicationShutdown: () => Promise<void>;
        onApplicationPrepareShutdown: () => Promise<void>;
        onApplicationStart: () => Promise<void>;
    };
    run<TWorkflow extends string | ReturnWorkflow<any, any, any>>(workflowIdOrWorkflow: TWorkflow, options?: WorkflowsSdkTypes.WorkflowOrchestratorRunDTO<TWorkflow extends ReturnWorkflow<any, any, any> ? UnwrapWorkflowInputDataType<TWorkflow> : unknown>, context?: Context): Promise<any>;
    getRunningTransaction(workflowId: string, transactionId: string, context?: Context): Promise<import("@medusajs/orchestration").DistributedTransactionType>;
    setStepSuccess({ idempotencyKey, stepResponse, options, }: {
        idempotencyKey: string | object;
        stepResponse: unknown;
        options?: Record<string, any>;
    }, context?: Context): Promise<any>;
    setStepFailure({ idempotencyKey, stepResponse, options, }: {
        idempotencyKey: string | object;
        stepResponse: unknown;
        options?: Record<string, any>;
    }, context?: Context): Promise<any>;
    subscribe(args: {
        workflowId: string;
        transactionId?: string;
        subscriber: Function;
        subscriberId?: string;
    }, context?: Context): Promise<void>;
    unsubscribe(args: {
        workflowId: string;
        transactionId?: string;
        subscriberOrId: string | Function;
    }, context?: Context): Promise<void>;
}
export {};
//# sourceMappingURL=workflows-module.d.ts.map