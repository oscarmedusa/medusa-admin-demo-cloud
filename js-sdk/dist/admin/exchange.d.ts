import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Exchange {
    private client;
    constructor(client: Client);
    list(query?: HttpTypes.AdminExchangeListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminExchangeParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    create(body: HttpTypes.AdminCreateExchange, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    cancel(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    delete(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeDeleteResponse>;
    addItems(id: string, body: HttpTypes.AdminAddExchangeItems, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    updateItem(id: string, actionId: string, body: HttpTypes.AdminUpdateExchangeItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    removeItem(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminReturnResponse>;
    addInboundItems(id: string, body: HttpTypes.AdminAddExchangeInboundItems, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    updateInboundItem(id: string, actionId: string, body: HttpTypes.AdminUpdateExchangeInboundItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    removeInboundItem(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    addInboundShipping(id: string, body: HttpTypes.AdminExchangeAddInboundShipping, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    updateInboundShipping(id: string, actionId: string, body: HttpTypes.AdminExchangeUpdateInboundShipping, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    deleteInboundShipping(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    addOutboundItems(id: string, body: HttpTypes.AdminAddExchangeOutboundItems, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    updateOutboundItem(id: string, actionId: string, body: HttpTypes.AdminUpdateExchangeOutboundItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    removeOutboundItem(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    addOutboundShipping(id: string, body: HttpTypes.AdminExchangeAddOutboundShipping, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    updateOutboundShipping(id: string, actionId: string, body: HttpTypes.AdminExchangeUpdateOutboundShipping, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    deleteOutboundShipping(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    request(id: string, body: HttpTypes.AdminRequestExchange, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
    cancelRequest(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExchangeResponse>;
}
//# sourceMappingURL=exchange.d.ts.map