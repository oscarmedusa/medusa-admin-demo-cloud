import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class ApiKey {
    private client;
    constructor(client: Client);
    list(queryParams?: HttpTypes.AdminGetApiKeysParams, headers?: ClientHeaders): Promise<HttpTypes.PaginatedResponse<HttpTypes.AdminApiKeyListResponse>>;
    create(body: HttpTypes.AdminCreateApiKey, query?: HttpTypes.AdminGetApiKeysParams, headers?: ClientHeaders): Promise<HttpTypes.AdminApiKeyResponse>;
    revoke(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminApiKeyResponse>;
    retrieve(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminApiKeyResponse>;
    update(id: string, body: HttpTypes.AdminUpdateApiKey, query?: HttpTypes.AdminGetApiKeysParams, headers?: ClientHeaders): Promise<HttpTypes.AdminApiKeyResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminApiKeyDeleteResponse>;
    batchSalesChannels(id: string, body: HttpTypes.AdminBatchLink, headers?: ClientHeaders): Promise<HttpTypes.AdminApiKeyResponse>;
}
//# sourceMappingURL=api-key.d.ts.map