import { ApiKeyDTO, CreateApiKeyDTO } from "@medusajs/framework/types";
export type CreateApiKeysWorkflowInput = {
    api_keys: CreateApiKeyDTO[];
};
export declare const createApiKeysWorkflowId = "create-api-keys";
/**
 * This workflow creates one or more API keys.
 */
export declare const createApiKeysWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateApiKeysWorkflowInput, ApiKeyDTO[], []>;
//# sourceMappingURL=create-api-keys.d.ts.map