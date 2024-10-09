import { BigNumberInput, CreateOrderAdjustmentDTO, CreateOrderLineItemTaxLineDTO } from "@medusajs/framework/types";
interface Input {
    quantity: BigNumberInput;
    metadata?: Record<string, any>;
    unitPrice: BigNumberInput;
    isTaxInclusive?: boolean;
    taxLines?: CreateOrderLineItemTaxLineDTO[];
    adjustments?: CreateOrderAdjustmentDTO[];
    variant: {
        title: string;
        sku?: string;
        barcode?: string;
    };
}
interface Output {
    quantity: BigNumberInput;
    title: string;
    variant_sku?: string;
    variant_barcode?: string;
    variant_title?: string;
    unit_price: BigNumberInput;
    is_tax_inclusive: boolean;
    metadata?: Record<string, any>;
}
export declare function prepareCustomLineItemData(data: Input): Output;
export {};
//# sourceMappingURL=prepare-custom-line-item-data.d.ts.map