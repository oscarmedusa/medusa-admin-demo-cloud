"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFilesWorkflow = exports.uploadFilesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.uploadFilesWorkflowId = "upload-files";
/**
 * This workflow uploads one or more files.
 */
exports.uploadFilesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.uploadFilesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.uploadFilesStep)(input));
});
//# sourceMappingURL=upload-files.js.map