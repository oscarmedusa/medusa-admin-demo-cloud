"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmOrderEditRequestWorkflow = exports.confirmOrderEditRequestWorkflowId = exports.confirmOrderEditRequestValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const reserve_inventory_1 = require("../../../cart/steps/reserve-inventory");
const prepare_confirm_inventory_input_1 = require("../../../cart/utils/prepare-confirm-inventory-input");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const confirm_order_changes_1 = require("../../steps/confirm-order-changes");
const order_validation_1 = require("../../utils/order-validation");
const create_or_update_order_payment_collection_1 = require("../create-or-update-order-payment-collection");
/**
 * This step validates that a requested order edit can be confirmed.
 */
exports.confirmOrderEditRequestValidationStep = (0, workflows_sdk_1.createStep)("validate-confirm-order-edit-request", async function ({ order, orderChange, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
});
exports.confirmOrderEditRequestWorkflowId = "confirm-order-edit-request";
/**
 * This workflow confirms an order edit request.
 */
exports.confirmOrderEditRequestWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.confirmOrderEditRequestWorkflowId, function (input) {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: [
            "id",
            "version",
            "canceled_at",
            "items.id",
            "items.title",
            "items.variant_title",
            "items.variant_sku",
            "items.variant_barcode",
            "shipping_address.*",
        ],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: [
            "id",
            "actions.id",
            "actions.order_id",
            "actions.return_id",
            "actions.action",
            "actions.details",
            "actions.reference",
            "actions.reference_id",
            "actions.internal_note",
        ],
        variables: {
            filters: {
                order_id: input.order_id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.confirmOrderEditRequestValidationStep)({
        order,
        orderChange,
    });
    const orderPreview = (0, steps_1.previewOrderChangeStep)(order.id);
    (0, confirm_order_changes_1.confirmOrderChanges)({
        changes: [orderChange],
        orderId: order.id,
        confirmed_by: input.confirmed_by,
    });
    const orderItems = (0, common_1.useRemoteQueryStep)({
        entry_point: "order",
        fields: [
            "id",
            "version",
            "canceled_at",
            "sales_channel_id",
            "items.*",
            "items.variant.manage_inventory",
            "items.variant.allow_backorder",
            "items.variant.inventory_items.inventory_item_id",
            "items.variant.inventory_items.required_quantity",
            "items.variant.inventory_items.inventory.location_levels.stock_locations.id",
            "items.variant.inventory_items.inventory.location_levels.stock_locations.name",
            "items.variant.inventory_items.inventory.location_levels.stock_locations.sales_channels.id",
            "items.variant.inventory_items.inventory.location_levels.stock_locations.sales_channels.name",
        ],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-items-query" });
    const { variants, items } = (0, workflows_sdk_1.transform)({ orderItems, orderPreview }, ({ orderItems, orderPreview }) => {
        const allItems = [];
        const allVariants = [];
        orderItems.items.forEach((ordItem) => {
            const itemAction = orderPreview.items?.find((item) => item.id === ordItem.id &&
                item.actions?.find((a) => a.action === utils_1.ChangeActionType.ITEM_ADD ||
                    a.action === utils_1.ChangeActionType.ITEM_UPDATE));
            if (!itemAction) {
                return;
            }
            let quantity = itemAction.raw_quantity ?? itemAction.quantity;
            const updateAction = itemAction.actions.find((a) => a.action === utils_1.ChangeActionType.ITEM_UPDATE);
            if (updateAction) {
                quantity = utils_1.MathBN.sub(quantity, ordItem.raw_quantity);
                if (utils_1.MathBN.lte(quantity, 0)) {
                    return;
                }
            }
            allItems.push({
                id: ordItem.id,
                variant_id: ordItem.variant_id,
                quantity,
            });
            allVariants.push(ordItem.variant);
        });
        return {
            variants: allVariants,
            items: allItems,
        };
    });
    const formatedInventoryItems = (0, workflows_sdk_1.transform)({
        input: {
            sales_channel_id: orderItems.order.sales_channel_id,
            variants,
            items,
        },
    }, prepare_confirm_inventory_input_1.prepareConfirmInventoryInput);
    (0, reserve_inventory_1.reserveInventoryStep)(formatedInventoryItems);
    create_or_update_order_payment_collection_1.createOrUpdateOrderPaymentCollectionWorkflow.runAsStep({
        input: {
            order_id: order.id,
        },
    });
    return new workflows_sdk_1.WorkflowResponse(orderPreview);
});
//# sourceMappingURL=confirm-order-edit-request.js.map