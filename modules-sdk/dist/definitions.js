"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE_DEFINITIONS = exports.ModulesDefinition = exports.MODULE_PACKAGE_NAMES = void 0;
const utils_1 = require("@medusajs/utils");
const types_1 = require("./types");
exports.MODULE_PACKAGE_NAMES = {
    [utils_1.Modules.AUTH]: "@medusajs/medusa/auth",
    [utils_1.Modules.CACHE]: "@medusajs/medusa/cache-inmemory",
    [utils_1.Modules.CART]: "@medusajs/medusa/cart",
    [utils_1.Modules.CUSTOMER]: "@medusajs/medusa/customer",
    [utils_1.Modules.EVENT_BUS]: "@medusajs/medusa/event-bus-local",
    [utils_1.Modules.INVENTORY]: "@medusajs/medusa/inventory-next", // TODO: To be replaced when current `@medusajs/inventory` is deprecated
    [utils_1.Modules.LINK]: "@medusajs/medusa/link-modules",
    [utils_1.Modules.PAYMENT]: "@medusajs/medusa/payment",
    [utils_1.Modules.PRICING]: "@medusajs/medusa/pricing",
    [utils_1.Modules.PRODUCT]: "@medusajs/medusa/product",
    [utils_1.Modules.PROMOTION]: "@medusajs/medusa/promotion",
    [utils_1.Modules.SALES_CHANNEL]: "@medusajs/medusa/sales-channel",
    [utils_1.Modules.FULFILLMENT]: "@medusajs/medusa/fulfillment",
    [utils_1.Modules.STOCK_LOCATION]: "@medusajs/medusa/stock-location-next", // TODO: To be replaced when current `@medusajs/stock-location` is deprecated
    [utils_1.Modules.TAX]: "@medusajs/medusa/tax",
    [utils_1.Modules.USER]: "@medusajs/medusa/user",
    [utils_1.Modules.WORKFLOW_ENGINE]: "@medusajs/medusa/workflow-engine-inmemory",
    [utils_1.Modules.REGION]: "@medusajs/medusa/region",
    [utils_1.Modules.ORDER]: "@medusajs/medusa/order",
    [utils_1.Modules.API_KEY]: "@medusajs/medusa/api-key",
    [utils_1.Modules.STORE]: "@medusajs/medusa/store",
    [utils_1.Modules.CURRENCY]: "@medusajs/medusa/currency",
    [utils_1.Modules.FILE]: "@medusajs/medusa/file",
    [utils_1.Modules.NOTIFICATION]: "@medusajs/medusa/notification",
    [utils_1.Modules.INDEX]: "@medusajs/medusa/index-module",
};
exports.ModulesDefinition = {
    [utils_1.Modules.EVENT_BUS]: {
        key: utils_1.Modules.EVENT_BUS,
        defaultPackage: exports.MODULE_PACKAGE_NAMES[utils_1.Modules.EVENT_BUS],
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.EVENT_BUS),
        isRequired: true,
        isQueryable: false,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.STOCK_LOCATION]: {
        key: utils_1.Modules.STOCK_LOCATION,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.STOCK_LOCATION),
        isRequired: false,
        isQueryable: true,
        dependencies: [utils_1.Modules.EVENT_BUS],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.INVENTORY]: {
        key: utils_1.Modules.INVENTORY,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.INVENTORY),
        isRequired: false,
        isQueryable: true,
        dependencies: [utils_1.Modules.EVENT_BUS],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.CACHE]: {
        key: utils_1.Modules.CACHE,
        defaultPackage: exports.MODULE_PACKAGE_NAMES[utils_1.Modules.CACHE],
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.CACHE),
        isRequired: true,
        isQueryable: false,
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.PRODUCT]: {
        key: utils_1.Modules.PRODUCT,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.PRODUCT),
        isRequired: false,
        isQueryable: true,
        dependencies: [utils_1.Modules.EVENT_BUS, "logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.PRICING]: {
        key: utils_1.Modules.PRICING,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.PRICING),
        isRequired: false,
        isQueryable: true,
        dependencies: [utils_1.Modules.EVENT_BUS, "logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.PROMOTION]: {
        key: utils_1.Modules.PROMOTION,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.PROMOTION),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.AUTH]: {
        key: utils_1.Modules.AUTH,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.AUTH),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.WORKFLOW_ENGINE]: {
        key: utils_1.Modules.WORKFLOW_ENGINE,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.WORKFLOW_ENGINE),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        __passSharedContainer: true,
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.SALES_CHANNEL]: {
        key: utils_1.Modules.SALES_CHANNEL,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.SALES_CHANNEL),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.FULFILLMENT]: {
        key: utils_1.Modules.FULFILLMENT,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.FULFILLMENT),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger", utils_1.Modules.EVENT_BUS],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.CART]: {
        key: utils_1.Modules.CART,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.CART),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.CUSTOMER]: {
        key: utils_1.Modules.CUSTOMER,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.CUSTOMER),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.PAYMENT]: {
        key: utils_1.Modules.PAYMENT,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.PAYMENT),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.USER]: {
        key: utils_1.Modules.USER,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.USER),
        isRequired: false,
        isQueryable: true,
        dependencies: [utils_1.Modules.EVENT_BUS, "logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.REGION]: {
        key: utils_1.Modules.REGION,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.REGION),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.ORDER]: {
        key: utils_1.Modules.ORDER,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.ORDER),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger", utils_1.Modules.EVENT_BUS],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.TAX]: {
        key: utils_1.Modules.TAX,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.TAX),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger", utils_1.Modules.EVENT_BUS],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.API_KEY]: {
        key: utils_1.Modules.API_KEY,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.API_KEY),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.STORE]: {
        key: utils_1.Modules.STORE,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.STORE),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.CURRENCY]: {
        key: utils_1.Modules.CURRENCY,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.CURRENCY),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.FILE]: {
        key: utils_1.Modules.FILE,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.FILE),
        isRequired: false,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.NOTIFICATION]: {
        key: utils_1.Modules.NOTIFICATION,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.NOTIFICATION),
        isRequired: false,
        isQueryable: true,
        dependencies: [utils_1.Modules.EVENT_BUS, "logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [utils_1.Modules.INDEX]: {
        key: utils_1.Modules.INDEX,
        defaultPackage: false,
        label: (0, utils_1.upperCaseFirst)(utils_1.Modules.INDEX),
        isRequired: false,
        isQueryable: false,
        dependencies: [
            utils_1.Modules.EVENT_BUS,
            "logger",
            utils_1.ContainerRegistrationKeys.REMOTE_QUERY,
            utils_1.ContainerRegistrationKeys.QUERY,
        ],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
};
exports.MODULE_DEFINITIONS = Object.values(exports.ModulesDefinition);
exports.default = exports.MODULE_DEFINITIONS;
//# sourceMappingURL=definitions.js.map