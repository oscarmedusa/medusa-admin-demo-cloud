"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markOrderFulfillmentAsDeliveredWorkflow = exports.markOrderFulfillmentAsDeliveredWorkflowId = exports.orderFulfillmentDeliverablilityValidationStep = exports.orderFulfillmentDeliverablilityValidationStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const fulfillment_1 = require("../../fulfillment");
const register_delivery_1 = require("../steps/register-delivery");
const order_validation_1 = require("../utils/order-validation");
exports.orderFulfillmentDeliverablilityValidationStepId = "order-fulfillment-deliverability-validation";
/**
 * This step validates that order & fulfillment are valid
 */
exports.orderFulfillmentDeliverablilityValidationStep = (0, workflows_sdk_1.createStep)(exports.orderFulfillmentDeliverablilityValidationStepId, async ({ fulfillment, order, }) => {
    (0, order_validation_1.throwIfOrderIsCancelled)({ order });
    const orderFulfillment = order.fulfillments?.find((f) => f.id === fulfillment.id);
    if (!orderFulfillment) {
        throw new Error(`Fulfillment with id ${fulfillment.id} not found in the order`);
    }
    (0, order_validation_1.throwIfItemsDoesNotExistsInOrder)({
        order,
        inputItems: order.items.map((i) => ({
            id: i.id,
            quantity: i.quantity,
        })),
    });
});
function prepareRegisterDeliveryData({ fulfillment, order, }) {
    const orderFulfillment = order.fulfillments.find((f) => f.id === fulfillment.id);
    return {
        order_id: order.id,
        reference: utils_1.Modules.FULFILLMENT,
        reference_id: orderFulfillment.id,
        items: orderFulfillment.items.map((i) => {
            return {
                id: i.line_item_id,
                quantity: i.quantity,
            };
        }),
    };
}
exports.markOrderFulfillmentAsDeliveredWorkflowId = "mark-order-fulfillment-as-delivered-workflow";
/**
 * This workflow marks a fulfillment in an order as delivered.
 */
exports.markOrderFulfillmentAsDeliveredWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.markOrderFulfillmentAsDeliveredWorkflowId, (input) => {
    const { fulfillmentId, orderId } = input;
    const fulfillment = (0, common_1.useRemoteQueryStep)({
        entry_point: "fulfillment",
        fields: ["id"],
        variables: { id: fulfillmentId },
        throw_if_key_not_found: true,
        list: false,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "order",
        fields: [
            "id",
            "summary",
            "currency_code",
            "region_id",
            "fulfillments.id",
            "fulfillments.items.id",
            "fulfillments.items.quantity",
            "fulfillments.items.line_item_id",
            "items.id",
            "items.quantity",
        ],
        variables: { id: orderId },
        throw_if_key_not_found: true,
        list: false,
    }).config({ name: "order-query" });
    (0, exports.orderFulfillmentDeliverablilityValidationStep)({ order, fulfillment });
    const deliveryData = (0, workflows_sdk_1.transform)({ order, fulfillment }, prepareRegisterDeliveryData);
    const [deliveredFulfillment] = (0, workflows_sdk_1.parallelize)(fulfillment_1.markFulfillmentAsDeliveredWorkflow.runAsStep({
        input: { id: fulfillment.id },
    }), (0, register_delivery_1.registerOrderDeliveryStep)(deliveryData));
    (0, common_1.emitEventStep)({
        eventName: utils_1.FulfillmentEvents.DELIVERY_CREATED,
        data: { id: deliveredFulfillment.id },
    });
    return new workflows_sdk_1.WorkflowResponse(void 0);
});
//# sourceMappingURL=mark-order-fulfillment-as-delivered.js.map