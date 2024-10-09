"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthAppMetadataStep = exports.setAuthAppMetadataStepId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.setAuthAppMetadataStepId = "set-auth-app-metadata";
/**
 * This step sets the `app_metadata` property of an auth identity.
 */
exports.setAuthAppMetadataStep = (0, workflows_sdk_1.createStep)(exports.setAuthAppMetadataStepId, async (data, { container }) => {
    const service = container.resolve(utils_1.Modules.AUTH);
    const key = `${data.actorType}_id`;
    const authIdentity = await service.retrieveAuthIdentity(data.authIdentityId);
    const appMetadata = authIdentity.app_metadata || {};
    // If the value is null, we are deleting the association with an actor
    if ((0, utils_1.isDefined)(appMetadata[key]) && data.value !== null) {
        throw new Error(`Key ${key} already exists in app metadata`);
    }
    const oldValue = appMetadata[key];
    appMetadata[key] = data.value;
    await service.updateAuthIdentities({
        id: authIdentity.id,
        app_metadata: appMetadata,
    });
    return new workflows_sdk_1.StepResponse(authIdentity, {
        id: authIdentity.id,
        key: key,
        value: data.value,
        oldValue,
    });
}, async (idAndKeyAndValue, { container }) => {
    if (!idAndKeyAndValue) {
        return;
    }
    const { id, key, oldValue, value } = idAndKeyAndValue;
    const service = container.resolve(utils_1.Modules.AUTH);
    const authIdentity = await service.retrieveAuthIdentity(id);
    const appMetadata = authIdentity.app_metadata || {};
    // If the value is null, we WERE deleting the association with an actor, so we need to restore it
    if (value === null) {
        appMetadata[key] = oldValue;
    }
    else {
        delete appMetadata[key];
    }
    await service.updateAuthIdentities({
        id: authIdentity.id,
        app_metadata: appMetadata,
    });
});
//# sourceMappingURL=set-auth-app-metadata.js.map