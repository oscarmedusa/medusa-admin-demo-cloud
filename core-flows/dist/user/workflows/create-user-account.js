"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAccountWorkflow = exports.createUserAccountWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const auth_1 = require("../../auth");
const create_users_1 = require("./create-users");
exports.createUserAccountWorkflowId = "create-user-account";
/**
 * This workflow creates an authentication identity for a user.
 */
exports.createUserAccountWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createUserAccountWorkflowId, (input) => {
    const users = create_users_1.createUsersWorkflow.runAsStep({
        input: {
            users: [input.userData],
        },
    });
    const user = (0, workflows_sdk_1.transform)(users, (users) => users[0]);
    (0, auth_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "user",
        value: user.id,
    });
    return new workflows_sdk_1.WorkflowResponse(user);
});
//# sourceMappingURL=create-user-account.js.map