import { HttpTypes, MedusaContainer, TaxCalculationContext } from "@medusajs/framework/types";
import { MedusaRequest } from "@medusajs/framework/http";
export type RequestWithContext<T> = MedusaRequest<T> & {
    taxContext: {
        taxLineContext?: TaxCalculationContext;
        taxInclusivityContext?: {
            automaticTaxes: boolean;
        };
    };
};
export declare const refetchProduct: (idOrFilter: string | object, scope: MedusaContainer, fields: string[]) => Promise<any>;
export declare const maybeApplyStockLocationId: (req: MedusaRequest, ctx: any) => Promise<any>;
export declare const wrapProductsWithTaxPrices: <T>(req: RequestWithContext<T>, products: HttpTypes.StoreProduct[]) => Promise<void>;
//# sourceMappingURL=helpers.d.ts.map