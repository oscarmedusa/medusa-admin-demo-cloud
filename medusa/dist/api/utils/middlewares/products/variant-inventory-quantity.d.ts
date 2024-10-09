import { MedusaRequest } from "@medusajs/framework/http";
export declare function getVariantInventoryItems({ req, variantIds, additionalFilters, asMap, }: {
    req: any;
    variantIds: any;
    additionalFilters?: {} | undefined;
    asMap?: boolean | undefined;
}): Promise<any>;
export declare function computeVariantInventoryQuantity({ variantInventoryItems, }: {
    variantInventoryItems: any;
}): Promise<number>;
export declare const wrapVariantsWithInventoryQuantity: (req: MedusaRequest, variants: {
    id: string;
    inventory_quantity?: number;
    manage_inventory?: boolean;
}[]) => Promise<void>;
//# sourceMappingURL=variant-inventory-quantity.d.ts.map