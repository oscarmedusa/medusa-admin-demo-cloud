export type SendNotificationsStepInput = {
    to: string;
    channel: string;
    template: string;
    data?: Record<string, unknown> | null;
    trigger_type?: string | null;
    resource_id?: string | null;
    resource_type?: string | null;
    receiver_id?: string | null;
    original_notification_id?: string | null;
    idempotency_key?: string | null;
}[];
export declare const sendNotificationsStepId = "send-notifications";
/**
 * This step sends one or more notifications.
 */
export declare const sendNotificationsStep: import("@medusajs/framework/workflows-sdk").StepFunction<SendNotificationsStepInput, import("@medusajs/framework/types").NotificationDTO[]>;
//# sourceMappingURL=send-notifications.d.ts.map