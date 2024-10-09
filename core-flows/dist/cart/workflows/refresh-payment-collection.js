"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshPaymentCollectionForCartWorkflow = exports.refreshPaymentCollectionForCartWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const use_remote_query_1 = require("../../common/steps/use-remote-query");
const payment_collection_1 = require("../../payment-collection");
const delete_payment_sessions_1 = require("../../payment-collection/workflows/delete-payment-sessions");
exports.refreshPaymentCollectionForCartWorkflowId = "refresh-payment-collection-for-cart";
/**
 * This workflow refreshes the payment collections of a cart.
 */
exports.refreshPaymentCollectionForCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.refreshPaymentCollectionForCartWorkflowId, (input) => {
    const cart = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: [
            "id",
            "region_id",
            "currency_code",
            "total",
            "raw_total",
            "payment_collection.id",
            "payment_collection.raw_amount",
            "payment_collection.amount",
            "payment_collection.currency_code",
            "payment_collection.payment_sessions.id",
        ],
        variables: { id: input.cart_id },
        throw_if_key_not_found: true,
        list: false,
    });
    (0, workflows_sdk_1.when)({ cart }, ({ cart }) => {
        const valueIsEqual = utils_1.MathBN.eq(cart.payment_collection?.raw_amount ?? -1, cart.raw_total);
        if (valueIsEqual) {
            return cart.payment_collection.currency_code !== cart.currency_code;
        }
        return true;
    }).then(() => {
        const deletePaymentSessionInput = (0, workflows_sdk_1.transform)({ paymentCollection: cart.payment_collection }, (data) => {
            return {
                ids: data.paymentCollection?.payment_sessions
                    ?.map((ps) => ps.id)
                    ?.flat(1) || [],
            };
        });
        const updatePaymentCollectionInput = (0, workflows_sdk_1.transform)({ cart }, ({ cart }) => {
            if (!(0, utils_1.isPresent)(cart.payment_collection?.id)) {
                return;
            }
            return {
                selector: { id: cart.payment_collection.id },
                update: {
                    amount: cart.total,
                    currency_code: cart.currency_code,
                    region_id: cart.region_id,
                },
            };
        });
        (0, workflows_sdk_1.parallelize)(delete_payment_sessions_1.deletePaymentSessionsWorkflow.runAsStep({
            input: deletePaymentSessionInput,
        }), (0, payment_collection_1.updatePaymentCollectionStep)(updatePaymentCollectionInput));
    });
});
//# sourceMappingURL=refresh-payment-collection.js.map