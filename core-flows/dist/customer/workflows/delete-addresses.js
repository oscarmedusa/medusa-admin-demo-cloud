"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerAddressesWorkflow = exports.deleteCustomerAddressesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteCustomerAddressesWorkflowId = "delete-customer-addresses";
/**
 * This workflow deletes one or more customer addresses.
 */
exports.deleteCustomerAddressesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteCustomerAddressesWorkflowId, (input) => {
    const deletedAddresses = (0, steps_1.deleteCustomerAddressesStep)(input.ids);
    const addressesDeleted = (0, workflows_sdk_1.createHook)("addressesDeleted", {
        ids: input.ids,
    });
    return new workflows_sdk_1.WorkflowResponse(deletedAddresses, {
        hooks: [addressesDeleted],
    });
});
//# sourceMappingURL=delete-addresses.js.map