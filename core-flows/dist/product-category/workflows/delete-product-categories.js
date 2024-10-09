"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductCategoriesWorkflow = exports.deleteProductCategoriesWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
exports.deleteProductCategoriesWorkflowId = "delete-product-categories";
/**
 * This workflow deletes one or more product categories.
 */
exports.deleteProductCategoriesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteProductCategoriesWorkflowId, (input) => {
    const deleted = (0, steps_1.deleteProductCategoriesStep)(input);
    const productCategoryIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input?.map((id) => {
            return { id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.ProductCategoryWorkflowEvents.DELETED,
        data: productCategoryIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(deleted);
});
//# sourceMappingURL=delete-product-categories.js.map