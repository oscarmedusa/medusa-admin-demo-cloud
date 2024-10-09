"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentSessionsWorkflow = exports.createPaymentSessionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
const delete_payment_sessions_1 = require("./delete-payment-sessions");
exports.createPaymentSessionsWorkflowId = "create-payment-sessions";
/**
 * This workflow creates payment sessions.
 */
exports.createPaymentSessionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createPaymentSessionsWorkflowId, (input) => {
    const paymentCollection = (0, common_1.useRemoteQueryStep)({
        entry_point: "payment_collection",
        fields: ["id", "amount", "currency_code", "payment_sessions.*"],
        variables: { id: input.payment_collection_id },
        list: false,
    });
    const paymentSessionInput = (0, workflows_sdk_1.transform)({ paymentCollection, input }, (data) => {
        return {
            payment_collection_id: data.input.payment_collection_id,
            provider_id: data.input.provider_id,
            data: data.input.data,
            context: data.input.context,
            amount: data.paymentCollection.amount,
            currency_code: data.paymentCollection.currency_code,
        };
    });
    const deletePaymentSessionInput = (0, workflows_sdk_1.transform)({ paymentCollection }, (data) => {
        return {
            ids: data.paymentCollection?.payment_sessions?.map((ps) => ps.id) || [],
        };
    });
    // Note: We are deleting an existing active session before creating a new one
    // for a payment collection as we don't support split payments at the moment.
    // When we are ready to accept split payments, this along with other workflows
    // need to be handled correctly
    const [created] = (0, workflows_sdk_1.parallelize)((0, steps_1.createPaymentSessionStep)(paymentSessionInput), delete_payment_sessions_1.deletePaymentSessionsWorkflow.runAsStep({
        input: deletePaymentSessionInput,
    }));
    return new workflows_sdk_1.WorkflowResponse(created);
});
//# sourceMappingURL=create-payment-session.js.map