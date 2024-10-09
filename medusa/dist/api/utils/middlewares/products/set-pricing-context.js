"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPricingContext = setPricingContext;
const utils_1 = require("@medusajs/framework/utils");
const http_1 = require("@medusajs/framework/http");
function setPricingContext() {
    return async (req, _, next) => {
        const withCalculatedPrice = req.remoteQueryConfig.fields.some((field) => field.startsWith("variants.calculated_price"));
        if (!withCalculatedPrice) {
            return next();
        }
        // We validate the region ID in the previous middleware
        const region = await (0, http_1.refetchEntity)("region", req.filterableFields.region_id, req.scope, ["id", "currency_code"]);
        if (!region) {
            try {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Region with id ${req.filterableFields.region_id} not found when populating the pricing context`);
            }
            catch (e) {
                return next(e);
            }
        }
        const pricingContext = {
            region_id: region.id,
            currency_code: region.currency_code,
        };
        // Find all the customer groups the customer is a part of and set
        if (req.user?.customer_id) {
            const customerGroups = await (0, http_1.refetchEntities)("customer_group", { customer_id: req.user?.customer_id }, req.scope, ["id"]);
            pricingContext.customer_group_id = customerGroups.map((cg) => cg.id);
        }
        req.pricingContext = pricingContext;
        return next();
    };
}
//# sourceMappingURL=set-pricing-context.js.map