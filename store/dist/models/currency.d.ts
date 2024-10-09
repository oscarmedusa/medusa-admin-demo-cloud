import Store from "./store";
export default class StoreCurrency {
    id: string;
    currency_code: string;
    is_default?: boolean;
    store_id: string | null;
    store: Store | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=currency.d.ts.map