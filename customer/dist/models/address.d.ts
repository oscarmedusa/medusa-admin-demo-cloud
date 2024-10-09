import { DAL } from "@medusajs/framework/types";
import { OptionalProps } from "@mikro-orm/core";
import Customer from "./customer";
type OptionalAddressProps = DAL.ModelDateColumns;
export default class CustomerAddress {
    [OptionalProps]: OptionalAddressProps;
    id: string;
    address_name: string | null;
    is_default_shipping: boolean;
    is_default_billing: boolean;
    customer_id: string;
    customer: Customer;
    company: string | null;
    first_name: string | null;
    last_name: string | null;
    address_1: string | null;
    address_2: string | null;
    city: string | null;
    country_code: string | null;
    province: string | null;
    postal_code: string | null;
    phone: string | null;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=address.d.ts.map