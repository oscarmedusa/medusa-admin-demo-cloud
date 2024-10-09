import { z } from "zod";
export declare const StoreGetOrderParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type StoreGetOrderParamsType = z.infer<typeof StoreGetOrderParams>;
export declare const StoreGetOrdersParams: any;
export type StoreGetOrdersParamsType = z.infer<typeof StoreGetOrdersParams>;
//# sourceMappingURL=validators.d.ts.map