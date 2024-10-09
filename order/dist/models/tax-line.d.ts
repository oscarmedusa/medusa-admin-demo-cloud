import { BigNumberRawValue } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
/**
 * As per the Mikro ORM docs, superclasses should use the abstract class definition
 * Source: https://mikro-orm.io/docs/inheritance-mapping
 */
export default abstract class TaxLine {
    id: string;
    description?: string | null;
    tax_rate_id?: string | null;
    code: string;
    rate: BigNumber | number;
    raw_rate: BigNumberRawValue;
    provider_id?: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}
//# sourceMappingURL=tax-line.d.ts.map