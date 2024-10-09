import { CustomerGroupUpdatableFields, FilterableCustomerGroupProps } from "@medusajs/framework/types";
export type UpdateCustomerGroupStepInput = {
    selector: FilterableCustomerGroupProps;
    update: CustomerGroupUpdatableFields;
};
export declare const updateCustomerGroupStepId = "update-customer-groups";
/**
 * This step updates one or more customer groups.
 */
export declare const updateCustomerGroupsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateCustomerGroupStepInput, import("@medusajs/framework/types").CustomerGroupDTO[]>;
//# sourceMappingURL=update-customer-groups.d.ts.map