"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResetPasswordTokenWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
exports.generateResetPasswordTokenWorkflow = (0, workflows_sdk_1.createWorkflow)("generate-reset-password-token", (input) => {
    const providerIdentities = (0, common_1.useRemoteQueryStep)({
        entry_point: "provider_identity",
        fields: ["auth_identity_id", "provider_metadata"],
        variables: {
            filters: {
                entity_id: input.entityId,
                provider: input.provider,
            },
        },
    });
    const token = (0, workflows_sdk_1.transform)({ input, providerIdentities }, ({ input, providerIdentities }) => {
        const providerIdentity = providerIdentities?.[0];
        if (!providerIdentity) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Provider identity with entity_id ${input.entityId} and provider ${input.provider} not found`);
        }
        const token = (0, utils_1.generateJwtToken)({
            entity_id: input.entityId,
            provider: input.provider,
        }, {
            secret: input.secret,
            expiresIn: "15m",
        });
        return token;
    });
    (0, common_1.emitEventStep)({
        eventName: utils_1.AuthWorkflowEvents.PASSWORD_RESET,
        data: { entity_id: input.entityId, actorType: input.actorType, token },
    });
    return new workflows_sdk_1.WorkflowResponse(token);
});
//# sourceMappingURL=generate-reset-password-token.js.map