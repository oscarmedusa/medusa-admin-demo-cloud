import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class PriceList {
    private client;
    constructor(client: Client);
    retrieve(id: string, query?: HttpTypes.AdminPriceListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPriceListResponse>;
    list(query?: HttpTypes.AdminPriceListListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPriceListListResponse>;
    create(body: HttpTypes.AdminCreatePriceList, query?: HttpTypes.AdminPriceListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPriceListResponse>;
    update(id: string, body: HttpTypes.AdminUpdatePriceList, query?: HttpTypes.AdminPriceListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPriceListResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminPriceListDeleteResponse>;
    batchPrices(id: string, body: HttpTypes.AdminBatchPriceListPrice, query?: HttpTypes.AdminPriceListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPriceListResponse>;
    linkProducts(id: string, body: HttpTypes.AdminLinkPriceListProducts, query?: HttpTypes.AdminPriceListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPriceListResponse>;
}
//# sourceMappingURL=price-list.d.ts.map