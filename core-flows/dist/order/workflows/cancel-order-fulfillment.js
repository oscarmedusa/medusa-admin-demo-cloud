"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrderFulfillmentWorkflow = exports.cancelOrderFulfillmentWorkflowId = exports.cancelOrderFulfillmentValidateOrder = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const fulfillment_1 = require("../../fulfillment");
const inventory_1 = require("../../inventory");
const cancel_fulfillment_1 = require("../steps/cancel-fulfillment");
const order_validation_1 = require("../utils/order-validation");
/**
 * This step validates that an order fulfillment can be canceled.
 */
exports.cancelOrderFulfillmentValidateOrder = (0, workflows_sdk_1.createStep)("cancel-fulfillment-validate-order", ({ order, input, }) => {
    (0, order_validation_1.throwIfOrderIsCancelled)({ order });
    const fulfillment = order.fulfillments.find((f) => f.id === input.fulfillment_id);
    if (!fulfillment) {
        throw new Error(`Fulfillment with id ${input.fulfillment_id} not found in the order`);
    }
    if (fulfillment.shipped_at) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, `The fulfillment has already been shipped. Shipped fulfillments cannot be canceled`);
    }
    (0, order_validation_1.throwIfItemsDoesNotExistsInOrder)({
        order,
        inputItems: fulfillment.items.map((i) => ({
            id: i.line_item_id,
            quantity: i.quantity,
        })),
    });
});
function prepareCancelOrderFulfillmentData({ order, fulfillment, }) {
    return {
        order_id: order.id,
        reference: utils_1.Modules.FULFILLMENT,
        reference_id: fulfillment.id,
        items: fulfillment.items.map((i) => {
            return {
                id: i.line_item_id,
                quantity: i.quantity,
            };
        }),
    };
}
function prepareInventoryUpdate({ fulfillment, }) {
    const inventoryAdjustment = [];
    for (const item of fulfillment.items) {
        // if this is `null` this means that item is from variant that has `manage_inventory` false
        if (item.inventory_item_id) {
            inventoryAdjustment.push({
                inventory_item_id: item.inventory_item_id,
                location_id: fulfillment.location_id,
                adjustment: item.quantity,
            });
        }
    }
    return {
        inventoryAdjustment,
    };
}
exports.cancelOrderFulfillmentWorkflowId = "cancel-order-fulfillment";
/**
 * This workflow cancels an order's fulfillment.
 */
exports.cancelOrderFulfillmentWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.cancelOrderFulfillmentWorkflowId, (input) => {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: [
            "id",
            "status",
            "items.*",
            "fulfillments.*",
            "fulfillments.items.*",
        ],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.cancelOrderFulfillmentValidateOrder)({ order, input });
    const fulfillment = (0, workflows_sdk_1.transform)({ input, order }, ({ input, order }) => {
        return order.fulfillments.find((f) => f.id === input.fulfillment_id);
    });
    const cancelOrderFulfillmentData = (0, workflows_sdk_1.transform)({ order, fulfillment }, prepareCancelOrderFulfillmentData);
    const { inventoryAdjustment } = (0, workflows_sdk_1.transform)({ order, fulfillment }, prepareInventoryUpdate);
    (0, workflows_sdk_1.parallelize)((0, cancel_fulfillment_1.cancelOrderFulfillmentStep)(cancelOrderFulfillmentData), (0, inventory_1.adjustInventoryLevelsStep)(inventoryAdjustment));
    // last step because there is no compensation for this step
    fulfillment_1.cancelFulfillmentWorkflow.runAsStep({
        input: {
            id: input.fulfillment_id,
        },
    });
    const orderFulfillmentCanceled = (0, workflows_sdk_1.createHook)("orderFulfillmentCanceled", {
        fulfillment,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(void 0, {
        hooks: [orderFulfillmentCanceled],
    });
});
//# sourceMappingURL=cancel-order-fulfillment.js.map