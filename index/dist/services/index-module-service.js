"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const _types_1 = require("../types");
const build_config_1 = require("../utils/build-config");
const default_schema_1 = require("../utils/default-schema");
const gql_to_types_1 = require("../utils/gql-to-types");
class IndexModuleService {
    constructor(container, moduleDeclaration) {
        this.moduleDeclaration = moduleDeclaration;
        this.__hooks = {
            onApplicationStart() {
                return this.onApplicationStart_();
            },
        };
        this.container_ = container;
        this.moduleOptions_ = (moduleDeclaration.options ??
            moduleDeclaration);
        const { [utils_1.Modules.EVENT_BUS]: eventBusModuleService, storageProviderCtr, storageProviderCtrOptions, } = container;
        this.eventBusModuleService_ = eventBusModuleService;
        this.storageProviderCtr_ = storageProviderCtr;
        this.storageProviderCtrOptions_ = storageProviderCtrOptions;
        if (!this.eventBusModuleService_) {
            throw new Error("EventBusModuleService is required for the IndexModule to work");
        }
    }
    async onApplicationStart_() {
        try {
            this.buildSchemaObjectRepresentation_();
            this.storageProvider_ = new this.storageProviderCtr_(this.container_, Object.assign(this.storageProviderCtrOptions_ ?? {}, {
                schemaObjectRepresentation: this.schemaObjectRepresentation_,
                entityMap: this.schemaEntitiesMap_,
            }), this.moduleOptions_);
            this.registerListeners();
            if (this.storageProvider_.onApplicationStart) {
                await this.storageProvider_.onApplicationStart();
            }
            await (0, gql_to_types_1.gqlSchemaToTypes)(this.moduleOptions_.schema ?? default_schema_1.defaultSchema);
        }
        catch (e) {
            console.log(e);
        }
    }
    async query(config) {
        return await this.storageProvider_.query(config);
    }
    registerListeners() {
        const schemaObjectRepresentation = (this.schemaObjectRepresentation_ ??
            {});
        for (const [entityName, schemaEntityObjectRepresentation] of Object.entries(schemaObjectRepresentation)) {
            if (_types_1.schemaObjectRepresentationPropertiesToOmit.includes(entityName)) {
                continue;
            }
            ;
            schemaEntityObjectRepresentation.listeners.forEach((listener) => {
                this.eventBusModuleService_.subscribe(listener, this.storageProvider_.consumeEvent(schemaEntityObjectRepresentation));
            });
        }
    }
    buildSchemaObjectRepresentation_() {
        if (this.schemaObjectRepresentation_) {
            return this.schemaObjectRepresentation_;
        }
        const [objectRepresentation, entityMap] = (0, build_config_1.buildSchemaObjectRepresentation)(this.moduleOptions_.schema ?? default_schema_1.defaultSchema);
        this.schemaObjectRepresentation_ = objectRepresentation;
        this.schemaEntitiesMap_ = entityMap;
        return this.schemaObjectRepresentation_;
    }
}
exports.default = IndexModuleService;
//# sourceMappingURL=index-module-service.js.map