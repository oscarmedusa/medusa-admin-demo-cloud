"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCollectionsWorkflow = exports.updateCollectionsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
exports.updateCollectionsWorkflowId = "update-collections";
/**
 * This workflow updates collections matching the specified filters.
 */
exports.updateCollectionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateCollectionsWorkflowId, (input) => {
    const updatedCollections = (0, steps_1.updateCollectionsStep)(input);
    const collectionIdEvents = (0, workflows_sdk_1.transform)({ updatedCollections }, ({ updatedCollections }) => {
        const arr = Array.isArray(updatedCollections)
            ? updatedCollections
            : [updatedCollections];
        return arr?.map((v) => {
            return { id: v.id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.ProductCollectionWorkflowEvents.UPDATED,
        data: collectionIdEvents,
    });
    const collectionsUpdated = (0, workflows_sdk_1.createHook)("collectionsUpdated", {
        additional_data: input.additional_data,
        collections: updatedCollections,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedCollections, {
        hooks: [collectionsUpdated],
    });
});
//# sourceMappingURL=update-collections.js.map