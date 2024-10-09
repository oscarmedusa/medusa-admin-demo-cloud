"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductTagsWorkflow = exports.updateProductTagsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.updateProductTagsWorkflowId = "update-product-tags";
/**
 * This workflow updates product tags matching the specified filters.
 */
exports.updateProductTagsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateProductTagsWorkflowId, (input) => {
    const updatedProductTags = (0, steps_1.updateProductTagsStep)(input);
    const productTagsUpdated = (0, workflows_sdk_1.createHook)("productTagsUpdated", {
        product_tags: updatedProductTags,
        additional_data: input.additional_data,
    });
    const tagIdEvents = (0, workflows_sdk_1.transform)({ updatedProductTags }, ({ updatedProductTags }) => {
        const arr = Array.isArray(updatedProductTags)
            ? updatedProductTags
            : [updatedProductTags];
        return arr?.map((v) => {
            return { id: v.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductTagWorkflowEvents.UPDATED,
        data: tagIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedProductTags, {
        hooks: [productTagsUpdated],
    });
});
//# sourceMappingURL=update-product-tags.js.map