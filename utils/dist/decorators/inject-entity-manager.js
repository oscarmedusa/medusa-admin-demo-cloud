"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectEntityManager = InjectEntityManager;
const decorators_1 = require("../modules-sdk/decorators");
// @deprecated Use InjectManager instead
function InjectEntityManager(shouldForceTransaction = () => false, managerProperty = "manager_") {
    return function (target, propertyKey, descriptor) {
        if (!target.MedusaContextIndex_) {
            throw new Error(`To apply @InjectEntityManager you have to flag a parameter using @MedusaContext`);
        }
        const originalMethod = descriptor.value;
        const argIndex = target.MedusaContextIndex_[propertyKey];
        descriptor.value = async function (...args) {
            const shouldForceTransactionRes = shouldForceTransaction(target);
            const context = args[argIndex] ?? {};
            if (!shouldForceTransactionRes && context?.transactionManager) {
                return await originalMethod.apply(this, args);
            }
            return await (managerProperty === false
                ? this
                : this[managerProperty]).transaction(async (transactionManager) => {
                args[argIndex] = args[argIndex] ?? { __type: decorators_1.MedusaContextType };
                args[argIndex].transactionManager = transactionManager;
                return await originalMethod.apply(this, args);
            }, {
                transaction: context?.transactionManager,
                isolationLevel: context?.isolationLevel,
                enableNestedTransactions: context.enableNestedTransactions ?? false,
            });
        };
    };
}
//# sourceMappingURL=inject-entity-manager.js.map