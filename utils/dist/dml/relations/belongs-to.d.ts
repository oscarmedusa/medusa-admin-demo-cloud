import { BaseRelationship } from "./base";
import { RelationNullableModifier } from "./nullable";
export declare class BelongsTo<T> extends BaseRelationship<T> {
    type: "belongsTo";
    static isBelongsTo<T>(relationship: any): relationship is BelongsTo<T>;
    /**
     * Apply nullable modifier on the schema
     */
    nullable(): RelationNullableModifier<T, BelongsTo<T>>;
}
//# sourceMappingURL=belongs-to.d.ts.map