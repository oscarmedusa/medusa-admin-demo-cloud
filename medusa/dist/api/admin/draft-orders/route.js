"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const helpers_1 = require("./helpers");
const GET = async (req, res) => {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "order",
        variables: {
            filters: {
                ...req.filterableFields,
                is_draft_order: true,
            },
            ...req.remoteQueryConfig.pagination,
        },
        fields: req.remoteQueryConfig.fields,
    });
    const { rows: draft_orders, metadata } = await remoteQuery(queryObject);
    res.json({
        draft_orders,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const input = req.validatedBody;
    const workflowInput = {
        ...input,
        no_notification: !!input.no_notification_order,
        status: utils_1.OrderStatus.DRAFT,
        is_draft_order: true,
    };
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    if (!input.currency_code) {
        const queryObject = (0, utils_1.remoteQueryObjectFromString)({
            entryPoint: "region",
            variables: {
                filters: { id: input.region_id },
            },
            fields: ["currency_code"],
        });
        const [region] = await remoteQuery(queryObject);
        input.currency_code = region?.currency_code;
    }
    if (!input.email) {
        const queryObject = (0, utils_1.remoteQueryObjectFromString)({
            entryPoint: "customer",
            variables: {
                filters: { id: input.customer_id },
            },
            fields: ["email"],
        });
        const [customer] = await remoteQuery(queryObject);
        input.email = customer?.email;
    }
    const { result } = await (0, core_flows_1.createOrdersWorkflow)(req.scope).run({
        input: workflowInput,
    });
    const draftOrder = await (0, helpers_1.refetchOrder)(result.id, req.scope, req.remoteQueryConfig.fields);
    res.status(200).json({ draft_order: draftOrder });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map