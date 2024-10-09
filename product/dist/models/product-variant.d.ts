import { Collection } from "@mikro-orm/core";
import { Product, ProductOptionValue } from ".";
declare class ProductVariant {
    id: string;
    title: string;
    sku?: string | null;
    barcode?: string | null;
    ean?: string | null;
    upc?: string | null;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    hs_code?: string | null;
    origin_country?: string | null;
    mid_code?: string | null;
    material?: string | null;
    weight?: number | null;
    length?: number | null;
    height?: number | null;
    width?: number | null;
    metadata?: Record<string, unknown> | null;
    variant_rank?: number | null;
    product_id: string | null;
    product: Product | null;
    options: Collection<ProductOptionValue, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    onInit(): void;
}
export default ProductVariant;
//# sourceMappingURL=product-variant.d.ts.map