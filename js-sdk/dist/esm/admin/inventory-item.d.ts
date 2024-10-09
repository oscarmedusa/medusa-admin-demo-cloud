import { HttpTypes, SelectParams } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class InventoryItem {
    private client;
    constructor(client: Client);
    create(body: HttpTypes.AdminCreateInventoryItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryItemResponse>;
    update(id: string, body: HttpTypes.AdminUpdateInventoryItem, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryItemResponse>;
    list(query?: HttpTypes.AdminInventoryItemParams, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryItemListResponse>;
    retrieve(id: string, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryItemResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryItemDeleteResponse>;
    listLevels(id: string, query?: HttpTypes.AdminInventoryLevelFilters, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryLevelListResponse>;
    updateLevel(id: string, locationId: string, body: HttpTypes.AdminUpdateInventoryLevel, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryItemResponse>;
    deleteLevel(id: string, locationId: string, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryItemDeleteResponse>;
    batchUpdateLevels(id: string, body: HttpTypes.AdminBatchUpdateInventoryLevelLocation, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminInventoryItemResponse>;
}
//# sourceMappingURL=inventory-item.d.ts.map