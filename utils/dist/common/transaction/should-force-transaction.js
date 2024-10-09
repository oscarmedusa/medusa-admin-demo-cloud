"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldForceTransaction = shouldForceTransaction;
function shouldForceTransaction(target) {
    return target.moduleDeclaration?.resources === "isolated";
}
//# sourceMappingURL=should-force-transaction.js.map