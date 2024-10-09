import { MainExportedWorkflow } from "./type";
export declare const exportWorkflow: <TData = unknown, TResult = unknown>(workflowId: string, defaultResult?: string | Symbol, dataPreparation?: (data: TData) => Promise<unknown>, options?: {
    wrappedInput?: boolean;
    sourcePath?: string;
}) => MainExportedWorkflow<TData, TResult>;
//# sourceMappingURL=workflow-export.d.ts.map