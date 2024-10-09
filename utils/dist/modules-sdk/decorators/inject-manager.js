"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectManager = InjectManager;
const context_parameter_1 = require("./context-parameter");
function InjectManager(managerProperty) {
    return function (target, propertyKey, descriptor) {
        if (!target.MedusaContextIndex_) {
            throw new Error(`To apply @InjectManager you have to flag a parameter using @MedusaContext`);
        }
        managerProperty ??= "baseRepository_";
        const originalMethod = descriptor.value;
        const argIndex = target.MedusaContextIndex_[propertyKey];
        descriptor.value = function (...args) {
            const originalContext = args[argIndex] ?? {};
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
            const resourceWithManager = !managerProperty
                ? this
                : this[managerProperty];
            copiedContext.manager =
                originalContext.manager ?? resourceWithManager.getFreshManager();
            if (originalContext?.transactionManager) {
                copiedContext.transactionManager = originalContext?.transactionManager;
            }
            copiedContext.__type = context_parameter_1.MedusaContextType;
            args[argIndex] = copiedContext;
            return originalMethod.apply(this, args);
        };
    };
}
//# sourceMappingURL=inject-manager.js.map