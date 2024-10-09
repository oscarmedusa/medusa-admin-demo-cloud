"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductTagsWorkflow = exports.createProductTagsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.createProductTagsWorkflowId = "create-product-tags";
/**
 * This workflow creates one or more product tags.
 */
exports.createProductTagsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createProductTagsWorkflowId, (input) => {
    const productTags = (0, steps_1.createProductTagsStep)(input.product_tags);
    const productTagsCreated = (0, workflows_sdk_1.createHook)("productTagsCreated", {
        product_tags: productTags,
        additional_data: input.additional_data,
    });
    const tagIdEvents = (0, workflows_sdk_1.transform)({ productTags }, ({ productTags }) => {
        return productTags.map((v) => {
            return { id: v.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductTagWorkflowEvents.CREATED,
        data: tagIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(productTags, {
        hooks: [productTagsCreated],
    });
});
//# sourceMappingURL=create-product-tags.js.map