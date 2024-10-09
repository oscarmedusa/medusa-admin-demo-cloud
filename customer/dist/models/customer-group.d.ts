import { DAL } from "@medusajs/framework/types";
import { Collection, OptionalProps } from "@mikro-orm/core";
import Customer from "./customer";
type OptionalGroupProps = DAL.SoftDeletableModelDateColumns;
export default class CustomerGroup {
    [OptionalProps]: OptionalGroupProps;
    id: string;
    name: string;
    customers: Collection<Customer, object>;
    metadata: Record<string, unknown> | null;
    created_by: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=customer-group.d.ts.map