import { FindParams, HttpTypes, SelectParams } from "@medusajs/types";
import { AdminOrderChangesResponse } from "@medusajs/types/src/http/order/admin/responses";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Order {
    private client;
    constructor(client: Client);
    retrieve(id: string, query?: SelectParams, headers?: ClientHeaders): Promise<{
        order: HttpTypes.AdminOrder;
    }>;
    retrievePreview(id: string, query?: HttpTypes.AdminOrderFilters, headers?: ClientHeaders): Promise<HttpTypes.AdminOrderPreviewResponse>;
    list(queryParams?: FindParams & HttpTypes.AdminOrderFilters, headers?: ClientHeaders): Promise<HttpTypes.PaginatedResponse<{
        orders: HttpTypes.AdminOrder[];
    }>>;
    cancel(id: string, headers?: ClientHeaders): Promise<{
        order: HttpTypes.AdminOrder;
    }>;
    createFulfillment(id: string, body: HttpTypes.AdminCreateOrderFulfillment, query?: SelectParams, headers?: ClientHeaders): Promise<{
        order: HttpTypes.AdminOrder;
    }>;
    cancelFulfillment(id: string, fulfillmentId: string, body: HttpTypes.AdminCancelOrderFulfillment, headers?: ClientHeaders): Promise<{
        order: HttpTypes.AdminOrder;
    }>;
    createShipment(id: string, fulfillmentId: string, body: HttpTypes.AdminCreateOrderShipment, query?: SelectParams, headers?: ClientHeaders): Promise<{
        order: HttpTypes.AdminOrder;
    }>;
    markAsDelivered(id: string, fulfillmentId: string, body: HttpTypes.AdminMarkOrderFulfillmentAsDelivered, query?: SelectParams, headers?: ClientHeaders): Promise<{
        order: HttpTypes.AdminOrder;
    }>;
    listChanges(id: string, queryParams?: FindParams & HttpTypes.AdminOrderChangesFilters, headers?: ClientHeaders): Promise<HttpTypes.PaginatedResponse<AdminOrderChangesResponse>>;
}
//# sourceMappingURL=order.d.ts.map