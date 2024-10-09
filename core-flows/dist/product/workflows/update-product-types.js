"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductTypesWorkflow = exports.updateProductTypesWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.updateProductTypesWorkflowId = "update-product-types";
/**
 * This workflow updates product types matching the specified filters.
 */
exports.updateProductTypesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateProductTypesWorkflowId, (input) => {
    const updatedProductTypes = (0, steps_1.updateProductTypesStep)(input);
    const productTypesUpdated = (0, workflows_sdk_1.createHook)("productTypesUpdated", {
        product_types: updatedProductTypes,
        additional_data: input.additional_data,
    });
    const typeIdEvents = (0, workflows_sdk_1.transform)({ updatedProductTypes }, ({ updatedProductTypes }) => {
        const arr = Array.isArray(updatedProductTypes)
            ? updatedProductTypes
            : [updatedProductTypes];
        return arr?.map((v) => {
            return { id: v.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductTypeWorkflowEvents.UPDATED,
        data: typeIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedProductTypes, {
        hooks: [productTypesUpdated],
    });
});
//# sourceMappingURL=update-product-types.js.map