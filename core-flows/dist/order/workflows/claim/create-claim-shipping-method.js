"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClaimShippingMethodWorkflow = exports.createClaimShippingMethodWorkflowId = exports.createClaimShippingMethodValidationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const steps_1 = require("../../steps");
const create_order_shipping_methods_1 = require("../../steps/create-order-shipping-methods");
const order_validation_1 = require("../../utils/order-validation");
const prepare_shipping_method_1 = require("../../utils/prepare-shipping-method");
const create_order_change_actions_1 = require("../create-order-change-actions");
const update_tax_lines_1 = require("../update-tax-lines");
/**
 * This step confirms that a shipping method can be created for a claim.
 */
exports.createClaimShippingMethodValidationStep = (0, workflows_sdk_1.createStep)("validate-create-claim-shipping-method", async function ({ order, orderChange, orderClaim, }) {
    (0, order_validation_1.throwIfIsCancelled)(order, "Order");
    (0, order_validation_1.throwIfIsCancelled)(orderClaim, "Claim");
    (0, order_validation_1.throwIfOrderChangeIsNotActive)({ orderChange });
});
exports.createClaimShippingMethodWorkflowId = "create-claim-shipping-method";
/**
 * This workflow creates a shipping method for a claim.
 */
exports.createClaimShippingMethodWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createClaimShippingMethodWorkflowId, function (input) {
    const orderClaim = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_claim",
        fields: ["id", "status", "order_id", "canceled_at"],
        variables: { id: input.claim_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status", "region_id", "currency_code", "canceled_at"],
        variables: { id: orderClaim.order_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "order-query" });
    const shippingOptions = (0, common_1.useRemoteQueryStep)({
        entry_point: "shipping_option",
        fields: [
            "id",
            "name",
            "calculated_price.calculated_amount",
            "calculated_price.is_calculated_price_tax_inclusive",
        ],
        variables: {
            id: input.shipping_option_id,
            calculated_price: {
                context: { currency_code: order.currency_code },
            },
        },
    }).config({ name: "fetch-shipping-option" });
    const orderChange = (0, common_1.useRemoteQueryStep)({
        entry_point: "order_change",
        fields: ["id", "status", "version"],
        variables: {
            filters: {
                order_id: orderClaim.order_id,
                claim_id: orderClaim.id,
                status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
            },
        },
        list: false,
    }).config({ name: "order-change-query" });
    (0, exports.createClaimShippingMethodValidationStep)({ order, orderClaim, orderChange });
    const shippingMethodInput = (0, workflows_sdk_1.transform)({
        relatedEntity: orderClaim,
        shippingOptions,
        customPrice: input.custom_amount,
        orderChange,
        input,
    }, (0, prepare_shipping_method_1.prepareShippingMethod)("claim_id"));
    const createdMethods = (0, create_order_shipping_methods_1.createOrderShippingMethods)({
        shipping_methods: [shippingMethodInput],
    });
    const shippingMethodIds = (0, workflows_sdk_1.transform)(createdMethods, (createdMethods) => {
        return createdMethods.map((item) => item.id);
    });
    const isReturn = (0, workflows_sdk_1.transform)(input, (data) => {
        return !!data.return_id;
    });
    update_tax_lines_1.updateOrderTaxLinesWorkflow.runAsStep({
        input: {
            order_id: order.id,
            shipping_method_ids: shippingMethodIds,
            is_return: isReturn,
        },
    });
    const orderChangeActionInput = (0, workflows_sdk_1.transform)({
        order,
        orderClaim,
        shippingOptions,
        createdMethods,
        customPrice: input.custom_amount,
        orderChange,
        input,
    }, ({ shippingOptions, orderClaim, order, createdMethods, customPrice, orderChange, input, }) => {
        const shippingOption = shippingOptions[0];
        const createdMethod = createdMethods[0];
        const methodPrice = customPrice ?? shippingOption.calculated_price.calculated_amount;
        return {
            action: utils_1.ChangeActionType.SHIPPING_ADD,
            reference: "order_shipping_method",
            order_change_id: orderChange.id,
            reference_id: createdMethod.id,
            amount: methodPrice,
            order_id: order.id,
            return_id: input.return_id,
            claim_id: orderClaim.id,
        };
    });
    create_order_change_actions_1.createOrderChangeActionsWorkflow.runAsStep({
        input: [orderChangeActionInput],
    });
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.previewOrderChangeStep)(order.id));
});
//# sourceMappingURL=create-claim-shipping-method.js.map