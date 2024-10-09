export type RemoveCustomerAccountWorkflowInput = {
    customerId: string;
};
export declare const removeCustomerAccountWorkflowId = "remove-customer-account";
/**
 * This workflow deletes a user and remove the association in the auth identity.
 */
export declare const removeCustomerAccountWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<RemoveCustomerAccountWorkflowInput, string, []>;
//# sourceMappingURL=remove-customer-account.d.ts.map