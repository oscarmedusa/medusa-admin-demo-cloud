"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderDetailWorkflow = exports.getOrderDetailWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const aggregate_status_1 = require("../utils/aggregate-status");
exports.getOrderDetailWorkflowId = "get-order-detail";
/**
 * This workflow retrieves an order's details.
 */
exports.getOrderDetailWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.getOrderDetailWorkflowId, (input) => {
    const fields = (0, workflows_sdk_1.transform)(input, ({ fields }) => {
        return (0, utils_1.deduplicate)([
            ...fields,
            "id",
            "status",
            "version",
            "payment_collections.*",
            "fulfillments.*",
        ]);
    });
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields,
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    });
    const aggregatedOrder = (0, workflows_sdk_1.transform)({ order }, ({ order }) => {
        const order_ = order;
        order_.payment_status = (0, aggregate_status_1.getLastPaymentStatus)(order_);
        order_.fulfillment_status = (0, aggregate_status_1.getLastFulfillmentStatus)(order_);
        return order_;
    });
    return new workflows_sdk_1.WorkflowResponse(aggregatedOrder);
});
//# sourceMappingURL=get-order-detail.js.map