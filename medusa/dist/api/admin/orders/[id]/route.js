"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const workflow = (0, core_flows_1.getOrderDetailWorkflow)(req.scope);
    const { result } = await workflow.run({
        input: {
            fields: req.remoteQueryConfig.fields,
            order_id: req.params.id,
        },
    });
    res.status(200).json({ order: result });
};
exports.GET = GET;
const POST = async (req, res) => {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const variables = { id: req.params.id };
    // TODO: update order
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