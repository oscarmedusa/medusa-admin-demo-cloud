"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductTypesWorkflow = exports.deleteProductTypesWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.deleteProductTypesWorkflowId = "delete-product-types";
/**
 * This workflow deletes one or more product types.
 */
exports.deleteProductTypesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteProductTypesWorkflowId, (input) => {
    const deletedProductTypes = (0, steps_1.deleteProductTypesStep)(input.ids);
    const productTypesDeleted = (0, workflows_sdk_1.createHook)("productTypesDeleted", {
        ids: input.ids,
    });
    const typeIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.ProductTypeWorkflowEvents.DELETED,
        data: typeIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(deletedProductTypes, {
        hooks: [productTypesDeleted],
    });
});
//# sourceMappingURL=delete-product-types.js.map