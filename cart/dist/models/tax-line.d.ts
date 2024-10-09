import { DAL } from "@medusajs/framework/types";
import { OptionalProps } from "@mikro-orm/core";
type OptionalTaxLineProps = DAL.SoftDeletableModelDateColumns;
/**
 * As per the Mikro ORM docs, superclasses should use the abstract class definition
 * Source: https://mikro-orm.io/docs/inheritance-mapping
 */
export default abstract class TaxLine {
    [OptionalProps]?: OptionalTaxLineProps;
    id: string;
    description?: string | null;
    code: string;
    rate: number;
    provider_id?: string | null;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
}
export {};
//# sourceMappingURL=tax-line.d.ts.map