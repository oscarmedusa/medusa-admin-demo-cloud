"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const helpers_1 = require("../helpers");
const query_config_1 = require("../query-config");
const GET = async (req, res) => {
    const draftOrder = await (0, helpers_1.refetchOrder)(req.params.id, req.scope, query_config_1.defaultAdminOrderFields);
    if (!draftOrder) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Draft order with id: ${req.params.id} was not found`);
    }
    res.status(200).json({ draft_order: draftOrder });
};
exports.GET = GET;
//# sourceMappingURL=route.js.map