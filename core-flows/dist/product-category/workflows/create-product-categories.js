"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductCategoriesWorkflow = exports.createProductCategoriesWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
exports.createProductCategoriesWorkflowId = "create-product-categories";
/**
 * This workflow creates one or more product categories.
 */
exports.createProductCategoriesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createProductCategoriesWorkflowId, (input) => {
    const createdProducts = (0, steps_1.createProductCategoriesStep)(input);
    const productCategoryIdEvents = (0, workflows_sdk_1.transform)({ createdProducts }, ({ createdProducts }) => {
        return createdProducts.map((v) => {
            return { id: v.id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.ProductCategoryWorkflowEvents.CREATED,
        data: productCategoryIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(createdProducts);
});
//# sourceMappingURL=create-product-categories.js.map