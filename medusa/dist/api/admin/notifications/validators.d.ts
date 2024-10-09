import { z } from "zod";
export type AdminGetNotificationParamsType = z.infer<typeof AdminGetNotificationParams>;
export declare const AdminGetNotificationParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetNotificationsParamsType = z.infer<typeof AdminGetNotificationsParams>;
export declare const AdminGetNotificationsParams: any;
//# sourceMappingURL=validators.d.ts.map