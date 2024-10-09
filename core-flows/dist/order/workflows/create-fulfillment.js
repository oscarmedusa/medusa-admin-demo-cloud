"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderFulfillmentWorkflow = exports.createOrderFulfillmentWorkflowId = exports.createFulfillmentValidateOrder = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const fulfillment_1 = require("../../fulfillment");
const inventory_1 = require("../../inventory");
const reservation_1 = require("../../reservation");
const steps_1 = require("../steps");
const order_validation_1 = require("../utils/order-validation");
/**
 * This step validates that a fulfillment can be created for an order.
 */
exports.createFulfillmentValidateOrder = (0, workflows_sdk_1.createStep)("create-fulfillment-validate-order", ({ order, inputItems, }) => {
    (0, order_validation_1.throwIfOrderIsCancelled)({ order });
    (0, order_validation_1.throwIfItemsDoesNotExistsInOrder)({ order, inputItems });
    (0, order_validation_1.throwIfItemsAreNotGroupedByShippingRequirement)({ order, inputItems });
});
function prepareRegisterOrderFulfillmentData({ order, fulfillment, input, inputItemsMap, itemsList, }) {
    return {
        order_id: order.id,
        reference: utils_1.Modules.FULFILLMENT,
        reference_id: fulfillment.id,
        created_by: input.created_by,
        items: (itemsList ?? order.items).map((i) => {
            const inputQuantity = inputItemsMap[i.id]?.quantity;
            return {
                id: i.id,
                quantity: inputQuantity ?? i.quantity,
            };
        }),
    };
}
function prepareFulfillmentData({ order, input, shippingOption, shippingMethod, reservations, itemsList, }) {
    const fulfillableItems = input.items;
    const orderItemsMap = new Map((itemsList ?? order.items).map((i) => [i.id, i]));
    const reservationItemMap = new Map(reservations.map((r) => [r.line_item_id, r]));
    // Note: If any of the items require shipping, we enable fulfillment
    // unless explicitly set to not require shipping by the item in the request
    const someItemsRequireShipping = fulfillableItems.length
        ? fulfillableItems.some((item) => {
            const orderItem = orderItemsMap.get(item.id);
            return orderItem.requires_shipping;
        })
        : true;
    const fulfillmentItems = fulfillableItems.map((i) => {
        const orderItem = orderItemsMap.get(i.id);
        const reservation = reservationItemMap.get(i.id);
        return {
            line_item_id: i.id,
            inventory_item_id: reservation?.inventory_item_id,
            quantity: i.quantity,
            title: orderItem.variant_title ?? orderItem.title,
            sku: orderItem.variant_sku || "",
            barcode: orderItem.variant_barcode || "",
        };
    });
    let locationId = input.location_id;
    if (!locationId) {
        locationId = shippingOption.service_zone.fulfillment_set.location?.id;
    }
    if (!locationId) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Cannot create fulfillment without stock location, either provide a location or you should link the shipping option ${shippingOption.id} to a stock location.`);
    }
    const shippingAddress = order.shipping_address ?? { id: undefined };
    delete shippingAddress.id;
    return {
        input: {
            location_id: locationId,
            provider_id: shippingOption.provider_id,
            shipping_option_id: shippingOption.id,
            order: order,
            data: shippingMethod.data,
            items: fulfillmentItems,
            requires_shipping: someItemsRequireShipping,
            labels: input.labels ?? [],
            delivery_address: shippingAddress,
            packed_at: new Date(),
        },
    };
}
function prepareInventoryUpdate({ reservations, order, input, inputItemsMap, itemsList, }) {
    const reservationMap = reservations.reduce((acc, reservation) => {
        acc[reservation.line_item_id] = reservation;
        return acc;
    }, {});
    const toDelete = [];
    const toUpdate = [];
    const inventoryAdjustment = [];
    const allItems = itemsList ?? order.items;
    for (const item of allItems) {
        const reservation = reservationMap[item.id];
        if (!reservation) {
            if (item.manage_inventory) {
                throw new Error(`No stock reservation found for item ${item.id} - ${item.title} (${item.variant_title})`);
            }
            continue;
        }
        const inputQuantity = inputItemsMap[item.id]?.quantity ?? item.quantity;
        const quantity = reservation.quantity - inputQuantity;
        inventoryAdjustment.push({
            inventory_item_id: reservation.inventory_item_id,
            location_id: input.location_id ?? reservation.location_id,
            adjustment: utils_1.MathBN.mult(item.quantity, -1),
        });
        if (quantity === 0) {
            toDelete.push(reservation.id);
        }
        else {
            toUpdate.push({
                id: reservation.id,
                quantity: quantity,
                location_id: input.location_id ?? reservation.location_id,
            });
        }
    }
    return {
        toDelete,
        toUpdate,
        inventoryAdjustment,
    };
}
exports.createOrderFulfillmentWorkflowId = "create-order-fulfillment";
/**
 * This creates a fulfillment for an order.
 */
exports.createOrderFulfillmentWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createOrderFulfillmentWorkflowId, (input) => {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: [
            "id",
            "status",
            "region_id",
            "currency_code",
            "items.*",
            "items.variant.manage_inventory",
            "items.variant.allow_backorder",
            "shipping_address.*",
            "shipping_methods.shipping_option_id",
            "shipping_methods.data",
        ],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.createFulfillmentValidateOrder)({ order, inputItems: input.items });
    const inputItemsMap = (0, workflows_sdk_1.transform)(input, ({ items }) => {
        return items.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {});
    });
    const shippingMethod = (0, workflows_sdk_1.transform)(order, (data) => {
        return { data: data.shipping_methods?.[0]?.data };
    });
    const shippingOptionId = (0, workflows_sdk_1.transform)(order, (data) => {
        return data.shipping_methods?.[0]?.shipping_option_id;
    });
    const shippingOption = (0, common_1.useRemoteQueryStep)({
        entry_point: "shipping_options",
        fields: ["id", "provider_id", "service_zone.fulfillment_set.location.id"],
        variables: {
            id: shippingOptionId,
        },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "get-shipping-option" });
    const lineItemIds = (0, workflows_sdk_1.transform)({ order, itemsList: input.items_list }, ({ order, itemsList }) => {
        return (itemsList ?? order.items).map((i) => i.id);
    });
    const reservations = (0, common_1.useRemoteQueryStep)({
        entry_point: "reservations",
        fields: [
            "id",
            "line_item_id",
            "quantity",
            "inventory_item_id",
            "location_id",
        ],
        variables: {
            filter: {
                line_item_id: lineItemIds,
            },
        },
    }).config({ name: "get-reservations" });
    const fulfillmentData = (0, workflows_sdk_1.transform)({
        order,
        input,
        shippingOption,
        shippingMethod,
        reservations,
        itemsList: input.items_list,
    }, prepareFulfillmentData);
    const fulfillment = fulfillment_1.createFulfillmentWorkflow.runAsStep(fulfillmentData);
    const registerOrderFulfillmentData = (0, workflows_sdk_1.transform)({
        order,
        fulfillment,
        input,
        inputItemsMap,
        itemsList: input.items ?? input.items_list,
    }, prepareRegisterOrderFulfillmentData);
    const link = (0, workflows_sdk_1.transform)({ order_id: input.order_id, fulfillment }, (data) => {
        return [
            {
                [utils_1.Modules.ORDER]: { order_id: data.order_id },
                [utils_1.Modules.FULFILLMENT]: { fulfillment_id: data.fulfillment.id },
            },
        ];
    });
    const { toDelete, toUpdate, inventoryAdjustment } = (0, workflows_sdk_1.transform)({
        order,
        reservations,
        input,
        inputItemsMap,
        itemsList: input.items_list,
    }, prepareInventoryUpdate);
    (0, inventory_1.adjustInventoryLevelsStep)(inventoryAdjustment);
    (0, workflows_sdk_1.parallelize)((0, steps_1.registerOrderFulfillmentStep)(registerOrderFulfillmentData), (0, common_1.createRemoteLinkStep)(link), (0, reservation_1.updateReservationsStep)(toUpdate), (0, reservation_1.deleteReservationsStep)(toDelete));
    const fulfillmentCreated = (0, workflows_sdk_1.createHook)("fulfillmentCreated", {
        fulfillment,
        additional_data: input.additional_data,
    });
    // trigger event OrderModuleService.Events.FULFILLMENT_CREATED
    return new workflows_sdk_1.WorkflowResponse(fulfillment, {
        hooks: [fulfillmentCreated],
    });
});
//# sourceMappingURL=create-fulfillment.js.map