"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStepHandler = createStepHandler;
const utils_1 = require("@medusajs/utils");
const resolve_value_1 = require("./resolve-value");
function createStepHandler({ stepName, input, invokeFn, compensateFn, }) {
    const handler = {
        invoke: async (stepArguments) => {
            const metadata = stepArguments.metadata;
            const idempotencyKey = metadata.idempotency_key;
            stepArguments.context.idempotencyKey = idempotencyKey;
            const flowMetadata = stepArguments.transaction.getFlow()?.metadata;
            const executionContext = {
                workflowId: metadata.model_id,
                stepName: metadata.action,
                action: "invoke",
                idempotencyKey,
                attempt: metadata.attempt,
                container: stepArguments.container,
                metadata,
                eventGroupId: flowMetadata?.eventGroupId ?? stepArguments.context.eventGroupId,
                parentStepIdempotencyKey: flowMetadata?.parentStepIdempotencyKey,
                transactionId: stepArguments.context.transactionId,
                context: stepArguments.context,
            };
            const argInput = input ? await (0, resolve_value_1.resolveValue)(input, stepArguments) : {};
            const stepResponse = await invokeFn.apply(this, [
                argInput,
                executionContext,
            ]);
            const stepResponseJSON = stepResponse?.__type === utils_1.OrchestrationUtils.SymbolWorkflowStepResponse
                ? stepResponse.toJSON()
                : stepResponse;
            return {
                __type: utils_1.OrchestrationUtils.SymbolWorkflowWorkflowData,
                output: stepResponseJSON,
            };
        },
        compensate: compensateFn
            ? async (stepArguments) => {
                const metadata = stepArguments.metadata;
                const idempotencyKey = metadata.idempotency_key;
                stepArguments.context.idempotencyKey = idempotencyKey;
                const flowMetadata = stepArguments.transaction.getFlow()?.metadata;
                const executionContext = {
                    workflowId: metadata.model_id,
                    stepName: metadata.action,
                    action: "compensate",
                    idempotencyKey,
                    parentStepIdempotencyKey: flowMetadata?.parentStepIdempotencyKey,
                    attempt: metadata.attempt,
                    container: stepArguments.container,
                    metadata,
                    context: stepArguments.context,
                };
                const stepOutput = stepArguments.invoke[stepName]?.output;
                const invokeResult = stepOutput?.__type === utils_1.OrchestrationUtils.SymbolWorkflowStepResponse
                    ? stepOutput.compensateInput &&
                        (0, utils_1.deepCopy)(stepOutput.compensateInput)
                    : stepOutput && (0, utils_1.deepCopy)(stepOutput);
                const args = [invokeResult, executionContext];
                const output = await compensateFn.apply(this, args);
                return {
                    output,
                };
            }
            : undefined,
    };
    return handler;
}
//# sourceMappingURL=create-step-handler.js.map