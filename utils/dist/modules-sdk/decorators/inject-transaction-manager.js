"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectTransactionManager = InjectTransactionManager;
const common_1 = require("../../common");
const context_parameter_1 = require("./context-parameter");
function InjectTransactionManager(shouldForceTransactionOrManagerProperty = () => false, managerProperty) {
    return function (target, propertyKey, descriptor) {
        if (!target.MedusaContextIndex_) {
            throw new Error(`An error occured applying decorator '@InjectTransactionManager' to method ${String(propertyKey)}: Missing parameter with flag @MedusaContext`);
        }
        const originalMethod = descriptor.value;
        const shouldForceTransaction = !(0, common_1.isString)(shouldForceTransactionOrManagerProperty)
            ? shouldForceTransactionOrManagerProperty
            : () => false;
        managerProperty = (0, common_1.isString)(shouldForceTransactionOrManagerProperty)
            ? shouldForceTransactionOrManagerProperty
            : managerProperty ?? "baseRepository_";
        const argIndex = target.MedusaContextIndex_[propertyKey];
        descriptor.value = async function (...args) {
            const shouldForceTransactionRes = shouldForceTransaction(target);
            const context = args[argIndex] ?? {};
            const originalContext = args[argIndex] ?? {};
            if (!shouldForceTransactionRes && context?.transactionManager) {
                return await originalMethod.apply(this, args);
            }
            return await (!managerProperty
                ? this
                : this[managerProperty]).transaction(async (transactionManager) => {
                const copiedContext = {};
                for (const key in originalContext) {
                    if (key === "manager" || key === "transactionManager") {
                        continue;
                    }
                    Object.defineProperty(copiedContext, key, {
                        get: function () {
                            return originalContext[key];
                        },
                        set: function (value) {
                            originalContext[key] = value;
                        },
                    });
                }
                copiedContext.transactionManager = transactionManager;
                if (originalContext?.manager) {
                    copiedContext.manager = originalContext?.manager;
                }
                copiedContext.__type = context_parameter_1.MedusaContextType;
                args[argIndex] = copiedContext;
                return await originalMethod.apply(this, args);
            }, {
                transaction: context?.transactionManager,
                isolationLevel: context?.isolationLevel,
                enableNestedTransactions: context.enableNestedTransactions ?? false,
            });
        };
    };
}
//# sourceMappingURL=inject-transaction-manager.js.map