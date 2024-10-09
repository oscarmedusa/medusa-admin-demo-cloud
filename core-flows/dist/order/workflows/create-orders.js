"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrdersWorkflow = exports.createOrdersWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const find_one_or_any_region_1 = require("../../cart/steps/find-one-or-any-region");
const find_or_create_customer_1 = require("../../cart/steps/find-or-create-customer");
const find_sales_channel_1 = require("../../cart/steps/find-sales-channel");
const get_variant_price_sets_1 = require("../../cart/steps/get-variant-price-sets");
const validate_variant_prices_1 = require("../../cart/steps/validate-variant-prices");
const prepare_line_item_data_1 = require("../../cart/utils/prepare-line-item-data");
const confirm_variant_inventory_1 = require("../../cart/workflows/confirm-variant-inventory");
const common_1 = require("../../common");
const steps_1 = require("../steps");
const fields_1 = require("../utils/fields");
const prepare_custom_line_item_data_1 = require("../utils/prepare-custom-line-item-data");
const update_tax_lines_1 = require("./update-tax-lines");
function prepareLineItems(data) {
    const items = (data.input.items ?? []).map((item) => {
        const variant = data.variants.find((v) => v.id === item.variant_id);
        if (!variant) {
            return (0, prepare_custom_line_item_data_1.prepareCustomLineItemData)({
                variant: {
                    ...item,
                },
                unitPrice: utils_1.MathBN.max(0, item.unit_price),
                isTaxInclusive: item.is_tax_inclusive,
                quantity: item.quantity,
                metadata: item?.metadata ?? {},
            });
        }
        return (0, prepare_line_item_data_1.prepareLineItemData)({
            variant: variant,
            unitPrice: utils_1.MathBN.max(0, item.unit_price ??
                data.priceSets[item.variant_id]?.raw_calculated_amount),
            isTaxInclusive: item.is_tax_inclusive ??
                data.priceSets[item.variant_id]?.is_calculated_price_tax_inclusive,
            quantity: item.quantity,
            metadata: item?.metadata ?? {},
            taxLines: item.tax_lines || [],
            adjustments: item.adjustments || [],
        });
    });
    return items;
}
function getOrderInput(data) {
    const shippingAddress = data.input.shipping_address ?? { id: undefined };
    delete shippingAddress.id;
    const billingAddress = data.input.billing_address ?? { id: undefined };
    delete billingAddress.id;
    const data_ = {
        ...data.input,
        shipping_address: (0, utils_1.isPresent)(shippingAddress) ? shippingAddress : undefined,
        billing_address: (0, utils_1.isPresent)(billingAddress) ? billingAddress : undefined,
        currency_code: data.input.currency_code ?? data.region.currency_code,
        region_id: data.region.id,
    };
    if (data.customerData.customer?.id) {
        data_.customer_id = data.customerData.customer.id;
        data_.email = data.input?.email ?? data.customerData.customer.email;
    }
    if (data.salesChannel?.id) {
        data_.sales_channel_id = data.salesChannel.id;
    }
    return data_;
}
exports.createOrdersWorkflowId = "create-orders";
/**
 * This workflow creates an order.
 */
exports.createOrdersWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createOrdersWorkflowId, (input) => {
    const variantIds = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return (data.input.items ?? [])
            .map((item) => item.variant_id)
            .filter(Boolean);
    });
    const [salesChannel, region, customerData] = (0, workflows_sdk_1.parallelize)((0, find_sales_channel_1.findSalesChannelStep)({
        salesChannelId: input.sales_channel_id,
    }), (0, find_one_or_any_region_1.findOneOrAnyRegionStep)({
        regionId: input.region_id,
    }), (0, find_or_create_customer_1.findOrCreateCustomerStep)({
        customerId: input.customer_id,
        email: input.email,
    }));
    // TODO: This is on par with the context used in v1.*, but we can be more flexible.
    const pricingContext = (0, workflows_sdk_1.transform)({ input, region, customerData }, (data) => {
        if (!data.region) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Region not found");
        }
        return {
            currency_code: data.input.currency_code ?? data.region.currency_code,
            region_id: data.region.id,
            customer_id: data.customerData.customer?.id,
        };
    });
    const variants = (0, common_1.useRemoteQueryStep)({
        entry_point: "variants",
        fields: fields_1.productVariantsFields,
        variables: {
            id: variantIds,
            calculated_price: {
                context: pricingContext,
            },
        },
        throw_if_key_not_found: true,
    });
    (0, validate_variant_prices_1.validateVariantPricesStep)({ variants });
    confirm_variant_inventory_1.confirmVariantInventoryWorkflow.runAsStep({
        input: {
            sales_channel_id: salesChannel.id,
            variants,
            items: input.items,
        },
    });
    const priceSets = (0, get_variant_price_sets_1.getVariantPriceSetsStep)({
        variantIds,
        context: pricingContext,
    });
    const orderInput = (0, workflows_sdk_1.transform)({ input, region, customerData, salesChannel }, getOrderInput);
    const lineItems = (0, workflows_sdk_1.transform)({ priceSets, input, variants }, prepareLineItems);
    const orderToCreate = (0, workflows_sdk_1.transform)({ lineItems, orderInput }, (data) => {
        return {
            ...data.orderInput,
            items: data.lineItems,
        };
    });
    const orders = (0, steps_1.createOrdersStep)([orderToCreate]);
    const order = (0, workflows_sdk_1.transform)({ orders }, (data) => data.orders?.[0]);
    update_tax_lines_1.updateOrderTaxLinesWorkflow.runAsStep({
        input: {
            order_id: order.id,
        },
    });
    const orderCreated = (0, workflows_sdk_1.createHook)("orderCreated", {
        order,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(order, {
        hooks: [orderCreated],
    });
});
//# sourceMappingURL=create-orders.js.map