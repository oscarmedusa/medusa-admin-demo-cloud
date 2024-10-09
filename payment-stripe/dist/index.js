"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const services = [
    services_1.StripeBancontactService,
    services_1.StripeBlikService,
    services_1.StripeGiropayService,
    services_1.StripeIdealService,
    services_1.StripeProviderService,
    services_1.StripePrzelewy24Service,
];
const providerExport = {
    services,
};
exports.default = providerExport;
//# sourceMappingURL=index.js.map