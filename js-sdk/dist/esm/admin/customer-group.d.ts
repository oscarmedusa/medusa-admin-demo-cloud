import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class CustomerGroup {
    private client;
    constructor(client: Client);
    retrieve(id: string, query?: HttpTypes.AdminGetCustomerGroupParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCustomerGroupResponse>;
    list(query?: HttpTypes.AdminGetCustomerGroupsParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCustomerGroupListResponse>;
    create(body: HttpTypes.AdminCreateCustomerGroup, query?: HttpTypes.AdminGetCustomerGroupsParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCustomerGroupResponse>;
    update(id: string, body: HttpTypes.AdminUpdateCustomerGroup, query?: HttpTypes.AdminGetCustomerGroupsParams, headers?: ClientHeaders): Promise<HttpTypes.AdminCustomerGroupResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminCustomerGroupDeleteResponse>;
    batchCustomers(id: string, body: HttpTypes.AdminBatchLink, headers?: ClientHeaders): Promise<HttpTypes.AdminCustomerGroupResponse>;
}
//# sourceMappingURL=customer-group.d.ts.map