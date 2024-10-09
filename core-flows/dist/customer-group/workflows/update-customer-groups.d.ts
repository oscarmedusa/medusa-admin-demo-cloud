import { CustomerGroupDTO, FilterableCustomerGroupProps, CustomerGroupUpdatableFields } from "@medusajs/framework/types";
export type UpdateCustomerGroupsWorkflowInput = {
    selector: FilterableCustomerGroupProps;
    update: CustomerGroupUpdatableFields;
};
export declare const updateCustomerGroupsWorkflowId = "update-customer-groups";
/**
 * This workflow updates one or more customer groups.
 */
export declare const updateCustomerGroupsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateCustomerGroupsWorkflowInput, CustomerGroupDTO[], []>;
//# sourceMappingURL=update-customer-groups.d.ts.map