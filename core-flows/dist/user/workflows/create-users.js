"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersWorkflow = exports.createUsersWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.createUsersWorkflowId = "create-users-workflow";
/**
 * This workflow creates one or more users.
 */
exports.createUsersWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createUsersWorkflowId, (input) => {
    const createdUsers = (0, steps_1.createUsersStep)(input.users);
    const userIdEvents = (0, workflows_sdk_1.transform)({ createdUsers }, ({ createdUsers }) => {
        return createdUsers.map((v) => {
            return { id: v.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.UserWorkflowEvents.CREATED,
        data: userIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(createdUsers);
});
//# sourceMappingURL=create-users.js.map