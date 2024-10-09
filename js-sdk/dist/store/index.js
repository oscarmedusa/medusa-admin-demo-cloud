"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor(client) {
        this.region = {
            list: async (query, headers) => {
                return this.client.fetch(`/store/regions`, {
                    query,
                    headers,
                });
            },
            retrieve: async (id, query, headers) => {
                return this.client.fetch(`/store/regions/${id}`, {
                    query,
                    headers,
                });
            },
        };
        this.collection = {
            list: async (query, headers) => {
                return this.client.fetch(`/store/collections`, {
                    query,
                    headers,
                });
            },
            retrieve: async (id, query, headers) => {
                return this.client.fetch(`/store/collections/${id}`, {
                    query,
                    headers,
                });
            },
        };
        this.category = {
            list: async (query, headers) => {
                return this.client.fetch(`/store/product-categories`, {
                    query,
                    headers,
                });
            },
            retrieve: async (id, query, headers) => {
                return this.client.fetch(`/store/product-categories/${id}`, {
                    query,
                    headers,
                });
            },
        };
        this.product = {
            list: async (query, headers) => {
                return this.client.fetch(`/store/products`, {
                    query,
                    headers,
                });
            },
            retrieve: async (id, query, headers) => {
                return this.client.fetch(`/store/products/${id}`, {
                    query,
                    headers,
                });
            },
        };
        this.cart = {
            create: async (body, query, headers) => {
                return this.client.fetch(`/store/carts`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            update: async (id, body, query, headers) => {
                return this.client.fetch(`/store/carts/${id}`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            retrieve: async (id, query, headers) => {
                return this.client.fetch(`/store/carts/${id}`, {
                    headers,
                    query,
                });
            },
            createLineItem: async (cartId, body, query, headers) => {
                return this.client.fetch(`/store/carts/${cartId}/line-items`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            updateLineItem: async (cartId, lineItemId, body, query, headers) => {
                return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            deleteLineItem: async (cartId, lineItemId, headers) => {
                return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
                    method: "DELETE",
                    headers,
                });
            },
            addShippingMethod: async (cartId, body, query, headers) => {
                return this.client.fetch(`/store/carts/${cartId}/shipping-methods`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            complete: async (cartId, query, headers) => {
                return this.client.fetch(`/store/carts/${cartId}/complete`, {
                    method: "POST",
                    headers,
                    query,
                });
            },
        };
        this.fulfillment = {
            listCartOptions: async (query, headers) => {
                return this.client.fetch(`/store/shipping-options`, {
                    headers,
                    query,
                });
            },
        };
        this.payment = {
            listPaymentProviders: async (query, headers) => {
                return this.client.fetch(`/store/payment-providers`, {
                    headers,
                    query,
                });
            },
            initiatePaymentSession: async (cart, body, query, headers) => {
                let paymentCollectionId = cart.payment_collection?.id;
                if (!paymentCollectionId) {
                    const collectionBody = {
                        cart_id: cart.id,
                    };
                    paymentCollectionId = (await this.client.fetch(`/store/payment-collections`, {
                        method: "POST",
                        headers,
                        body: collectionBody,
                    })).payment_collection.id;
                }
                return this.client.fetch(`/store/payment-collections/${paymentCollectionId}/payment-sessions`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
        };
        this.order = {
            list: async (query, headers) => {
                return this.client.fetch(`/store/orders`, {
                    query,
                    headers,
                });
            },
            retrieve: async (id, query, headers) => {
                return this.client.fetch(`/store/orders/${id}`, {
                    headers,
                    query,
                });
            },
        };
        this.customer = {
            create: async (body, query, headers) => {
                return this.client.fetch(`/store/customers`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            update: async (body, query, headers) => {
                return this.client.fetch(`/store/customers/me`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            retrieve: async (query, headers) => {
                return this.client.fetch(`/store/customers/me`, {
                    query,
                    headers,
                });
            },
            createAddress: async (body, query, headers) => {
                return this.client.fetch(`/store/customers/me/addresses`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            updateAddress: async (addressId, body, query, headers) => {
                return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            },
            listAddress: async (query, headers) => {
                return this.client.fetch(`/store/customers/me/addresses`, {
                    query,
                    headers,
                });
            },
            retrieveAddress: async (addressId, query, headers) => {
                return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                    query,
                    headers,
                });
            },
            deleteAddress: async (addressId, headers) => {
                return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                    method: "DELETE",
                    headers,
                });
            },
        };
        this.client = client;
    }
}
exports.Store = Store;
//# sourceMappingURL=index.js.map