import { DAL } from "@medusajs/framework/types";
import { OptionalProps } from "@mikro-orm/core";
type OptionalAddressProps = DAL.SoftDeletableModelDateColumns;
export default class Address {
    [OptionalProps]: OptionalAddressProps;
    id: string;
    customer_id: string | null;
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
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=address.d.ts.map