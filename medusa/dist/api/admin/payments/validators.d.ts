import { z } from "zod";
export type AdminGetPaymentParamsType = z.infer<typeof AdminGetPaymentParams>;
export declare const AdminGetPaymentParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetPaymentsParamsType = z.infer<typeof AdminGetPaymentsParams>;
export declare const AdminGetPaymentsParams: any;
export type AdminGetPaymentProvidersParamsType = z.infer<typeof AdminGetPaymentProvidersParams>;
export declare const AdminGetPaymentProvidersParams: any;
export type AdminCreatePaymentCaptureType = z.infer<typeof AdminCreatePaymentCapture>;
export declare const AdminCreatePaymentCapture: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    amount?: number | undefined;
}, {
    amount?: number | undefined;
}>;
export type AdminCreatePaymentRefundType = z.infer<typeof AdminCreatePaymentRefund>;
export declare const AdminCreatePaymentRefund: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    refund_reason_id: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    amount?: number | undefined;
    refund_reason_id?: string | undefined;
    note?: string | undefined;
}, {
    amount?: number | undefined;
    refund_reason_id?: string | undefined;
    note?: string | undefined;
}>;
export type AdminCreatePaymentRefundReasonType = z.infer<typeof AdminCreatePaymentRefundReason>;
export declare const AdminCreatePaymentRefundReason: z.ZodObject<{
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    label: string;
    description?: string | undefined;
}, {
    label: string;
    description?: string | undefined;
}>;
//# sourceMappingURL=validators.d.ts.map