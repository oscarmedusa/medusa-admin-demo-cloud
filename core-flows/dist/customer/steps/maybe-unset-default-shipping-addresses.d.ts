import { CreateCustomerAddressDTO, FilterableCustomerAddressProps, UpdateCustomerAddressDTO } from "@medusajs/framework/types";
export type MaybeUnsetDefaultShippingAddressesStepInput = {
    create?: CreateCustomerAddressDTO[];
    update?: {
        selector: FilterableCustomerAddressProps;
        update: UpdateCustomerAddressDTO;
    };
};
export declare const maybeUnsetDefaultShippingAddressesStepId = "maybe-unset-default-shipping-customer-addresses";
/**
 * This step unsets the `is_default_shipping` property of one or more addresses.
 */
export declare const maybeUnsetDefaultShippingAddressesStep: import("@medusajs/framework/workflows-sdk").StepFunction<MaybeUnsetDefaultShippingAddressesStepInput, undefined>;
//# sourceMappingURL=maybe-unset-default-shipping-addresses.d.ts.map