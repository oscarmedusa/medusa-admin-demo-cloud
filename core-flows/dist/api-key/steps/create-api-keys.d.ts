import { CreateApiKeyDTO } from "@medusajs/framework/types";
export type CreateApiKeysStepInput = {
    api_keys: CreateApiKeyDTO[];
};
export declare const createApiKeysStepId = "create-api-keys";
/**
 * This step creates one or more API keys.
 */
export declare const createApiKeysStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateApiKeysStepInput, import("@medusajs/framework/types").ApiKeyDTO[]>;
//# sourceMappingURL=create-api-keys.d.ts.map