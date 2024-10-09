var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Store {
    constructor(client) {
        this.region = {
            list: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/regions`, {
                    query,
                    headers,
                });
            }),
            retrieve: (id, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/regions/${id}`, {
                    query,
                    headers,
                });
            }),
        };
        this.collection = {
            list: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/collections`, {
                    query,
                    headers,
                });
            }),
            retrieve: (id, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/collections/${id}`, {
                    query,
                    headers,
                });
            }),
        };
        this.category = {
            list: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/product-categories`, {
                    query,
                    headers,
                });
            }),
            retrieve: (id, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/product-categories/${id}`, {
                    query,
                    headers,
                });
            }),
        };
        this.product = {
            list: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/products`, {
                    query,
                    headers,
                });
            }),
            retrieve: (id, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/products/${id}`, {
                    query,
                    headers,
                });
            }),
        };
        this.cart = {
            create: (body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/carts`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            update: (id, body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/carts/${id}`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            retrieve: (id, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/carts/${id}`, {
                    headers,
                    query,
                });
            }),
            createLineItem: (cartId, body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/carts/${cartId}/line-items`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            updateLineItem: (cartId, lineItemId, body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            deleteLineItem: (cartId, lineItemId, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
                    method: "DELETE",
                    headers,
                });
            }),
            addShippingMethod: (cartId, body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/carts/${cartId}/shipping-methods`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            complete: (cartId, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/carts/${cartId}/complete`, {
                    method: "POST",
                    headers,
                    query,
                });
            }),
        };
        this.fulfillment = {
            listCartOptions: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/shipping-options`, {
                    headers,
                    query,
                });
            }),
        };
        this.payment = {
            listPaymentProviders: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/payment-providers`, {
                    headers,
                    query,
                });
            }),
            initiatePaymentSession: (cart, body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                let paymentCollectionId = (_a = cart.payment_collection) === null || _a === void 0 ? void 0 : _a.id;
                if (!paymentCollectionId) {
                    const collectionBody = {
                        cart_id: cart.id,
                    };
                    paymentCollectionId = (yield this.client.fetch(`/store/payment-collections`, {
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
            }),
        };
        this.order = {
            list: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/orders`, {
                    query,
                    headers,
                });
            }),
            retrieve: (id, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/orders/${id}`, {
                    headers,
                    query,
                });
            }),
        };
        this.customer = {
            create: (body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/customers`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            update: (body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/customers/me`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            retrieve: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/customers/me`, {
                    query,
                    headers,
                });
            }),
            createAddress: (body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/customers/me/addresses`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            updateAddress: (addressId, body, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                    method: "POST",
                    headers,
                    body,
                    query,
                });
            }),
            listAddress: (query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/customers/me/addresses`, {
                    query,
                    headers,
                });
            }),
            retrieveAddress: (addressId, query, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                    query,
                    headers,
                });
            }),
            deleteAddress: (addressId, headers) => __awaiter(this, void 0, void 0, function* () {
                return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                    method: "DELETE",
                    headers,
                });
            }),
        };
        this.client = client;
    }
}
//# sourceMappingURL=index.js.map