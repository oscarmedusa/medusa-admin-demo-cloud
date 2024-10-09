import { FilterableCustomerAddressProps, UpdateCustomerAddressDTO } from "@medusajs/framework/types";
export type UpdateCustomerAddresseStepInput = {
    selector: FilterableCustomerAddressProps;
    update: UpdateCustomerAddressDTO;
};
export declare const updateCustomerAddresseStepId = "update-customer-addresses";
/**
 * This step updates one or more customer addresses.
 */
export declare const updateCustomerAddressesStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateCustomerAddresseStepInput, import("@medusajs/framework/types").CustomerAddressDTO[]>;
//# sourceMappingURL=update-addresses.d.ts.map