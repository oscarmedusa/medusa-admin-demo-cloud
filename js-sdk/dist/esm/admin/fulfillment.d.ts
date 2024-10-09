import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Fulfillment {
    private client;
    constructor(client: Client);
    create(body: HttpTypes.AdminCreateFulfillment, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminFulfillmentResponse>;
    cancel(id: string, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminFulfillmentResponse>;
    createShipment(id: string, body: HttpTypes.AdminCreateFulfillmentShipment, query?: HttpTypes.SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminFulfillmentResponse>;
}
//# sourceMappingURL=fulfillment.d.ts.map