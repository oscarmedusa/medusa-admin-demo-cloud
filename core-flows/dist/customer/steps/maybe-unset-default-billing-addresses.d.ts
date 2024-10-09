import { CreateCustomerAddressDTO, FilterableCustomerAddressProps, UpdateCustomerAddressDTO } from "@medusajs/framework/types";
export type MaybeUnsetDefaultBillingAddressStepInput = {
    create?: CreateCustomerAddressDTO[];
    update?: {
        selector: FilterableCustomerAddressProps;
        update: UpdateCustomerAddressDTO;
    };
};
export declare const maybeUnsetDefaultBillingAddressesStepId = "maybe-unset-default-billing-customer-addresses";
/**
 * This step unsets the `is_default_billing` property of one or more addresses.
 */
export declare const maybeUnsetDefaultBillingAddressesStep: import("@medusajs/framework/workflows-sdk").StepFunction<MaybeUnsetDefaultBillingAddressStepInput, undefined>;
//# sourceMappingURL=maybe-unset-default-billing-addresses.d.ts.map