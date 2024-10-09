"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOrCreateCustomerStep = exports.findOrCreateCustomerStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.findOrCreateCustomerStepId = "find-or-create-customer";
/**
 * This step either finds a customer matching the specified ID, or finds / create a customer
 * matching the specified email. If both ID and email are provided, ID takes precedence.
 */
exports.findOrCreateCustomerStep = (0, workflows_sdk_1.createStep)(exports.findOrCreateCustomerStepId, async (data, { container }) => {
    if (typeof data.customerId === undefined &&
        typeof data.email === undefined) {
        return new workflows_sdk_1.StepResponse({
            customer: undefined,
            email: undefined,
        }, { customerWasCreated: false });
    }
    const service = container.resolve(utils_1.Modules.CUSTOMER);
    const customerData = {
        customer: null,
        email: null,
    };
    let customerWasCreated = false;
    if (data.customerId) {
        const customer = await service.retrieveCustomer(data.customerId);
        customerData.customer = customer;
        customerData.email = customer.email;
        return new workflows_sdk_1.StepResponse(customerData, {
            customerWasCreated,
        });
    }
    if (data.email) {
        const validatedEmail = (0, utils_1.validateEmail)(data.email);
        let [customer] = await service.listCustomers({
            email: validatedEmail,
            has_account: false,
        });
        if (!customer) {
            customer = await service.createCustomers({ email: validatedEmail });
            customerWasCreated = true;
        }
        customerData.customer = customer;
        customerData.email = customer.email;
    }
    return new workflows_sdk_1.StepResponse(customerData, {
        customer: customerData.customer,
        customerWasCreated,
    });
}, async (compData, { container }) => {
    const { customer, customerWasCreated } = compData;
    if (!customerWasCreated || !customer?.id) {
        return;
    }
    const service = container.resolve(utils_1.Modules.CUSTOMER);
    await service.deleteCustomers(customer.id);
});
//# sourceMappingURL=find-or-create-customer.js.map