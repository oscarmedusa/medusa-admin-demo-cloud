"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentCollectionForCartWorkflow = exports.createPaymentCollectionForCartWorkflowId = exports.validateExistingPaymentCollectionStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const create_remote_links_1 = require("../../common/steps/create-remote-links");
const use_remote_query_1 = require("../../common/steps/use-remote-query");
const create_payment_collection_1 = require("../steps/create-payment-collection");
const validate_cart_1 = require("../steps/validate-cart");
/**
 * This step validates that a cart doesn't have a payment collection.
 */
exports.validateExistingPaymentCollectionStep = (0, workflows_sdk_1.createStep)("validate-existing-payment-collection", ({ cart }) => {
    if (cart.payment_collection) {
        throw new Error(`Cart ${cart.id} already has a payment collection`);
    }
});
exports.createPaymentCollectionForCartWorkflowId = "create-payment-collection-for-cart";
/**
 * This workflow creates a payment collection for a cart.
 */
exports.createPaymentCollectionForCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createPaymentCollectionForCartWorkflowId, (input) => {
    const cart = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: [
            "id",
            "region_id",
            "completed_at",
            "currency_code",
            "total",
            "raw_total",
            "payment_collection.id",
        ],
        variables: { id: input.cart_id },
        throw_if_key_not_found: true,
        list: false,
    });
    (0, validate_cart_1.validateCartStep)({ cart });
    (0, exports.validateExistingPaymentCollectionStep)({ cart });
    const paymentData = (0, workflows_sdk_1.transform)({ cart }, ({ cart }) => {
        return {
            cart_id: cart.id,
            currency_code: cart.currency_code,
            amount: cart.raw_total,
            region_id: cart.region_id,
        };
    });
    const created = (0, create_payment_collection_1.createPaymentCollectionsStep)([paymentData]);
    const cartPaymentLink = (0, workflows_sdk_1.transform)({ cartId: input.cart_id, created }, (data) => {
        return [
            {
                [utils_1.Modules.CART]: { cart_id: data.cartId },
                [utils_1.Modules.PAYMENT]: { payment_collection_id: data.created[0].id },
            },
        ];
    });
    (0, create_remote_links_1.createRemoteLinkStep)(cartPaymentLink).config({
        name: "cart-payment-collection-link",
    });
});
//# sourceMappingURL=create-payment-collection-for-cart.js.map