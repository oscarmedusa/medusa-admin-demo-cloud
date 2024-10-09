"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const helpers_1 = require("../../helpers");
const POST = async (req, res) => {
    const cart = await (0, helpers_1.refetchCart)(req.params.id, req.scope, req.remoteQueryConfig.fields);
    const workflowInput = {
        items: [req.validatedBody],
        cart,
    };
    await (0, core_flows_1.addToCartWorkflow)(req.scope).run({
        input: workflowInput,
    });
    const updatedCart = await (0, helpers_1.refetchCart)(req.params.id, req.scope, req.remoteQueryConfig.fields);
    res.status(200).json({ cart: updatedCart });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map