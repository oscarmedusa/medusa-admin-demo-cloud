"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomersWorkflow = exports.updateCustomersWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const emit_event_1 = require("../../common/steps/emit-event");
const steps_1 = require("../steps");
exports.updateCustomersWorkflowId = "update-customers";
/**
 * This workflow updates one or more customers.
 */
exports.updateCustomersWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateCustomersWorkflowId, (input) => {
    const updatedCustomers = (0, steps_1.updateCustomersStep)(input);
    const customersUpdated = (0, workflows_sdk_1.createHook)("customersUpdated", {
        customers: updatedCustomers,
        additional_data: input.additional_data,
    });
    const customerIdEvents = (0, workflows_sdk_1.transform)({ updatedCustomers }, ({ updatedCustomers }) => {
        const arr = Array.isArray(updatedCustomers)
            ? updatedCustomers
            : [updatedCustomers];
        return arr?.map((customer) => {
            return { id: customer.id };
        });
    });
    (0, emit_event_1.emitEventStep)({
        eventName: utils_1.CustomerWorkflowEvents.UPDATED,
        data: customerIdEvents,
    });
    return new workflows_sdk_1.WorkflowResponse(updatedCustomers, {
        hooks: [customersUpdated],
    });
});
//# sourceMappingURL=update-customers.js.map