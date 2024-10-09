"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductTypesWorkflow = exports.createProductTypesWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.createProductTypesWorkflowId = "create-product-types";
/**
 * This workflow creates one or more product types.
 */
exports.createProductTypesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createProductTypesWorkflowId, (input) => {
    const productTypes = (0, steps_1.createProductTypesStep)(input.product_types);
    const productTypesCreated = (0, workflows_sdk_1.createHook)("productTypesCreated", {
        product_types: productTypes,
        additional_data: input.additional_data,
    });
    const typeIdEvents = (0, workflows_sdk_1.transform)({ productTypes }, ({ productTypes }) => {
        return productTypes.map((v) => {
            return { id: v.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductTypeWorkflowEvents.CREATED,
        data: typeIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(productTypes, {
        hooks: [productTypesCreated],
    });
});
//# sourceMappingURL=create-product-types.js.map