import { PropertyType } from "@medusajs/types";
declare const IsNullableModifier: unique symbol;
/**
 * Nullable modifier marks a schema node as nullable
 */
export declare class NullableModifier<T, Schema extends PropertyType<T>> implements PropertyType<T | null> {
    #private;
    [IsNullableModifier]: true;
    static isNullableModifier(obj: any): obj is NullableModifier<any, any>;
    /**
     * A type-only property to infer the JavScript data-type
     * of the schema property
     */
    $dataType: T | null;
    constructor(schema: Schema);
    /**
     * Returns the serialized metadata
     */
    parse(fieldName: string): import("@medusajs/types").PropertyMetadata;
}
export {};
//# sourceMappingURL=nullable.d.ts.map