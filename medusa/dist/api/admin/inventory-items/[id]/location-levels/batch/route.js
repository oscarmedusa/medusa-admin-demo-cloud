"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const POST = async (req, res) => {
    const { id } = req.params;
    // TODO: Normalize workflow and response, and add support for updates
    const workflow = (0, core_flows_1.bulkCreateDeleteLevelsWorkflow)(req.scope);
    await workflow.run({
        input: {
            deletes: req.validatedBody.delete?.map((location_id) => ({
                location_id,
                inventory_item_id: id,
            })) ?? [],
            creates: req.validatedBody.create?.map((c) => ({
                ...c,
                inventory_item_id: id,
            })) ?? [],
        },
    });
    res.status(200).json({ inventory_item: {} });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map