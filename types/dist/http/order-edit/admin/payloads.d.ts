export interface AdminInitiateOrderEditRequest {
    order_id: string;
    description?: string;
    internal_note?: string;
    metadata?: Record<string, unknown>;
}
export interface AdminAddOrderEditItems {
    items: {
        variant_id: string;
        quantity: number;
        unit_price?: number;
        internal_note?: string;
        allow_backorder?: boolean;
        metadata?: Record<string, unknown>;
    }[];
}
export interface AdminUpdateOrderEditItem {
    quantity?: number;
    internal_note?: string | null;
}
//# sourceMappingURL=payloads.d.ts.map