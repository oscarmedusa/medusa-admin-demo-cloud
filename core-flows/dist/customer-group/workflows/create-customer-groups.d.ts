import { CustomerGroupDTO, CreateCustomerGroupDTO } from "@medusajs/framework/types";
export type CreateCustomerGroupsWorkflowInput = {
    customersData: CreateCustomerGroupDTO[];
};
export declare const createCustomerGroupsWorkflowId = "create-customer-groups";
/**
 * This workflow creates one or more customer groups.
 */
export declare const createCustomerGroupsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateCustomerGroupsWorkflowInput, CustomerGroupDTO[], []>;
//# sourceMappingURL=create-customer-groups.d.ts.map