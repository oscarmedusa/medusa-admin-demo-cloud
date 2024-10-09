"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRegionsWorkflow = exports.deleteRegionsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.deleteRegionsWorkflowId = "delete-regions";
/**
 * This workflow deletes one or more regions.
 */
exports.deleteRegionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteRegionsWorkflowId, (input) => {
    (0, steps_1.deleteRegionsStep)(input.ids);
    const regionIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.RegionWorkflowEvents.DELETED,
        data: regionIdEvents,
    });
});
//# sourceMappingURL=delete-regions.js.map