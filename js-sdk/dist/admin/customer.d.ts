import { FindParams, HttpTypes, SelectParams } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Customer {
    private client;
    constructor(client: Client);
    create(body: HttpTypes.AdminCreateCustomer, query?: SelectParams, headers?: ClientHeaders): Promise<{
        customer: HttpTypes.AdminCustomer;
    }>;
    update(id: string, body: HttpTypes.AdminUpdateCustomer, query?: SelectParams, headers?: ClientHeaders): Promise<{
        customer: HttpTypes.AdminCustomer;
    }>;
    list(queryParams?: FindParams & HttpTypes.AdminCustomerFilters, headers?: ClientHeaders): Promise<HttpTypes.PaginatedResponse<{
        customers: HttpTypes.AdminCustomer[];
    }>>;
    retrieve(id: string, query?: SelectParams, headers?: ClientHeaders): Promise<{
        customer: HttpTypes.AdminCustomer;
    }>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminCustomerDeleteResponse>;
}
//# sourceMappingURL=customer.d.ts.map