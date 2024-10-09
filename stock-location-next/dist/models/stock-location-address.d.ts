export declare class StockLocationAddress {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    address_1: string;
    address_2: string | null;
    company: string | null;
    city: string | null;
    country_code: string;
    phone: string | null;
    province: string | null;
    postal_code: string | null;
    metadata: Record<string, unknown> | null;
    beforeCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=stock-location-address.d.ts.map