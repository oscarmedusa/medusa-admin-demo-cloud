"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollectionsWorkflow = exports.createCollectionsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
exports.createCollectionsWorkflowId = "create-collections";
/**
 * This workflow creates one or more collections.
 */
exports.createCollectionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createCollectionsWorkflowId, (input) => {
    const collections = (0, steps_1.createCollectionsStep)(input.collections);
    const collectionIdEvents = (0, workflows_sdk_1.transform)({ collections }, ({ collections }) => {
        return collections.map((v) => {
            return { id: v.id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.ProductCollectionWorkflowEvents.CREATED,
        data: collectionIdEvents,
    });
    const collectionsCreated = (0, workflows_sdk_1.createHook)("collectionsCreated", {
        collections,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(collections, {
        hooks: [collectionsCreated],
    });
});
//# sourceMappingURL=create-collections.js.map