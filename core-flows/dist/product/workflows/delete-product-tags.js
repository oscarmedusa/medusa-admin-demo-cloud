"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductTagsWorkflow = exports.deleteProductTagsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.deleteProductTagsWorkflowId = "delete-product-tags";
/**
 * This workflow deletes one or more product tags.
 */
exports.deleteProductTagsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteProductTagsWorkflowId, (input) => {
    const deletedProductTags = (0, steps_1.deleteProductTagsStep)(input.ids);
    const productTagsDeleted = (0, workflows_sdk_1.createHook)("productTagsDeleted", {
        ids: input.ids,
    });
    const tagIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductTagWorkflowEvents.DELETED,
        data: tagIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(deletedProductTags, {
        hooks: [productTagsDeleted],
    });
});
//# sourceMappingURL=delete-product-tags.js.map