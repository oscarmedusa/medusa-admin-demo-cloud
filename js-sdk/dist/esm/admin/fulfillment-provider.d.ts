import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class FulfillmentProvider {
    private client;
    constructor(client: Client);
    list(query?: HttpTypes.AdminFulfillmentProviderListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminFulfillmentProviderListResponse>;
}
//# sourceMappingURL=fulfillment-provider.d.ts.map