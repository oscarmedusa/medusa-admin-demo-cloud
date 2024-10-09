"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProductVariantsWorkflow = exports.batchProductVariantsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const create_product_variants_1 = require("./create-product-variants");
const update_product_variants_1 = require("./update-product-variants");
const delete_product_variants_1 = require("./delete-product-variants");
exports.batchProductVariantsWorkflowId = "batch-product-variants";
/**
 * This workflow creates, updates, and deletes product variants.
 */
exports.batchProductVariantsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.batchProductVariantsWorkflowId, (input) => {
    const normalizedInput = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return {
            create: data.input.create ?? [],
            update: data.input.update ?? [],
            delete: data.input.delete ?? [],
        };
    });
    const res = (0, workflows_sdk_1.parallelize)(create_product_variants_1.createProductVariantsWorkflow.runAsStep({
        input: { product_variants: normalizedInput.create },
    }), update_product_variants_1.updateProductVariantsWorkflow.runAsStep({
        input: { product_variants: normalizedInput.update },
    }), delete_product_variants_1.deleteProductVariantsWorkflow.runAsStep({
        input: { ids: normalizedInput.delete },
    }));
    const response = (0, workflows_sdk_1.transform)({ res, input }, (data) => {
        return {
            created: data.res[0],
            updated: data.res[1],
            deleted: data.input.delete ?? [],
        };
    });
    return new workflows_sdk_1.WorkflowResponse(response);
});
//# sourceMappingURL=batch-product-variants.js.map