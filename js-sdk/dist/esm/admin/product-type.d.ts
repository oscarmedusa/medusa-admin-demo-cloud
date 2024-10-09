import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class ProductType {
    private client;
    constructor(client: Client);
    create(body: HttpTypes.AdminCreateProductType, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTypeResponse>;
    update(id: string, body: HttpTypes.AdminUpdateProductType, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTypeResponse>;
    list(query?: HttpTypes.AdminProductTypeListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTypeListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminProductTypeParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTypeResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTypeDeleteResponse>;
}
//# sourceMappingURL=product-type.d.ts.map