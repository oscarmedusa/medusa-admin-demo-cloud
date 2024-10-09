"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderShipmentWorkflow = exports.createOrderShipmentWorkflowId = exports.createShipmentValidateOrder = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const fulfillment_1 = require("../../fulfillment");
const steps_1 = require("../steps");
const order_validation_1 = require("../utils/order-validation");
/**
 * This step validates that a shipment can be created for an order.
 */
exports.createShipmentValidateOrder = (0, workflows_sdk_1.createStep)("create-shipment-validate-order", ({ order, input, }) => {
    const inputItems = input.items;
    (0, order_validation_1.throwIfOrderIsCancelled)({ order });
    (0, order_validation_1.throwIfItemsDoesNotExistsInOrder)({ order, inputItems });
    const order_ = order;
    const fulfillment = order_.fulfillments.find((f) => f.id === input.fulfillment_id);
    if (!fulfillment) {
        throw new Error(`Fulfillment with id ${input.fulfillment_id} not found in the order`);
    }
});
function prepareRegisterShipmentData({ order, input, }) {
    const fulfillId = input.fulfillment_id;
    const order_ = order;
    const fulfillment = order_.fulfillments.find((f) => f.id === fulfillId);
    return {
        order_id: order.id,
        reference: utils_1.Modules.FULFILLMENT,
        reference_id: fulfillment.id,
        created_by: input.created_by,
        items: (input.items ?? order.items).map((i) => {
            return {
                id: i.id,
                quantity: i.quantity,
            };
        }),
    };
}
exports.createOrderShipmentWorkflowId = "create-order-shipment";
/**
 * This workflow creates a shipment for an order.
 */
exports.createOrderShipmentWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createOrderShipmentWorkflowId, (input) => {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: [
            "id",
            "status",
            "region_id",
            "currency_code",
            "items.*",
            "fulfillments.*",
        ],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.createShipmentValidateOrder)({ order, input });
    const fulfillmentData = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return {
            id: input.fulfillment_id,
            labels: input.labels ?? [],
        };
    });
    const shipmentData = (0, workflows_sdk_1.transform)({ order, input }, prepareRegisterShipmentData);
    const [shipment] = (0, workflows_sdk_1.parallelize)(fulfillment_1.createShipmentWorkflow.runAsStep({
        input: fulfillmentData,
    }), (0, steps_1.registerOrderShipmentStep)(shipmentData));
    (0, common_1.emitEventStep)({
        eventName: utils_1.FulfillmentEvents.SHIPMENT_CREATED,
        data: { id: shipment.id },
    });
    const shipmentCreated = (0, workflows_sdk_1.createHook)("shipmentCreated", {
        shipment,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(void 0, {
        hooks: [shipmentCreated],
    });
});
//# sourceMappingURL=create-shipment.js.map