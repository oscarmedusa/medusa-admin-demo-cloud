import { FindParams, HttpTypes, SelectParams } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Store {
    private client;
    constructor(client: Client);
    region: {
        list: (query?: FindParams & HttpTypes.StoreRegionFilters, headers?: ClientHeaders) => Promise<HttpTypes.PaginatedResponse<{
            regions: HttpTypes.StoreRegion[];
        }>>;
        retrieve: (id: string, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            region: HttpTypes.StoreRegion;
        }>;
    };
    collection: {
        list: (query?: FindParams & HttpTypes.StoreCollectionFilters, headers?: ClientHeaders) => Promise<HttpTypes.PaginatedResponse<{
            collections: HttpTypes.StoreCollection[];
        }>>;
        retrieve: (id: string, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            collection: HttpTypes.StoreCollection;
        }>;
    };
    category: {
        list: (query?: HttpTypes.StoreProductCategoryParams, headers?: ClientHeaders) => Promise<HttpTypes.PaginatedResponse<{
            product_categories: HttpTypes.StoreProductCategory[];
        }>>;
        retrieve: (id: string, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            product_category: HttpTypes.StoreProductCategory;
        }>;
    };
    product: {
        list: (query?: HttpTypes.StoreProductParams, headers?: ClientHeaders) => Promise<HttpTypes.StoreProductListResponse>;
        retrieve: (id: string, query?: SelectParams, headers?: ClientHeaders) => Promise<HttpTypes.StoreProductResponse>;
    };
    cart: {
        create: (body: HttpTypes.StoreCreateCart, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            cart: HttpTypes.StoreCart;
        }>;
        update: (id: string, body: HttpTypes.StoreUpdateCart, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            cart: HttpTypes.StoreCart;
        }>;
        retrieve: (id: string, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            cart: HttpTypes.StoreCart;
        }>;
        createLineItem: (cartId: string, body: HttpTypes.StoreAddCartLineItem, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            cart: HttpTypes.StoreCart;
        }>;
        updateLineItem: (cartId: string, lineItemId: string, body: HttpTypes.StoreUpdateCartLineItem, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            cart: HttpTypes.StoreCart;
        }>;
        deleteLineItem: (cartId: string, lineItemId: string, headers?: ClientHeaders) => Promise<HttpTypes.StoreLineItemDeleteResponse>;
        addShippingMethod: (cartId: string, body: HttpTypes.StoreAddCartShippingMethods, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            cart: HttpTypes.StoreCart;
        }>;
        complete: (cartId: string, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            type: "order";
            order: HttpTypes.StoreOrder;
        } | {
            type: "cart";
            cart: HttpTypes.StoreCart;
            error: {
                message: string;
                name: string;
                type: string;
            };
        }>;
    };
    fulfillment: {
        listCartOptions: (query?: FindParams & {
            cart_id: string;
        }, headers?: ClientHeaders) => Promise<{
            shipping_options: HttpTypes.StoreCartShippingOption[];
        }>;
    };
    payment: {
        listPaymentProviders: (query?: FindParams & HttpTypes.StorePaymentProviderFilters, headers?: ClientHeaders) => Promise<{
            payment_providers: HttpTypes.StorePaymentProvider[];
        }>;
        initiatePaymentSession: (cart: HttpTypes.StoreCart, body: Record<string, any>, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            payment_collection: HttpTypes.StorePaymentCollection;
        }>;
    };
    order: {
        list: (query?: FindParams & HttpTypes.StoreOrderFilters, headers?: ClientHeaders) => Promise<HttpTypes.PaginatedResponse<{
            orders: HttpTypes.StoreOrder[];
        }>>;
        retrieve: (id: string, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            order: HttpTypes.StoreOrder;
        }>;
    };
    customer: {
        create: (body: HttpTypes.StoreCreateCustomer, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            customer: HttpTypes.StoreCustomer;
        }>;
        update: (body: HttpTypes.StoreUpdateCustomer, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            customer: HttpTypes.StoreCustomer;
        }>;
        retrieve: (query?: SelectParams, headers?: ClientHeaders) => Promise<{
            customer: HttpTypes.StoreCustomer;
        }>;
        createAddress: (body: HttpTypes.StoreCreateCustomerAddress, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            customer: HttpTypes.StoreCustomer;
        }>;
        updateAddress: (addressId: string, body: HttpTypes.StoreUpdateCustomerAddress, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            customer: HttpTypes.StoreCustomer;
        }>;
        listAddress: (query?: FindParams & HttpTypes.StoreCustomerAddressFilters, headers?: ClientHeaders) => Promise<HttpTypes.PaginatedResponse<{
            addresses: HttpTypes.StoreCustomerAddress[];
        }>>;
        retrieveAddress: (addressId: string, query?: SelectParams, headers?: ClientHeaders) => Promise<{
            address: HttpTypes.StoreCustomerAddress;
        }>;
        deleteAddress: (addressId: string, headers?: ClientHeaders) => Promise<HttpTypes.StoreCustomerAddressDeleteResponse>;
    };
}
//# sourceMappingURL=index.d.ts.map