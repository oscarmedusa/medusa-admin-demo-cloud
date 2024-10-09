declare const _default: import("@medusajs/framework/utils").DmlEntity<{
    code: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").TextProperty>;
    symbol: import("@medusajs/framework/utils").TextProperty;
    symbol_native: import("@medusajs/framework/utils").TextProperty;
    name: import("@medusajs/framework/utils").TextProperty;
    decimal_digits: import("@medusajs/framework/utils").NumberProperty;
    rounding: import("@medusajs/framework/utils").BigNumberProperty;
} & {
    code: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").TextProperty>;
    symbol: import("@medusajs/framework/utils").TextProperty;
    symbol_native: import("@medusajs/framework/utils").TextProperty;
    name: import("@medusajs/framework/utils").TextProperty;
    decimal_digits: import("@medusajs/framework/utils").NumberProperty;
    rounding: import("@medusajs/framework/utils").BigNumberProperty;
} & {
    raw_rounding: import("@medusajs/framework/utils").JSONProperty;
} & import("@medusajs/framework/utils").DMLSchemaDefaults, "currency">;
export default _default;
//# sourceMappingURL=currency.d.ts.map