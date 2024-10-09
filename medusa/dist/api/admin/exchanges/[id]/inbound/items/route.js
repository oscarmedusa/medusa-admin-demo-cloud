"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const query_config_1 = require("../../../../returns/query-config");
const POST = async (req, res) => {
    const { id } = req.params;
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const [exchange] = await remoteQuery((0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "order_exchange",
        variables: {
            id,
        },
        fields: ["return_id"],
    }), {
        throwIfKeyNotFound: true,
    });
    const { result } = await (0, core_flows_1.orderExchangeRequestItemReturnWorkflow)(req.scope).run({
        input: {
            ...req.validatedBody,
            return_id: exchange.return_id,
            exchange_id: id,
        },
    });
    const queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "return",
        variables: {
            id: exchange.return_id,
        },
        fields: query_config_1.defaultAdminDetailsReturnFields,
    });
    const [orderReturn] = await remoteQuery(queryObject);
    res.json({
        order_preview: result,
        return: orderReturn,
    });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map