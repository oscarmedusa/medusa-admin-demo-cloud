import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Campaign {
    private client;
    constructor(client: Client);
    retrieve(id: string, query?: HttpTypes.AdminGetCampaignParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCampaignResponse>;
    list(query?: HttpTypes.AdminGetCampaignsParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCampaignListResponse>;
    create(payload: HttpTypes.AdminCreateCampaign, headers?: ClientHeaders): Promise<HttpTypes.AdminCampaignResponse>;
    update(id: string, payload: HttpTypes.AdminUpdateCampaign, headers?: ClientHeaders): Promise<HttpTypes.AdminCampaignResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.DeleteResponse<"campaign">>;
    batchPromotions(id: string, payload: HttpTypes.AdminBatchLink, headers?: ClientHeaders): Promise<HttpTypes.AdminCampaignResponse>;
}
//# sourceMappingURL=campaign.d.ts.map