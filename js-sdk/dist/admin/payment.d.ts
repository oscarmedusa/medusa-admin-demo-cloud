import { HttpTypes, SelectParams } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Payment {
    private client;
    constructor(client: Client);
    list(query?: HttpTypes.AdminPaymentFilters, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentsResponse>;
    listPaymentProviders(query?: HttpTypes.AdminGetPaymentProvidersParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentProviderListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminPaymentFilters, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentResponse>;
    capture(id: string, body: HttpTypes.AdminCapturePayment, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentResponse>;
    refund(id: string, body: HttpTypes.AdminRefundPayment, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminPaymentResponse>;
}
//# sourceMappingURL=payment.d.ts.map