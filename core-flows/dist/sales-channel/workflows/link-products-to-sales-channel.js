"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkProductsToSalesChannelWorkflow = exports.linkProductsToSalesChannelWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const associate_products_with_channels_1 = require("../steps/associate-products-with-channels");
const workflows_sdk_2 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.linkProductsToSalesChannelWorkflowId = "link-products-to-sales-channel";
/**
 * This workflow creates or dismisses links between product and sales channel records.
 */
exports.linkProductsToSalesChannelWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.linkProductsToSalesChannelWorkflowId, (input) => {
    const toAdd = (0, workflows_sdk_2.transform)({ input }, (data) => {
        return data.input.add?.map((productId) => ({
            sales_channel_id: data.input.id,
            product_id: productId,
        }));
    });
    const toRemove = (0, workflows_sdk_2.transform)({ input }, (data) => {
        return data.input.remove?.map((productId) => ({
            sales_channel_id: data.input.id,
            product_id: productId,
        }));
    });
    (0, associate_products_with_channels_1.associateProductsWithSalesChannelsStep)({ links: toAdd });
    (0, steps_1.detachProductsFromSalesChannelsStep)({ links: toRemove });
});
//# sourceMappingURL=link-products-to-sales-channel.js.map