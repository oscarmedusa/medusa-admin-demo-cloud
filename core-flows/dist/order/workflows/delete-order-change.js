"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderChangeWorkflow = exports.deleteOrderChangeWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteOrderChangeWorkflowId = "delete-order-change";
/**
 * This workflow deletes one or more order changes.
 */
exports.deleteOrderChangeWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteOrderChangeWorkflowId, (input) => {
    (0, steps_1.deleteOrderChangesStep)(input);
});
//# sourceMappingURL=delete-order-change.js.map