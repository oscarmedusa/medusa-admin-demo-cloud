import { FilterableApiKeyProps, RevokeApiKeyDTO } from "@medusajs/framework/types";
export type RevokeApiKeysStepInput = {
    selector: FilterableApiKeyProps;
    revoke: RevokeApiKeyDTO;
};
export declare const revokeApiKeysStepId = "revoke-api-keys";
/**
 * This step revokes one or more API keys.
 */
export declare const revokeApiKeysStep: import("@medusajs/framework/workflows-sdk").StepFunction<RevokeApiKeysStepInput, import("@medusajs/framework/types").ApiKeyDTO[]>;
//# sourceMappingURL=revoke-api-keys.d.ts.map