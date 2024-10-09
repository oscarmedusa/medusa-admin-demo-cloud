"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importProductsWorkflow = exports.importProductsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const notification_1 = require("../../notification");
const steps_1 = require("../steps");
const batch_products_1 = require("./batch-products");
exports.importProductsWorkflowId = "import-products";
/**
 * This workflow imports products from a CSV file.
 */
exports.importProductsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.importProductsWorkflowId, (input) => {
    const products = (0, steps_1.parseProductCsvStep)(input.fileContent);
    const batchRequest = (0, steps_1.groupProductsForBatchStep)(products);
    const summary = (0, workflows_sdk_1.transform)({ batchRequest }, (data) => {
        return {
            toCreate: data.batchRequest.create.length,
            toUpdate: data.batchRequest.update.length,
        };
    });
    (0, steps_1.waitConfirmationProductImportStep)();
    // Q: Can we somehow access the error from the step that threw here? Or in a compensate step at least?
    const failureNotification = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return [
            {
                // We don't need the recipient here for now, but if we want to push feed notifications to a specific user we could add it.
                to: "",
                channel: "feed",
                template: "admin-ui",
                data: {
                    title: "Product import",
                    description: `Failed to import products from file ${data.input.filename}`,
                },
            },
        ];
    });
    (0, notification_1.notifyOnFailureStep)(failureNotification);
    batch_products_1.batchProductsWorkflow
        .runAsStep({ input: batchRequest })
        .config({ async: true, backgroundExecution: true });
    const notifications = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return [
            {
                // We don't need the recipient here for now, but if we want to push feed notifications to a specific user we could add it.
                to: "",
                channel: "feed",
                template: "admin-ui",
                data: {
                    title: "Product import",
                    description: `Product import of file ${data.input.filename} completed successfully!`,
                },
            },
        ];
    });
    (0, notification_1.sendNotificationsStep)(notifications);
    return new workflows_sdk_1.WorkflowResponse(summary);
});
//# sourceMappingURL=import-products.js.map