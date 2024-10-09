"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductOptionsWorkflow = exports.deleteProductOptionsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.deleteProductOptionsWorkflowId = "delete-product-options";
/**
 * This workflow deletes one or more product options.
 */
exports.deleteProductOptionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteProductOptionsWorkflowId, (input) => {
    const deletedProductOptions = (0, steps_1.deleteProductOptionsStep)(input.ids);
    const productOptionsDeleted = (0, workflows_sdk_1.createHook)("productOptionsDeleted", {
        ids: input.ids,
    });
    const optionIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductOptionWorkflowEvents.DELETED,
        data: optionIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(deletedProductOptions, {
        hooks: [productOptionsDeleted],
    });
});
//# sourceMappingURL=delete-product-options.js.map