import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Notification {
    private client;
    constructor(client: Client);
    retrieve(id: string, query?: HttpTypes.AdminNotificationParams, headers?: ClientHeaders): Promise<HttpTypes.AdminNotificationResponse>;
    list(query?: HttpTypes.AdminNotificationListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminNotificationListResponse>;
}
//# sourceMappingURL=notification.d.ts.map