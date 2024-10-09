import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class ProductCategory {
    private client;
    constructor(client: Client);
    create(body: HttpTypes.AdminCreateProductCategory, query?: HttpTypes.AdminProductCategoryParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductCategoryResponse>;
    update(id: string, body: HttpTypes.AdminUpdateProductCategory, query?: HttpTypes.AdminProductCategoryParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductCategoryResponse>;
    list(query?: HttpTypes.AdminProductCategoryListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductCategoryListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminProductCategoryParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductCategoryResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminProductCategoryDeleteResponse>;
    updateProducts(id: string, body: HttpTypes.AdminUpdateProductCategoryProducts, query?: HttpTypes.AdminProductCategoryParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductCategoryResponse>;
}
//# sourceMappingURL=product-category.d.ts.map