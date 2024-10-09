"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePriceListPricesWorkflow = exports.removePriceListPricesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const remove_price_list_prices_1 = require("../steps/remove-price-list-prices");
exports.removePriceListPricesWorkflowId = "remove-price-list-prices";
/**
 * This workflow removes price lists' prices.
 */
exports.removePriceListPricesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.removePriceListPricesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, remove_price_list_prices_1.removePriceListPricesStep)(input.ids));
});
//# sourceMappingURL=remove-price-list-prices.js.map