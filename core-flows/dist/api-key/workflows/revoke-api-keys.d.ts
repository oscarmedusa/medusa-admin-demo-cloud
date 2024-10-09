import { ApiKeyDTO, FilterableApiKeyProps, RevokeApiKeyDTO } from "@medusajs/framework/types";
export type RevokeApiKeysWorkflowInput = {
    selector: FilterableApiKeyProps;
    revoke: RevokeApiKeyDTO;
};
export declare const revokeApiKeysWorkflowId = "revoke-api-keys";
/**
 * This workflow revokes one or more API keys.
 */
export declare const revokeApiKeysWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<RevokeApiKeysWorkflowInput, ApiKeyDTO[], []>;
//# sourceMappingURL=revoke-api-keys.d.ts.map