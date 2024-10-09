"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCollectionsWorkflow = exports.deleteCollectionsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
exports.deleteCollectionsWorkflowId = "delete-collections";
/**
 * This workflow deletes one or more collection.
 */
exports.deleteCollectionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteCollectionsWorkflowId, (input) => {
    const deletedCollections = (0, steps_1.deleteCollectionsStep)(input.ids);
    const collectionIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.ProductCollectionWorkflowEvents.DELETED,
        data: collectionIdEvents,
    });
    const collectionsDeleted = (0, workflows_sdk_1.createHook)("collectionsDeleted", {
        ids: input.ids,
    });
    return new workflows_sdk_1.WorkflowResponse(deletedCollections, {
        hooks: [collectionsDeleted],
    });
});
//# sourceMappingURL=delete-collections.js.map