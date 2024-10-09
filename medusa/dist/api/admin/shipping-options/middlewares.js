"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminShippingOptionRoutesMiddlewares = void 0;
const http_1 = require("@medusajs/framework/http");
const framework_1 = require("@medusajs/framework");
const validators_1 = require("../../utils/validators");
const query_config_1 = require("./query-config");
const validators_2 = require("./validators");
exports.adminShippingOptionRoutesMiddlewares = [
    {
        method: ["GET"],
        matcher: "/admin/shipping-options",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_2.AdminGetShippingOptionsParams, query_config_1.listTransformQueryConfig),
            (0, http_1.maybeApplyLinkFilter)({
                entryPoint: "location_fulfillment_set",
                resourceId: "fulfillment_set_id",
                filterableField: "stock_location_id",
                filterByField: "service_zone.fulfillment_set_id",
            }),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/shipping-options/:id",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_2.AdminGetShippingOptionParams, query_config_1.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/shipping-options",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_2.AdminCreateShippingOption),
            (0, framework_1.validateAndTransformQuery)(validators_2.AdminGetShippingOptionParams, query_config_1.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/shipping-options/:id",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_2.AdminUpdateShippingOption),
            (0, framework_1.validateAndTransformQuery)(validators_2.AdminGetShippingOptionParams, query_config_1.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/admin/shipping-options/:id",
    },
    {
        method: ["POST"],
        matcher: "/admin/shipping-options/:id/rules/batch",
        middlewares: [
            (0, framework_1.validateAndTransformBody)((0, validators_1.createBatchBody)(validators_2.AdminCreateShippingOptionRule, validators_2.AdminUpdateShippingOptionRule)),
            (0, framework_1.validateAndTransformQuery)(validators_2.AdminGetShippingOptionRuleParams, query_config_1.retrieveRuleTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map