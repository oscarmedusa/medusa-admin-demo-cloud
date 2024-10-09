"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "payment_provider",
        variables: {
            filters: req.filterableFields,
            ...req.remoteQueryConfig.pagination,
        },
        fields: req.remoteQueryConfig.fields,
    });
    const { rows: payment_providers, metadata } = await remoteQuery(queryObject);
    res.json({
        payment_providers,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=route.js.map