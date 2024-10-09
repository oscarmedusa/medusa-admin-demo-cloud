import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class OrderEdit {
    private client;
    constructor(client: Client);
    initiateRequest(body: HttpTypes.AdminInitiateOrderEditRequest, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    request(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    confirm(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    cancelRequest(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditDeleteResponse>;
    addItems(id: string, body: HttpTypes.AdminAddOrderEditItems, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    updateOriginalItem(id: string, itemId: string, body: HttpTypes.AdminUpdateOrderEditItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    updateAddedItem(id: string, actionId: string, body: HttpTypes.AdminUpdateOrderEditItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
    removeAddedItem(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderEditPreviewResponse>;
}
//# sourceMappingURL=order-edit.d.ts.map