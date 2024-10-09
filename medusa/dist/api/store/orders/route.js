"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "order",
        variables: {
            filters: {
                ...req.filterableFields,
                customer_id: req.auth_context.actor_id,
            },
            ...req.remoteQueryConfig.pagination,
        },
        fields: req.remoteQueryConfig.fields,
    });
    const { rows: orders, metadata } = await remoteQuery(queryObject);
    res.json({
        orders,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=route.js.map