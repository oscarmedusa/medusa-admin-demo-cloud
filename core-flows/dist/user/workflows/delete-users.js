"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsersWorkflow = exports.deleteUsersWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
exports.deleteUsersWorkflowId = "delete-user";
/**
 * This workflow deletes one or more users.
 */
exports.deleteUsersWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteUsersWorkflowId, (input) => {
    (0, steps_1.deleteUsersStep)(input.ids);
    const userIdEvents = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return input.ids?.map((id) => {
            return { id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.UserWorkflowEvents.DELETED,
        data: userIdEvents,
    });
});
//# sourceMappingURL=delete-users.js.map