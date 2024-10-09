import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Claim {
    private client;
    constructor(client: Client);
    list(query?: HttpTypes.AdminClaimListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminClaimParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    create(body: HttpTypes.AdminCreateClaim, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    cancel(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    delete(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimDeleteResponse>;
    addItems(id: string, body: HttpTypes.AdminAddClaimItems, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    updateItem(id: string, actionId: string, body: HttpTypes.AdminUpdateClaimItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    removeItem(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminReturnResponse>;
    addInboundItems(id: string, body: HttpTypes.AdminAddClaimInboundItems, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    updateInboundItem(id: string, actionId: string, body: HttpTypes.AdminUpdateClaimInboundItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    removeInboundItem(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    addInboundShipping(id: string, body: HttpTypes.AdminClaimAddInboundShipping, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    updateInboundShipping(id: string, actionId: string, body: HttpTypes.AdminClaimUpdateInboundShipping, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    deleteInboundShipping(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    addOutboundItems(id: string, body: HttpTypes.AdminAddClaimOutboundItems, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    updateOutboundItem(id: string, actionId: string, body: HttpTypes.AdminUpdateClaimOutboundItem, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    removeOutboundItem(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    addOutboundShipping(id: string, body: HttpTypes.AdminClaimAddOutboundShipping, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    updateOutboundShipping(id: string, actionId: string, body: HttpTypes.AdminClaimUpdateOutboundShipping, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    deleteOutboundShipping(id: string, actionId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    request(id: string, body: HttpTypes.AdminRequestClaim, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
    cancelRequest(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminClaimResponse>;
}
//# sourceMappingURL=claim.d.ts.map