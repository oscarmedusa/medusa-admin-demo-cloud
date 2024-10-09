import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteCustomersWorkflowInput = {
    ids: string[];
};
export declare const deleteCustomersWorkflowId = "delete-customers";
/**
 * This workflow deletes one or more customers.
 */
export declare const deleteCustomersWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteCustomersWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"customersDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-customers.d.ts.map