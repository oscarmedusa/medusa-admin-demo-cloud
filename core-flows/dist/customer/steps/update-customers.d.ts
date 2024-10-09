import { CustomerUpdatableFields, FilterableCustomerProps } from "@medusajs/framework/types";
export type UpdateCustomersStepInput = {
    selector: FilterableCustomerProps;
    update: CustomerUpdatableFields;
};
export declare const updateCustomersStepId = "update-customer";
/**
 * This step updates one or more customers.
 */
export declare const updateCustomersStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateCustomersStepInput, import("@medusajs/framework/types").CustomerDTO[]>;
//# sourceMappingURL=update-customers.d.ts.map