"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductOptionsWorkflow = exports.updateProductOptionsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.updateProductOptionsWorkflowId = "update-product-options";
/**
 * This workflow updates product options matching the specified filters.
 */
exports.updateProductOptionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateProductOptionsWorkflowId, (input) => {
    const updatedProductOptions = (0, steps_1.updateProductOptionsStep)(input);
    const productOptionsUpdated = (0, workflows_sdk_1.createHook)("productOptionsUpdated", {
        product_options: updatedProductOptions,
        additional_data: input.additional_data,
    });
    const optionIdEvents = (0, workflows_sdk_1.transform)({ updatedProductOptions }, ({ updatedProductOptions }) => {
        const arr = Array.isArray(updatedProductOptions)
            ? updatedProductOptions
            : [updatedProductOptions];
        return arr?.map((v) => {
            return { id: v.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductOptionWorkflowEvents.UPDATED,
        data: optionIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedProductOptions, {
        hooks: [productOptionsUpdated],
    });
});
//# sourceMappingURL=update-product-options.js.map