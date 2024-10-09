import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Customer from "./customer";
import CustomerGroup from "./customer-group";
type OptionalGroupProps = "customer_group" | "customer" | DAL.ModelDateColumns;
export default class CustomerGroupCustomer {
    [OptionalProps]: OptionalGroupProps;
    id: string;
    customer_id: string;
    customer_group_id: string;
    customer: Rel<Customer>;
    customer_group: Rel<CustomerGroup>;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    created_by: string | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=customer-group-customer.d.ts.map