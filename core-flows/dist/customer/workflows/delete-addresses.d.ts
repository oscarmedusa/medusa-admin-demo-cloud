import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type DeleteCustomerAddressesWorkflowInput = {
    ids: string[];
};
export declare const deleteCustomerAddressesWorkflowId = "delete-customer-addresses";
/**
 * This workflow deletes one or more customer addresses.
 */
export declare const deleteCustomerAddressesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<DeleteCustomerAddressesWorkflowInput, never, import("@medusajs/framework/workflows-sdk").Hook<"addressesDeleted", {
    ids: (string[] | WorkflowData<string[]>) & string[];
}>[]>;
//# sourceMappingURL=delete-addresses.d.ts.map