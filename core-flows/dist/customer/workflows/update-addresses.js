"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerAddressesWorkflow = exports.updateCustomerAddressesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateCustomerAddressesWorkflowId = "update-customer-addresses";
/**
 * This workflow updates one or more customer addresses.
 */
exports.updateCustomerAddressesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateCustomerAddressesWorkflowId, (input) => {
    const unsetInput = (0, workflows_sdk_1.transform)(input, (data) => ({
        update: data,
    }));
    (0, workflows_sdk_1.parallelize)((0, steps_1.maybeUnsetDefaultShippingAddressesStep)(unsetInput), (0, steps_1.maybeUnsetDefaultBillingAddressesStep)(unsetInput));
    const updatedAddresses = (0, steps_1.updateCustomerAddressesStep)(input);
    const addressesUpdated = (0, workflows_sdk_1.createHook)("addressesUpdated", {
        addresses: updatedAddresses,
        additional_data: input.additional_data,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedAddresses, {
        hooks: [addressesUpdated],
    });
});
//# sourceMappingURL=update-addresses.js.map