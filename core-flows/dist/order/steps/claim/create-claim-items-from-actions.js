"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderClaimItemsFromActionsStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
/**
 * This step creates claim items from a change action.
 */
exports.createOrderClaimItemsFromActionsStep = (0, workflows_sdk_1.createStep)("create-claim-items-from-change-actions", async (input, { container }) => {
    const orderModuleService = container.resolve(utils_1.Modules.ORDER);
    const claimItems = input.changes.map((item) => {
        let additionalFields;
        if (item.action === utils_1.ChangeActionType.ITEM_ADD) {
            additionalFields = {
                is_additional_item: true,
            };
        }
        else if (item.action === utils_1.ChangeActionType.WRITE_OFF_ITEM) {
            additionalFields = {
                reason: item.details?.reason,
            };
        }
        return {
            claim_id: input.claimId,
            item_id: item.details?.reference_id,
            quantity: item.details?.quantity,
            note: item.internal_note,
            metadata: item.details?.metadata ?? {},
            ...additionalFields,
        };
    });
    const createdClaimItems = await orderModuleService.createOrderClaimItems(claimItems);
    return new workflows_sdk_1.StepResponse(createdClaimItems, createdClaimItems.map((i) => i.id));
}, async (ids, { container }) => {
    if (!ids) {
        return;
    }
    const orderModuleService = container.resolve(utils_1.Modules.ORDER);
    await orderModuleService.deleteOrderClaimItems(ids);
});
//# sourceMappingURL=create-claim-items-from-actions.js.map