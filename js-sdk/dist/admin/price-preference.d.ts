import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class PricePreference {
    private client;
    constructor(client: Client);
    retrieve(id: string, query?: HttpTypes.AdminPricePreferenceParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPricePreferenceResponse>;
    list(query?: HttpTypes.AdminPricePreferenceListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPricePreferenceListResponse>;
    create(body: HttpTypes.AdminCreatePricePreference, query?: HttpTypes.AdminPricePreferenceParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPricePreferenceResponse>;
    update(id: string, body: HttpTypes.AdminUpdatePricePreference, query?: HttpTypes.AdminPricePreferenceParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPricePreferenceResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminPricePreferenceDeleteResponse>;
}
//# sourceMappingURL=price-preference.d.ts.map