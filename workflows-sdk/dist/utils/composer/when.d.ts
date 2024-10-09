import { StepExecutionContext, WorkflowData } from "./type";
type ConditionFunction<T extends object | WorkflowData> = (input: T extends WorkflowData<infer U> ? U : T extends object ? {
    [K in keyof T]: T[K] extends WorkflowData<infer U> ? U : T[K];
} : {}, context: StepExecutionContext) => boolean;
type ThenFunc = <ThenResolver extends () => any>(resolver: ThenResolver) => ReturnType<ThenResolver> extends WorkflowData<infer ReturnedWorkflowData> ? WorkflowData<ReturnedWorkflowData> | undefined : ReturnType<ThenResolver>;
export declare function when<T extends object | WorkflowData, Then extends Function>(values: T, condition: ConditionFunction<T>): {
    then: ThenFunc;
};
export {};
//# sourceMappingURL=when.d.ts.map