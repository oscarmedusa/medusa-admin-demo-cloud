"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductOptionsWorkflow = exports.createProductOptionsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.createProductOptionsWorkflowId = "create-product-options";
/**
 * This workflow creates one or more product options.
 */
exports.createProductOptionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createProductOptionsWorkflowId, (input) => {
    const productOptions = (0, steps_1.createProductOptionsStep)(input.product_options);
    const productOptionsCreated = (0, workflows_sdk_1.createHook)("productOptionsCreated", {
        product_options: productOptions,
        additional_data: input.additional_data,
    });
    const optionIdEvents = (0, workflows_sdk_1.transform)({ productOptions }, ({ productOptions }) => {
        return productOptions.map((v) => {
            return { id: v.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductOptionWorkflowEvents.CREATED,
        data: optionIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(productOptions, {
        hooks: [productOptionsCreated],
    });
});
//# sourceMappingURL=create-product-options.js.map