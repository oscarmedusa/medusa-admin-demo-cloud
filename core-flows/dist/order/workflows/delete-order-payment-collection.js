"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderPaymentCollections = exports.deleteOrderPaymentCollectionsId = exports.throwUnlessStatusIsNotPaid = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
/**
 * This step validates that the order doesn't have an active payment collection.
 */
exports.throwUnlessStatusIsNotPaid = (0, workflows_sdk_1.createStep)("validate-payment-collection", ({ paymentCollection }) => {
    if (paymentCollection.status !== utils_1.PaymentCollectionStatus.NOT_PAID) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, `Can only delete payment collections where status is not_paid`);
    }
});
exports.deleteOrderPaymentCollectionsId = "delete-order-payment-collectionworkflow";
/**
 * This workflow deletes one or more invites.
 */
exports.deleteOrderPaymentCollections = (0, workflows_sdk_1.createWorkflow)(exports.deleteOrderPaymentCollectionsId, (input) => {
    const paymentCollection = (0, common_1.useRemoteQueryStep)({
        entry_point: "payment_collection",
        fields: ["id", "status"],
        variables: { id: input.id },
        throw_if_key_not_found: true,
        list: false,
    }).config({ name: "payment-collection-query" });
    (0, exports.throwUnlessStatusIsNotPaid)({ paymentCollection });
    (0, common_1.removeRemoteLinkStep)({
        [utils_1.Modules.PAYMENT]: { payment_collection_id: input.id },
    });
});
//# sourceMappingURL=delete-order-payment-collection.js.map