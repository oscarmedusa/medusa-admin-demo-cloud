"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInventoryLevelsWorkflow = exports.deleteInventoryLevelsWorkflowId = exports.validateInventoryLevelsDelete = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
const common_1 = require("../../common");
const delete_entities_1 = require("../../common/steps/delete-entities");
/**
 * This step validates that inventory levels are deletable.
 */
exports.validateInventoryLevelsDelete = (0, workflows_sdk_1.createStep)("validate-inventory-levels-delete", async function ({ inventoryLevels }) {
    const undeleteableItems = inventoryLevels.filter((i) => i.reserved_quantity > 0 || i.stocked_quantity > 0);
    if (undeleteableItems.length) {
        const stockLocationIds = (0, utils_1.deduplicate)(undeleteableItems.map((item) => item.location_id));
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, `Cannot remove Inventory Levels for ${stockLocationIds} because there are stocked or reserved items at the locations`);
    }
});
exports.deleteInventoryLevelsWorkflowId = "delete-inventory-levels-workflow";
/**
 * This workflow deletes one or more inventory levels.
 */
exports.deleteInventoryLevelsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteInventoryLevelsWorkflowId, (input) => {
    const inventoryLevels = (0, common_1.useRemoteQueryStep)({
        entry_point: "inventory_levels",
        fields: ["id", "stocked_quantity", "reserved_quantity", "location_id"],
        variables: {
            filters: input,
        },
    });
    (0, exports.validateInventoryLevelsDelete)({ inventoryLevels });
    const idsToDelete = (0, workflows_sdk_1.transform)({ inventoryLevels }, ({ inventoryLevels }) => inventoryLevels.map((il) => il.id));
    (0, delete_entities_1.deleteEntitiesStep)({
        moduleRegistrationName: utils_1.Modules.INVENTORY,
        invokeMethod: "softDeleteInventoryLevels",
        compensateMethod: "restoreInventoryLevels",
        data: idsToDelete,
    });
    return new workflows_sdk_1.WorkflowResponse(void 0);
});
//# sourceMappingURL=delete-inventory-levels.js.map