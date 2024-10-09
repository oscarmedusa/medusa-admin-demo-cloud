import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class FulfillmentSet {
    private client;
    constructor(client: Client);
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminFulfillmentSetDeleteResponse>;
    createServiceZone(id: string, body: HttpTypes.AdminCreateFulfillmentSetServiceZone, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminFulfillmentSetResponse>;
    retrieveServiceZone(fulfillmentSetId: string, serviceZoneId: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminServiceZoneResponse>;
    updateServiceZone(fulfillmentSetId: string, serviceZoneId: string, body: HttpTypes.AdminUpdateFulfillmentSetServiceZone, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminFulfillmentSetResponse>;
    deleteServiceZone(fulfillmentSetId: string, serviceZoneId: string, headers?: ClientHeaders): Promise<HttpTypes.AdminServiceZoneDeleteResponse>;
}
//# sourceMappingURL=fulfillment-set.d.ts.map