"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveAndCompleteReturnOrderWorkflow = exports.receiveAndCompleteReturnOrderWorkflowId = exports.receiveCompleteReturnValidationStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../../common");
const receive_return_1 = require("../../steps/return/receive-return");
const order_validation_1 = require("../../utils/order-validation");
/**
 * This step validates that a return can be received and completed.
 */
exports.receiveCompleteReturnValidationStep = (0, workflows_sdk_1.createStep)("receive-return-order-validation", async function ({ orderReturn, input, }, context) {
    (0, order_validation_1.throwIfIsCancelled)(orderReturn, "Return");
    (0, order_validation_1.throwIfItemsDoesNotExistsInReturn)({ orderReturn, inputItems: input.items });
});
exports.receiveAndCompleteReturnOrderWorkflowId = "receive-return-order";
/**
 * This workflow marks a return as received and completes it.
 */
exports.receiveAndCompleteReturnOrderWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.receiveAndCompleteReturnOrderWorkflowId, function (input) {
    const orderReturn = (0, common_1.useRemoteQueryStep)({
        entry_point: "returns",
        fields: ["id", "canceled_at", "items.*"],
        variables: { id: input.return_id },
        list: false,
        throw_if_key_not_found: true,
    });
    (0, exports.receiveCompleteReturnValidationStep)({ orderReturn, input });
    return new workflows_sdk_1.WorkflowResponse((0, receive_return_1.receiveReturnStep)(input));
});
//# sourceMappingURL=receive-complete-return.js.map