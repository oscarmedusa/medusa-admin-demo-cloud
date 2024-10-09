export type RemoveUserAccountWorkflowInput = {
    userId: string;
};
export declare const removeUserAccountWorkflowId = "remove-user-account";
/**
 * This workflow deletes a user and remove the association in the auth identity.
 */
export declare const removeUserAccountWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<RemoveUserAccountWorkflowInput, string, []>;
//# sourceMappingURL=remove-user-account.d.ts.map