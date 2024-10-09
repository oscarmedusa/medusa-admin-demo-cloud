export type NotifyOnFailureStepInput = {
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
export declare const notifyOnFailureStepId = "notify-on-failure";
/**
 * This step sends one or more notification when a workflow fails. This
 * step can be used in a workflow for its compensation function. When the workflow fails,
 * its compensation function is triggered to send the notification.
 */
export declare const notifyOnFailureStep: import("@medusajs/framework/workflows-sdk").StepFunction<NotifyOnFailureStepInput, undefined>;
//# sourceMappingURL=notify-on-failure.d.ts.map