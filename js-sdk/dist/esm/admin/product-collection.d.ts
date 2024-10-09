import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class ProductCollection {
    private client;
    constructor(client: Client);
    create(body: HttpTypes.AdminCreateCollection, query?: HttpTypes.AdminCollectionParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCollectionResponse>;
    update(id: string, body: HttpTypes.AdminUpdateCollection, query?: HttpTypes.AdminCollectionParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCollectionResponse>;
    list(queryParams?: HttpTypes.AdminCollectionListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCollectionListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminCollectionParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCollectionResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminCollectionDeleteResponse>;
    updateProducts(id: string, body: HttpTypes.AdminUpdateCollectionProducts, headers?: ClientHeaders): Promise<HttpTypes.AdminCollectionResponse>;
}
//# sourceMappingURL=product-collection.d.ts.map