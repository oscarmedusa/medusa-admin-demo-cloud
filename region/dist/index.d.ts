import { RegionModuleService } from "./services";
import { Modules } from "@medusajs/framework/utils";
declare const _default: import("@medusajs/types").ModuleExports<typeof RegionModuleService> & {
    linkable: {
        region: {
            id: {
                serviceName: Modules.REGION;
                field: "region";
                linkable: "region_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: Modules.REGION;
                field: "region";
                linkable: "region_id";
                primaryKey: "id";
            };
        };
        country: {
            iso_2: {
                serviceName: Modules.REGION;
                field: "country";
                linkable: "country_iso_2";
                primaryKey: "iso_2";
            };
            toJSON: () => {
                serviceName: Modules.REGION;
                field: "country";
                linkable: "country_iso_2";
                primaryKey: "iso_2";
            };
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map