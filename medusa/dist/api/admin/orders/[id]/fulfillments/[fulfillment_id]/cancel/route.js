"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const variables = { id: req.params.id };
    const input = {
        ...req.validatedBody,
        order_id: req.params.id,
        fulfillment_id: req.params.fulfillment_id,
        canceled_by: req.auth_context.actor_id,
    };
    await (0, core_flows_1.cancelOrderFulfillmentWorkflow)(req.scope).run({
        input,
    });
    const queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "order",
        variables,
        fields: req.remoteQueryConfig.fields,
    });
    const [order] = await remoteQuery(queryObject);
    res.status(200).json({ order });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map