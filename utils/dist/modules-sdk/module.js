"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = Module;
const medusa_service_1 = require("./medusa-service");
const joiner_config_builder_1 = require("./joiner-config-builder");
const dml_1 = require("../dml");
/**
 * Wrapper to build the module export and auto generate the joiner config if not already provided in the module service, as well as
 * return a linkable object based on the models
 *
 * @param serviceName
 * @param service
 * @param loaders
 */
function Module(serviceName, { service, loaders }) {
    const modelObjects = service[medusa_service_1.MedusaServiceModelObjectsSymbol] ?? {};
    service.prototype.__joinerConfig ??= () => (0, joiner_config_builder_1.defineJoinerConfig)(serviceName, {
        models: Object.keys(modelObjects).length
            ? Object.values(modelObjects)
            : undefined,
    });
    let linkable = {};
    if (Object.keys(modelObjects)?.length) {
        const dmlObjects = Object.entries(modelObjects).filter(([, model]) => dml_1.DmlEntity.isDmlEntity(model));
        if (dmlObjects.length) {
            linkable = (0, joiner_config_builder_1.buildLinkConfigFromModelObjects)(serviceName, modelObjects);
        }
        else {
            linkable = (0, joiner_config_builder_1.buildLinkConfigFromLinkableKeys)(serviceName, service.prototype.__joinerConfig().linkableKeys);
        }
    }
    return {
        service,
        loaders,
        linkable,
    };
}
//# sourceMappingURL=module.js.map