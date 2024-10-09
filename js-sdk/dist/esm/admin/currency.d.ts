import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Currency {
    private client;
    constructor(client: Client);
    list(query?: HttpTypes.AdminCurrencyListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCurrencyListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminCurrencyParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCurrencyResponse>;
}
//# sourceMappingURL=currency.d.ts.map