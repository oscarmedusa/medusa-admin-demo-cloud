export interface StoreCartShippingOption {
    id: string;
    name: string;
    price_type: string;
    service_zone_id: string;
    shipping_profile_id: string;
    provider_id: string;
    data: Record<string, unknown> | null;
    type: {
        id: string;
        label: string;
        description: string;
        code: string;
    };
    provider: {
        id: string;
        is_enabled: boolean;
    };
    amount: number;
}
//# sourceMappingURL=index.d.ts.map