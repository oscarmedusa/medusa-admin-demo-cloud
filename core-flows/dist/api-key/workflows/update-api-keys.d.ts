import { ApiKeyDTO, FilterableApiKeyProps, UpdateApiKeyDTO } from "@medusajs/framework/types";
export type UpdateApiKeysWorkflowInput = {
    selector: FilterableApiKeyProps;
    update: UpdateApiKeyDTO;
};
export declare const updateApiKeysWorkflowId = "update-api-keys";
/**
 * This workflow creates one or more API keys.
 */
export declare const updateApiKeysWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateApiKeysWorkflowInput, ApiKeyDTO[], []>;
//# sourceMappingURL=update-api-keys.d.ts.map