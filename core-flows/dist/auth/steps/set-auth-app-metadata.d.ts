export type SetAuthAppMetadataStepInput = {
    authIdentityId: string;
    actorType: string;
    value: string | null;
};
export declare const setAuthAppMetadataStepId = "set-auth-app-metadata";
/**
 * This step sets the `app_metadata` property of an auth identity.
 */
export declare const setAuthAppMetadataStep: import("@medusajs/framework/workflows-sdk").StepFunction<SetAuthAppMetadataStepInput, import("@medusajs/framework/types").AuthIdentityDTO>;
//# sourceMappingURL=set-auth-app-metadata.d.ts.map