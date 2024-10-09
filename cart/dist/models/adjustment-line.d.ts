import { DAL } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { OptionalProps } from "@mikro-orm/core";
type OptionalAdjustmentLineProps = DAL.SoftDeletableModelDateColumns;
/**
 * As per the Mikro ORM docs, superclasses should use the abstract class definition
 * Source: https://mikro-orm.io/docs/inheritance-mapping
 */
export default abstract class AdjustmentLine {
    [OptionalProps]: OptionalAdjustmentLineProps;
    id: string;
    description: string | null;
    code: string | null;
    amount: BigNumber | number;
    raw_amount: Record<string, unknown>;
    provider_id: string | null;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
}
export {};
//# sourceMappingURL=adjustment-line.d.ts.map