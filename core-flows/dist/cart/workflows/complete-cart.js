"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeCartWorkflow = exports.completeCartWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const create_orders_1 = require("../../order/steps/create-orders");
const authorize_payment_session_1 = require("../../payment/steps/authorize-payment-session");
const register_usage_1 = require("../../promotion/steps/register-usage");
const steps_1 = require("../steps");
const reserve_inventory_1 = require("../steps/reserve-inventory");
const validate_cart_1 = require("../steps/validate-cart");
const fields_1 = require("../utils/fields");
const prepare_confirm_inventory_input_1 = require("../utils/prepare-confirm-inventory-input");
const prepare_line_item_data_1 = require("../utils/prepare-line-item-data");
exports.completeCartWorkflowId = "complete-cart";
/**
 * This workflow completes a cart.
 */
exports.completeCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.completeCartWorkflowId, (input) => {
    const cart = (0, common_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.completeCartFields,
        variables: { id: input.id },
        list: false,
    });
    (0, validate_cart_1.validateCartStep)({ cart });
    const paymentSessions = (0, steps_1.validateCartPaymentsStep)({ cart });
    (0, authorize_payment_session_1.authorizePaymentSessionStep)({
        // We choose the first payment session, as there will only be one active payment session
        // This might change in the future.
        id: paymentSessions[0].id,
        context: { cart_id: cart.id },
    });
    const { variants, sales_channel_id } = (0, workflows_sdk_1.transform)({ cart }, (data) => {
        const allItems = [];
        const allVariants = [];
        data.cart?.items?.forEach((item) => {
            allItems.push({
                id: item.id,
                variant_id: item.variant_id,
                quantity: item.quantity,
            });
            allVariants.push(item.variant);
        });
        return {
            variants: allVariants,
            items: allItems,
            sales_channel_id: data.cart.sales_channel_id,
        };
    });
    const finalCart = (0, common_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.completeCartFields,
        variables: { id: input.id },
        list: false,
    }).config({ name: "final-cart" });
    const cartToOrder = (0, workflows_sdk_1.transform)({ cart }, ({ cart }) => {
        const allItems = (cart.items ?? []).map((item) => {
            return (0, prepare_line_item_data_1.prepareLineItemData)({
                item,
                variant: item.variant,
                unitPrice: item.raw_unit_price ?? item.unit_price,
                isTaxInclusive: item.is_tax_inclusive,
                quantity: item.raw_quantity ?? item.quantity,
                metadata: item?.metadata,
                taxLines: item.tax_lines ?? [],
                adjustments: item.adjustments ?? [],
            });
        });
        const shippingMethods = (cart.shipping_methods ?? []).map((sm) => {
            return {
                name: sm.name,
                description: sm.description,
                amount: sm.raw_amount ?? sm.amount,
                is_tax_inclusive: sm.is_tax_inclusive,
                shipping_option_id: sm.shipping_option_id,
                data: sm.data,
                metadata: sm.metadata,
                tax_lines: (0, prepare_line_item_data_1.prepareTaxLinesData)(sm.tax_lines ?? []),
                adjustments: (0, prepare_line_item_data_1.prepareAdjustmentsData)(sm.adjustments ?? []),
            };
        });
        const itemAdjustments = allItems
            .map((item) => item.adjustments ?? [])
            .flat(1);
        const shippingAdjustments = shippingMethods
            .map((sm) => sm.adjustments ?? [])
            .flat(1);
        const promoCodes = [...itemAdjustments, ...shippingAdjustments]
            .map((adjustment) => adjustment.code)
            .filter((code) => Boolean);
        return {
            region_id: cart.region?.id,
            customer_id: cart.customer?.id,
            sales_channel_id: cart.sales_channel_id,
            status: utils_1.OrderStatus.PENDING,
            email: cart.email,
            currency_code: cart.currency_code,
            shipping_address: cart.shipping_address,
            billing_address: cart.billing_address,
            no_notification: false,
            items: allItems,
            shipping_methods: shippingMethods,
            metadata: cart.metadata,
            promo_codes: promoCodes,
        };
    });
    const createdOrders = (0, create_orders_1.createOrdersStep)([cartToOrder]);
    const order = (0, workflows_sdk_1.transform)({ createdOrders }, ({ createdOrders }) => createdOrders[0]);
    const reservationItemsData = (0, workflows_sdk_1.transform)({ order }, ({ order }) => order.items.map((i) => ({
        variant_id: i.variant_id,
        quantity: i.quantity,
        id: i.id,
    })));
    const formatedInventoryItems = (0, workflows_sdk_1.transform)({
        input: {
            sales_channel_id,
            variants,
            items: reservationItemsData,
        },
    }, prepare_confirm_inventory_input_1.prepareConfirmInventoryInput);
    const updateCompletedAt = (0, workflows_sdk_1.transform)({ cart }, ({ cart }) => {
        return {
            id: cart.id,
            completed_at: new Date(),
        };
    });
    (0, workflows_sdk_1.parallelize)((0, common_1.createRemoteLinkStep)([
        {
            [utils_1.Modules.ORDER]: { order_id: order.id },
            [utils_1.Modules.CART]: { cart_id: finalCart.id },
        },
        {
            [utils_1.Modules.ORDER]: { order_id: order.id },
            [utils_1.Modules.PAYMENT]: {
                payment_collection_id: cart.payment_collection.id,
            },
        },
    ]), (0, steps_1.updateCartsStep)([updateCompletedAt]), (0, reserve_inventory_1.reserveInventoryStep)(formatedInventoryItems), (0, common_1.emitEventStep)({
        eventName: utils_1.OrderWorkflowEvents.PLACED,
        data: { id: order.id },
    }));
    const promotionUsage = (0, workflows_sdk_1.transform)({ cart }, ({ cart }) => {
        const promotionUsage = [];
        const itemAdjustments = (cart.items ?? [])
            .map((item) => item.adjustments ?? [])
            .flat(1);
        const shippingAdjustments = (cart.shipping_methods ?? [])
            .map((item) => item.adjustments ?? [])
            .flat(1);
        for (const adjustment of itemAdjustments) {
            promotionUsage.push({
                amount: adjustment.amount,
                code: adjustment.code,
            });
        }
        for (const adjustment of shippingAdjustments) {
            promotionUsage.push({
                amount: adjustment.amount,
                code: adjustment.code,
            });
        }
        return promotionUsage;
    });
    (0, register_usage_1.registerUsageStep)(promotionUsage);
    return new workflows_sdk_1.WorkflowResponse(order);
});
//# sourceMappingURL=complete-cart.js.map