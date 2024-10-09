import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class ProductVariant {
    private client;
    constructor(client: Client);
    list(queryParams?: HttpTypes.AdminProductVariantParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductVariantListResponse>;
}
//# sourceMappingURL=product-variant.d.ts.map