"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const helpers_1 = require("../helpers");
// TODO: Do we want to apply some sort of authentication here? My suggestion is that we do
const GET = async (req, res) => {
    const order = await (0, helpers_1.refetchOrder)(req.params.id, req.scope, req.remoteQueryConfig.fields);
    res.json({ order });
};
exports.GET = GET;
//# sourceMappingURL=route.js.map