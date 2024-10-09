"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartWorkflow = exports.updateCartWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
const fields_1 = require("../utils/fields");
const refresh_payment_collection_1 = require("./refresh-payment-collection");
const update_cart_promotions_1 = require("./update-cart-promotions");
const update_tax_lines_1 = require("./update-tax-lines");
exports.updateCartWorkflowId = "update-cart";
/**
 * This workflow updates a cart.
 */
exports.updateCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateCartWorkflowId, (input) => {
    const [salesChannel, region, customerData] = (0, workflows_sdk_1.parallelize)((0, steps_1.findSalesChannelStep)({
        salesChannelId: input.sales_channel_id,
    }), (0, steps_1.findOneOrAnyRegionStep)({
        regionId: input.region_id,
    }), (0, steps_1.findOrCreateCustomerStep)({
        customerId: input.customer_id,
        email: input.email,
    }));
    const cartInput = (0, workflows_sdk_1.transform)({ input, region, customerData, salesChannel }, (data) => {
        const { promo_codes, ...updateCartData } = data.input;
        const data_ = { ...updateCartData };
        if ((0, utils_1.isPresent)(updateCartData.region_id)) {
            if (!data.region) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Region not found");
            }
            data_.currency_code = data.region.currency_code;
            data_.region_id = data.region.id;
        }
        if (updateCartData.customer_id !== undefined ||
            updateCartData.email !== undefined) {
            data_.customer_id = data.customerData.customer?.id || null;
            data_.email =
                data.input?.email ?? (data.customerData.customer?.email || null);
        }
        if (updateCartData.sales_channel_id !== undefined) {
            data_.sales_channel_id = data.salesChannel?.id || null;
        }
        return data_;
    });
    const carts = (0, steps_1.updateCartsStep)([cartInput]);
    const cart = (0, common_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.cartFieldsForRefreshSteps,
        variables: { id: cartInput.id },
        list: false,
    }).config({ name: "refetch–cart" });
    (0, workflows_sdk_1.parallelize)((0, steps_1.refreshCartShippingMethodsStep)({ cart }), update_tax_lines_1.updateTaxLinesWorkflow.runAsStep({
        input: {
            cart_id: carts[0].id,
        },
    }));
    update_cart_promotions_1.updateCartPromotionsWorkflow.runAsStep({
        input: {
            cart_id: input.id,
            promo_codes: input.promo_codes,
            action: utils_1.PromotionActions.REPLACE,
        },
    });
    refresh_payment_collection_1.refreshPaymentCollectionForCartWorkflow.runAsStep({
        input: {
            cart_id: input.id,
        },
    });
    const cartUpdated = (0, workflows_sdk_1.createHook)("cartUpdated", {
        cart,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(void 0, {
        hooks: [cartUpdated],
    });
});
//# sourceMappingURL=update-cart.js.map