import { CurrencyModuleService } from "./services";
import { Modules } from "@medusajs/framework/utils";
declare const _default: import("@medusajs/types").ModuleExports<typeof CurrencyModuleService> & {
    linkable: {
        currency: {
            code: {
                serviceName: Modules.CURRENCY;
                field: "currency";
                linkable: "currency_code";
                primaryKey: "code";
            };
            toJSON: () => {
                serviceName: Modules.CURRENCY;
                field: "currency";
                linkable: "currency_code";
                primaryKey: "code";
            };
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map