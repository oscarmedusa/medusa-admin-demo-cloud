import { HttpTypes, SelectParams } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class PaymentCollection {
    private client;
    constructor(client: Client);
    list(query?: HttpTypes.AdminPaymentCollectionFilters, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentCollectionsResponse>;
    retrieve(id: string, query?: HttpTypes.AdminPaymentCollectionFilters, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentCollectionResponse>;
    create(body: HttpTypes.AdminCreatePaymentCollection, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentCollectionResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminDeletePaymentCollectionResponse>;
    markAsPaid(id: string, body: HttpTypes.AdminMarkPaymentCollectionAsPaid, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentCollectionResponse>;
}
//# sourceMappingURL=payment-collection.d.ts.map