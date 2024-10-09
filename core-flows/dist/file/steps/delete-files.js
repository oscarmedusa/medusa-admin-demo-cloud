"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFilesStep = exports.deleteFilesStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.deleteFilesStepId = "delete-files";
/**
 * This step deletes one or more files.
 */
exports.deleteFilesStep = (0, workflows_sdk_1.createStep)({ name: exports.deleteFilesStepId, noCompensation: true }, async (ids, { container }) => {
    const service = container.resolve(utils_1.Modules.FILE);
    await service.deleteFiles(ids);
    return new workflows_sdk_1.StepResponse(void 0);
}, async () => { });
//# sourceMappingURL=delete-files.js.map