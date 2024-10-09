"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProductsWorkflow = exports.batchProductsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const create_products_1 = require("./create-products");
const delete_products_1 = require("./delete-products");
const update_products_1 = require("./update-products");
exports.batchProductsWorkflowId = "batch-products";
/**
 * This workflow creates, updates, or deletes products.
 */
exports.batchProductsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.batchProductsWorkflowId, (input) => {
    const res = (0, workflows_sdk_1.parallelize)(create_products_1.createProductsWorkflow.runAsStep({
        input: { products: input.create ?? [] },
    }), update_products_1.updateProductsWorkflow.runAsStep({
        input: { products: input.update ?? [] },
    }), delete_products_1.deleteProductsWorkflow.runAsStep({
        input: { ids: input.delete ?? [] },
    }));
    return new workflows_sdk_1.WorkflowResponse((0, workflows_sdk_1.transform)({ res, input }, (data) => {
        return {
            created: data.res[0],
            updated: data.res[1],
            deleted: data.input.delete ?? [],
        };
    }));
});
//# sourceMappingURL=batch-products.js.map