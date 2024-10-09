"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const helpers_1 = require("../../helpers");
const POST = async (req, res) => {
    const collectionId = req.params.id;
    const { context = {}, data, provider_id } = req.body;
    // If the customer is logged in, we auto-assign them to the payment collection
    if (req.auth_context?.actor_id) {
        ;
        context.customer = {
            id: req.auth_context?.actor_id,
        };
    }
    const workflowInput = {
        payment_collection_id: collectionId,
        provider_id: provider_id,
        data,
        context,
    };
    await (0, core_flows_1.createPaymentSessionsWorkflow)(req.scope).run({
        input: workflowInput,
    });
    const paymentCollection = await (0, helpers_1.refetchPaymentCollection)(collectionId, req.scope, req.remoteQueryConfig.fields);
    res.status(200).json({
        payment_collection: paymentCollection,
    });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map