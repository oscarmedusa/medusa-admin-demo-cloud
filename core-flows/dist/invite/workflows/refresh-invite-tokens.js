"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshInviteTokensWorkflow = exports.refreshInviteTokensWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
const common_1 = require("../../common");
const refresh_invite_tokens_1 = require("../steps/refresh-invite-tokens");
exports.refreshInviteTokensWorkflowId = "refresh-invite-tokens-workflow";
/**
 * This workflow refreshes the token of one or more invites.
 */
exports.refreshInviteTokensWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.refreshInviteTokensWorkflowId, (input) => {
    const invites = (0, refresh_invite_tokens_1.refreshInviteTokensStep)(input.invite_ids);
    const invitesIdEvents = (0, workflows_sdk_1.transform)({ invites }, ({ invites }) => {
        return invites.map((v) => {
            return { id: v.id };
        });
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.InviteWorkflowEvents.RESENT,
        data: invitesIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(invites);
});
//# sourceMappingURL=refresh-invite-tokens.js.map