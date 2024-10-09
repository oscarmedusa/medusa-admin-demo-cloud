import { BaseProductListParams, BaseProductOptionParams, BaseProductVariantParams } from "../common";
export interface StoreProductOptionParams extends BaseProductOptionParams {
}
export interface StoreProductVariantParams extends BaseProductVariantParams {
}
export interface StoreProductParams extends Omit<BaseProductListParams, "tags" | "status" | "categories"> {
    tag_id?: string | string[];
    region_id?: string;
    currency_code?: string;
    variants?: Pick<StoreProductVariantParams, "options">;
    province?: string;
}
//# sourceMappingURL=queries.d.ts.map