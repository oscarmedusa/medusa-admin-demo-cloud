"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beginExchangeOrderWorkflow = exports.beginExchangeOrderWorkflowId = exports.beginOrderExchangeValidationStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const create_order_change_1 = require("../../steps/create-order-change");
const create_exchange_1 = require("../../steps/exchange/create-exchange");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that an exchange can be requested for an order.
 */
exports.beginOrderExchangeValidationStep = (0, workflows_sdk_1.createStep)("begin-exchange-order-validation", async function ({ order }) {
    (0, order_validation_1.throwIfOrderIsCancelled)({ order });
});
exports.beginExchangeOrderWorkflowId = "begin-exchange-order";
/**
 * This workflow requests an order exchange.
 */
exports.beginExchangeOrderWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.beginExchangeOrderWorkflowId, function (input) {
    const order = (0, common_1.useRemoteQueryStep)({
        entry_point: "orders",
        fields: ["id", "status"],
        variables: { id: input.order_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.beginOrderExchangeValidationStep)({ order });
    const created = (0, create_exchange_1.createOrderExchangesStep)([
        {
            order_id: input.order_id,
            metadata: input.metadata,
            created_by: input.created_by,
        },
    ]);
    const orderChangeInput = (0, workflows_sdk_1.transform)({ created, input }, ({ created, input }) => {
        return {
            change_type: "exchange",
            order_id: input.order_id,
            exchange_id: created[0].id,
            created_by: input.created_by,
            description: input.description,
            internal_note: input.internal_note,
        };
    });
    return new workflows_sdk_1.WorkflowResponse((0, create_order_change_1.createOrderChangeStep)(orderChangeInput));
});
//# sourceMappingURL=begin-order-exchange.js.map