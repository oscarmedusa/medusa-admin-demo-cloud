"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFulfillmentWorkflow = exports.createFulfillmentWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const common_1 = require("../../common");
exports.createFulfillmentWorkflowId = "create-fulfillment-workflow";
/**
 * This workflow creates a fulfillment.
 */
exports.createFulfillmentWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createFulfillmentWorkflowId, (input) => {
    const location = (0, common_1.useRemoteQueryStep)({
        entry_point: "stock_location",
        fields: [
            "id",
            "name",
            "metadata",
            "created_at",
            "updated_at",
            "address.id",
            "address.address_1",
            "address.address_2",
            "address.city",
            "address.country_code",
            "address.phone",
            "address.province",
            "address.postal_code",
            "address.metadata",
        ],
        variables: { id: input.location_id },
        list: false,
        throw_if_key_not_found: true,
    }).config({ name: "get-location" });
    const stepInput = (0, workflows_sdk_1.transform)({ input, location }, ({ input, location }) => {
        return {
            ...input,
            location,
        };
    });
    // When we have support for hooks with a return this would be a great
    // place to put a hook for people to collect additional data they would
    // like to pass down to the provider.
    //
    // const providerDataHook = createHook("getProviderData", stepInput)
    //
    // The collected provider data would be passed to createFulfillment in a
    // additional_provider_data: Record<string, unknown> field.
    const result = (0, steps_1.createFulfillmentStep)(stepInput);
    return new workflows_sdk_1.WorkflowResponse(result);
});
//# sourceMappingURL=create-fulfillment.js.map