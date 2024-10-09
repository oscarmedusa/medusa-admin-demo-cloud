import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class ProductTag {
    private client;
    constructor(client: Client);
    create(body: HttpTypes.AdminCreateProductTag, query?: HttpTypes.AdminProductTagParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTagResponse>;
    update(id: string, body: HttpTypes.AdminUpdateProductTag, query?: HttpTypes.AdminProductTagParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTagResponse>;
    list(query?: HttpTypes.AdminProductTagListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTagListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminProductTagParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTagResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminProductTagDeleteResponse>;
}
//# sourceMappingURL=product-tag.d.ts.map