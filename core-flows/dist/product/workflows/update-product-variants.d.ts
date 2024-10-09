import { AdditionalData, PricingTypes, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdateProductVariantsWorkflowInput = {
    selector: ProductTypes.FilterableProductVariantProps;
    update: ProductTypes.UpdateProductVariantDTO & {
        prices?: Partial<PricingTypes.CreateMoneyAmountDTO>[];
    };
} | {
    product_variants: (ProductTypes.UpsertProductVariantDTO & {
        prices?: Partial<PricingTypes.CreateMoneyAmountDTO>[];
    })[];
};
export declare const updateProductVariantsWorkflowId = "update-product-variants";
/**
 * This workflow updates one or more product variants.
 */
export declare const updateProductVariantsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateProductVariantsWorkflowInput & AdditionalData, {
    price_set: PricingTypes.PriceSetDTO | undefined;
    id: string;
    title: string;
    sku: string | null;
    barcode: string | null;
    ean: string | null;
    upc: string | null;
    allow_backorder: boolean;
    manage_inventory: boolean;
    requires_shipping: boolean;
    hs_code: string | null;
    origin_country: string | null;
    mid_code: string | null;
    material: string | null;
    weight: number | null;
    length: number | null;
    height: number | null;
    width: number | null;
    options: ProductTypes.ProductOptionValueDTO[];
    metadata: Record<string, unknown> | null;
    product?: ProductTypes.ProductDTO | null;
    product_id: string | null;
    variant_rank?: number | null;
    created_at: string | Date;
    updated_at: string | Date;
    deleted_at: string | Date;
}[], import("@medusajs/framework/workflows-sdk").Hook<"productVariantsUpdated", {
    product_variants: WorkflowData<{
        price_set: PricingTypes.PriceSetDTO | undefined;
        id: string;
        title: string;
        sku: string | null;
        barcode: string | null;
        ean: string | null;
        upc: string | null;
        allow_backorder: boolean;
        manage_inventory: boolean;
        requires_shipping: boolean;
        hs_code: string | null;
        origin_country: string | null;
        mid_code: string | null;
        material: string | null;
        weight: number | null;
        length: number | null;
        height: number | null;
        width: number | null;
        options: ProductTypes.ProductOptionValueDTO[];
        metadata: Record<string, unknown> | null;
        product?: ProductTypes.ProductDTO | null;
        product_id: string | null;
        variant_rank?: number | null;
        created_at: string | Date;
        updated_at: string | Date;
        deleted_at: string | Date;
    }[]>;
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=update-product-variants.d.ts.map