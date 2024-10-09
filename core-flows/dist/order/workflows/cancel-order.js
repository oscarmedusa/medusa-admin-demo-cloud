"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrderWorkflow = exports.cancelOrderWorkflowId = exports.cancelValidateOrder = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../../payment/steps");
const steps_2 = require("../../reservation/steps");
const cancel_orders_1 = require("../steps/cancel-orders");
const order_validation_1 = require("../utils/order-validation");
/**
 * This step validates that an order can be canceled.
 */
exports.cancelValidateOrder = (0, workflows_sdk_1.createStep)("cancel-validate-order", ({ order, }) => {
    const order_ = order;
    (0, order_validation_1.throwIfOrderIsCancelled)({ order });
    let refunds = 0;
    let captures = 0;
    (0, utils_1.deepFlatMap)(order_, "payment_collections.payments", ({ payments }) => {
        refunds += payments?.refunds?.length ?? 0;
        captures += payments?.captures?.length ?? 0;
    });
    if (captures > 0) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Order with payment capture(s) cannot be canceled");
    }
    if (refunds > 0) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Order with payment refund(s) cannot be canceled");
    }
    const throwErrorIf = (arr, pred, type) => {
        if (arr?.some(pred)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, `All ${type} must be canceled before canceling an order`);
        }
    };
    const notCanceled = (o) => !o.canceled_at;
    throwErrorIf(order_.fulfillments, notCanceled, "fulfillments");
});
exports.cancelOrderWorkflowId = "cancel-order";
/**
 * This workflow cancels an order.
 */
exports.cancelOrderWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.cancelOrderWorkflowId, (input) => {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: [
            "id",
            "status",
            "items.id",
            "fulfillments.canceled_at",
            "payment_collections.payments.id",
            "payment_collections.payments.refunds.id",
            "payment_collections.payments.captures.id",
        ],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.cancelValidateOrder)({ order, input });
    const lineItemIds = (0, workflows_sdk_1.transform)({ order }, ({ order }) => {
        return order.items?.map((i) => i.id);
    });
    const paymentIds = (0, workflows_sdk_1.transform)({ order }, ({ order }) => {
        return (0, utils_1.deepFlatMap)(order, "payment_collections.payments", ({ payments }) => {
            return payments?.id;
        });
    });
    (0, workflows_sdk_1.parallelize)((0, steps_2.deleteReservationsByLineItemsStep)(lineItemIds), (0, steps_1.cancelPaymentStep)({ paymentIds }), (0, cancel_orders_1.cancelOrdersStep)({ orderIds: [order.id] }));
    const orderCanceled = (0, workflows_sdk_1.createHook)("orderCanceled", {
        order,
    });
    return new workflows_sdk_1.WorkflowResponse(void 0, {
        hooks: [orderCanceled],
    });
});
//# sourceMappingURL=cancel-order.js.map