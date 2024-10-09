export default class RefundReason {
    id: string;
    label: string;
    description: string | null;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=refund-reason.d.ts.map