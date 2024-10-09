import { DAL } from "@medusajs/framework/types";
import { Collection, OptionalProps } from "@mikro-orm/core";
import CustomerAddress from "./address";
import CustomerGroup from "./customer-group";
type OptionalCustomerProps = "groups" | "addresses" | DAL.SoftDeletableModelDateColumns;
export default class Customer {
    [OptionalProps]?: OptionalCustomerProps;
    id: string;
    company_name: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone: string | null;
    has_account: boolean;
    metadata: Record<string, unknown> | null;
    groups: Collection<CustomerGroup, object>;
    addresses: Collection<CustomerAddress, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    created_by: string | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=customer.d.ts.map