"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsersWorkflow = exports.updateUsersWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.updateUsersWorkflowId = "update-users-workflow";
/**
 * This workflow updates one or more users.
 */
exports.updateUsersWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateUsersWorkflowId, (input) => {
    const updatedUsers = (0, steps_1.updateUsersStep)(input.updates);
    const userIdEvents = (0, workflows_sdk_1.transform)({ updatedUsers }, ({ updatedUsers }) => {
        const arr = Array.isArray(updatedUsers) ? updatedUsers : [updatedUsers];
        return arr?.map((user) => {
            return { id: user.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.UserWorkflowEvents.UPDATED,
        data: userIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedUsers);
});
//# sourceMappingURL=update-users.js.map