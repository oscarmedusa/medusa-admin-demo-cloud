"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersStep = exports.createUsersStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createUsersStepId = "create-users-step";
/**
 * This step creates one or more users.
 */
exports.createUsersStep = (0, workflows_sdk_1.createStep)(exports.createUsersStepId, async (input, { container }) => {
    const service = container.resolve(utils_1.Modules.USER);
    const users = await service.createUsers(input);
    return new workflows_sdk_1.StepResponse(users);
}, async (createdUsers, { container }) => {
    if (!createdUsers?.length) {
        return;
    }
    const service = container.resolve(utils_1.Modules.USER);
    await service.deleteUsers(createdUsers.map((user) => user.id));
});
//# sourceMappingURL=create-users.js.map