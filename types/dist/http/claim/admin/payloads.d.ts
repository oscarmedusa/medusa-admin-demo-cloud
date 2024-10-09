declare enum ClaimReason {
    MISSING_ITEM = "missing_item",
    WRONG_ITEM = "wrong_item",
    PRODUCTION_FAILURE = "production_failure",
    OTHER = "other"
}
interface AdminClaimAddItems {
    items: {
        id: string;
        quantity: number;
        reason?: ClaimReason;
        description?: string;
        internal_note?: string;
    }[];
}
interface AdminClaimUpdateItem {
    quantity?: number;
    reason_id?: string | null;
    description?: string;
    internal_note?: string | null;
}
interface AdminClaimAddShippingMethod {
    shipping_option_id: string;
    custom_amount?: number;
    description?: string;
    internal_note?: string;
    metadata?: Record<string, unknown> | null;
}
interface AdminClaimUpdateShippingMethod {
    custom_amount?: number | null;
    internal_note?: string;
    metadata?: Record<string, unknown> | null;
}
export interface AdminCreateClaim {
    type: "refund" | "replace";
    order_id: string;
    description?: string;
    internal_note?: string;
    metadata?: Record<string, unknown> | null;
}
export interface AdminAddClaimItems extends AdminClaimAddItems {
}
export interface AdminUpdateClaimItem extends AdminClaimUpdateItem {
}
export interface AdminAddClaimInboundItems extends AdminClaimAddItems {
}
export interface AdminUpdateClaimInboundItem extends AdminClaimUpdateItem {
}
export interface AdminAddClaimOutboundItems extends AdminClaimAddItems {
}
export interface AdminUpdateClaimOutboundItem extends AdminClaimUpdateItem {
}
export interface AdminClaimAddInboundShipping extends AdminClaimAddShippingMethod {
}
export interface AdminClaimUpdateInboundShipping extends AdminClaimUpdateShippingMethod {
}
export interface AdminClaimAddOutboundShipping extends AdminClaimAddShippingMethod {
}
export interface AdminClaimUpdateOutboundShipping extends AdminClaimUpdateShippingMethod {
}
export interface AdminRequestClaim {
}
export interface AdminCancelClaim {
    no_notification?: boolean;
}
export {};
//# sourceMappingURL=payloads.d.ts.map