"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptInviteWorkflow = exports.acceptInviteWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const auth_1 = require("../../auth");
const emit_event_1 = require("../../common/steps/emit-event");
const user_1 = require("../../user");
const steps_1 = require("../steps");
const validate_token_1 = require("../steps/validate-token");
exports.acceptInviteWorkflowId = "accept-invite-workflow";
/**
 * This workflow accepts an invite and creates a user.
 */
exports.acceptInviteWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.acceptInviteWorkflowId, (input) => {
    const invite = (0, validate_token_1.validateTokenStep)(input.invite_token);
    const createUserInput = (0, workflows_sdk_1.transform)({ input, invite }, ({ input, invite }) => {
        return [
            {
                ...input.user,
                email: input.user.email ?? invite.email,
            },
        ];
    });
    const users = user_1.createUsersWorkflow.runAsStep({
        input: {
            users: createUserInput,
        },
    });
    const authUserInput = (0, workflows_sdk_1.transform)({ input, users }, ({ input, users }) => {
        const createdUser = users[0];
        return {
            authIdentityId: input.auth_identity_id,
            actorType: "user",
            value: createdUser.id,
        };
    });
    (0, workflows_sdk_1.parallelize)((0, auth_1.setAuthAppMetadataStep)(authUserInput), (0, steps_1.deleteInvitesStep)([invite.id]), (0, emit_event_1.emitEventStep)({
        eventName: utils_1.InviteWorkflowEvents.ACCEPTED,
        data: { id: invite.id },
    }));
    return new workflows_sdk_1.WorkflowResponse(users);
});
//# sourceMappingURL=accept-invite.js.map