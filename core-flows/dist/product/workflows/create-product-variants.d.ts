import { AdditionalData, PricingTypes, ProductTypes } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
/**
 * @privateRemarks
 * TODO: Create separate typings for the workflow input
 */
export type CreateProductVariantsWorkflowInput = {
    product_variants: (ProductTypes.CreateProductVariantDTO & {
        prices?: PricingTypes.CreateMoneyAmountDTO[];
    } & {
        inventory_items?: {
            inventory_item_id: string;
            required_quantity?: number;
        }[];
    })[];
} & AdditionalData;
export declare const createProductVariantsWorkflowId = "create-product-variants";
/**
 * This workflow creates one or more product variants.
 */
export declare const createProductVariantsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateProductVariantsWorkflowInput, {
    prices: PricingTypes.MoneyAmountDTO[];
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
}[], import("@medusajs/framework/workflows-sdk").Hook<"productVariantsCreated", {
    product_variants: WorkflowData<{
        prices: PricingTypes.MoneyAmountDTO[];
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
//# sourceMappingURL=create-product-variants.d.ts.map