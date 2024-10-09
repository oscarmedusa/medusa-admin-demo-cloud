"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldForceTransaction = shouldForceTransaction;
exports.doNotForceTransaction = doNotForceTransaction;
const modules_sdk_1 = require("@medusajs/framework/modules-sdk");
__exportStar(require("./generate-entity"), exports);
__exportStar(require("./generate-schema"), exports);
function shouldForceTransaction(target) {
    return target.moduleDeclaration?.resources === modules_sdk_1.MODULE_RESOURCE_TYPE.ISOLATED;
}
function doNotForceTransaction() {
    return false;
}
//# sourceMappingURL=index.js.map