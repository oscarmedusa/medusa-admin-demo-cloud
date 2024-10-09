"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinerConfig = void 0;
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("./models");
const schema_1 = __importDefault(require("./schema"));
exports.joinerConfig = (0, utils_1.defineJoinerConfig)(utils_1.Modules.PRICING, {
    schema: schema_1.default,
    models: [_models_1.PriceSet, _models_1.PriceList, _models_1.Price, _models_1.PricePreference],
});
//# sourceMappingURL=joiner-config.js.map