"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PostgresProvider_isReady_;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresProvider = void 0;
const types_1 = require("@medusajs/framework/types");
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("../models");
const utils_2 = require("../utils");
const flatten_object_keys_1 = require("../utils/flatten-object-keys");
const normalize_fields_selection_1 = require("../utils/normalize-fields-selection");
class PostgresProvider {
    constructor(container, options, moduleOptions) {
        _PostgresProvider_isReady_.set(this, void 0);
        this.eventActionToMethodMap_ = {
            created: "onCreate",
            updated: "onUpdate",
            deleted: "onDelete",
            attached: "onAttach",
            detached: "onDetach",
        };
        this.manager_ = container.manager;
        this.query_ = container.query;
        this.moduleOptions_ = moduleOptions;
        this.baseRepository_ = container.baseRepository;
        this.schemaObjectRepresentation_ = options.schemaObjectRepresentation;
        this.schemaEntitiesMap_ = options.entityMap;
        // Add a new column for each key that can be found in the jsonb data column to perform indexes and query on it.
        // So far, the execution time is about the same
        /*;(async () => {
          const query = [
            ...new Set(
              Object.keys(this.schemaObjectRepresentation_)
                .filter(
                  (key) =>
                    ![
                      "_serviceNameModuleConfigMap",
                      "_schemaPropertiesMap",
                    ].includes(key)
                )
                .map((key) => {
                  return this.schemaObjectRepresentation_[key].fields.filter(
                    (field) => !field.includes(".")
                  )
                })
                .flat()
            ),
          ].map(
            (field) =>
              "ALTER TABLE index_data ADD IF NOT EXISTS " +
              field +
              " text GENERATED ALWAYS AS (NEW.data->>'" +
              field +
              "') STORED"
          )
          await this.manager_.execute(query.join(";"))
        })()*/
    }
    async onApplicationStart() {
        let initalizedOk = () => { };
        let initalizedNok = () => { };
        __classPrivateFieldSet(this, _PostgresProvider_isReady_, new Promise((resolve, reject) => {
            initalizedOk = resolve;
            initalizedNok = reject;
        }), "f");
        await (0, utils_2.createPartitions)(this.schemaObjectRepresentation_, this.manager_.fork())
            .then(initalizedOk)
            .catch(initalizedNok);
    }
    static parseData(data, schemaEntityObjectRepresentation) {
        const data_ = Array.isArray(data) ? data : [data];
        // Always keep the id in the entity properties
        const entityProperties = ["id"];
        const parentsProperties = {};
        /**
         * Split fields into entity properties and parents properties
         */
        schemaEntityObjectRepresentation.fields.forEach((field) => {
            if (field.includes(".")) {
                const parentAlias = field.split(".")[0];
                const parentSchemaObjectRepresentation = schemaEntityObjectRepresentation.parents.find((parent) => parent.ref.alias === parentAlias);
                if (!parentSchemaObjectRepresentation) {
                    throw new Error(`IndexModule error, unable to parse data for ${schemaEntityObjectRepresentation.entity}. The parent schema object representation could not be found for the alias ${parentAlias} for the entity ${schemaEntityObjectRepresentation.entity}.`);
                }
                parentsProperties[parentSchemaObjectRepresentation.ref.entity] ??= [];
                parentsProperties[parentSchemaObjectRepresentation.ref.entity].push(field);
            }
            else {
                entityProperties.push(field);
            }
        });
        return {
            data: data_,
            entityProperties,
            parentsProperties,
        };
    }
    static parseMessageData(message) {
        const isExpectedFormat = (0, utils_1.isDefined)(message?.data) && (0, utils_1.isDefined)(message?.metadata?.action);
        if (!isExpectedFormat) {
            return;
        }
        const result = {
            action: "",
            data: [],
            ids: [],
        };
        result.action = message.metadata.action;
        result.data = message.data;
        result.data = Array.isArray(result.data) ? result.data : [result.data];
        result.ids = result.data.map((d) => d.id);
        return result;
    }
    consumeEvent(schemaEntityObjectRepresentation) {
        return async (data) => {
            await __classPrivateFieldGet(this, _PostgresProvider_isReady_, "f");
            const data_ = Array.isArray(data.data)
                ? data.data
                : [data.data];
            let ids = data_.map((d) => d.id);
            let action = data.name.split(".").pop() || "";
            const parsedMessage = PostgresProvider.parseMessageData(data);
            if (parsedMessage) {
                action = parsedMessage.action;
                ids = parsedMessage.ids;
            }
            const { fields, alias } = schemaEntityObjectRepresentation;
            const { data: entityData } = await this.query_.graph({
                entity: alias,
                filters: {
                    id: ids,
                },
                fields: [...new Set(["id", ...fields])],
            });
            const argument = {
                entity: schemaEntityObjectRepresentation.entity,
                data: entityData,
                schemaEntityObjectRepresentation,
            };
            const targetMethod = this.eventActionToMethodMap_[action];
            if (!targetMethod) {
                return;
            }
            await this[targetMethod](argument);
        };
    }
    async query(config, sharedContext = {}) {
        await __classPrivateFieldGet(this, _PostgresProvider_isReady_, "f");
        const { keepFilteredEntities, fields = [], filters = {}, joinFilters = {}, } = config;
        const { take, skip, order: inputOrderBy = {} } = config.pagination ?? {};
        const select = (0, normalize_fields_selection_1.normalizeFieldsSelection)(fields);
        const where = (0, flatten_object_keys_1.flattenObjectKeys)(filters);
        const joinWhere = (0, flatten_object_keys_1.flattenObjectKeys)(joinFilters);
        const orderBy = (0, flatten_object_keys_1.flattenObjectKeys)(inputOrderBy);
        const { manager } = sharedContext;
        let hasPagination = false;
        if ((0, utils_1.isDefined)(skip)) {
            hasPagination = true;
        }
        const connection = manager.getConnection();
        const qb = new utils_2.QueryBuilder({
            schema: this.schemaObjectRepresentation_,
            entityMap: this.schemaEntitiesMap_,
            knex: connection.getKnex(),
            selector: {
                select,
                where,
                joinWhere,
            },
            options: {
                skip,
                take,
                keepFilteredEntities,
                orderBy,
            },
        });
        const sql = qb.buildQuery(hasPagination, !!keepFilteredEntities);
        let resultSet = await manager.execute(sql);
        const count = hasPagination ? +(resultSet[0]?.count ?? 0) : undefined;
        if (keepFilteredEntities) {
            const mainEntity = Object.keys(select)[0];
            const ids = resultSet.map((r) => r[`${mainEntity}.id`]);
            if (ids.length) {
                return await this.query({
                    fields,
                    joinFilters,
                    filters: {
                        [mainEntity]: {
                            id: ids,
                        },
                    },
                    pagination: undefined,
                    keepFilteredEntities: false,
                }, sharedContext);
            }
        }
        return {
            data: qb.buildObjectFromResultset(resultSet),
            metadata: hasPagination
                ? {
                    count: count,
                    skip,
                    take,
                }
                : undefined,
        };
    }
    /**
     * Create the index entry and the index relation entry when this event is emitted.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @param sharedContext
     * @protected
     */
    async onCreate({ entity, data, schemaEntityObjectRepresentation, }, sharedContext = {}) {
        const { transactionManager: em } = sharedContext;
        const indexRepository = em.getRepository(_models_1.IndexData);
        const indexRelationRepository = em.getRepository(_models_1.IndexRelation);
        const { data: data_, entityProperties, parentsProperties, } = PostgresProvider.parseData(data, schemaEntityObjectRepresentation);
        /**
         * Loop through the data and create index entries for each entity as well as the
         * index relation entries if the entity has parents
         */
        for (const entityData of data_) {
            /**
             * Clean the entity data to only keep the properties that are defined in the schema
             */
            const cleanedEntityData = entityProperties.reduce((acc, property) => {
                acc[property] = entityData[property];
                return acc;
            }, {});
            await indexRepository.upsert({
                id: cleanedEntityData.id,
                name: entity,
                data: cleanedEntityData,
            });
            /**
             * Retrieve the parents to attach it to the index entry.
             */
            for (const [parentEntity, parentProperties] of Object.entries(parentsProperties)) {
                const parentAlias = parentProperties[0].split(".")[0];
                const parentData = entityData[parentAlias];
                if (!parentData) {
                    continue;
                }
                const parentDataCollection = Array.isArray(parentData)
                    ? parentData
                    : [parentData];
                for (const parentData_ of parentDataCollection) {
                    await indexRepository.upsert({
                        id: parentData_.id,
                        name: parentEntity,
                        data: parentData_,
                    });
                    const parentIndexRelationEntry = indexRelationRepository.create({
                        parent_id: parentData_.id,
                        parent_name: parentEntity,
                        child_id: cleanedEntityData.id,
                        child_name: entity,
                        pivot: `${parentEntity}-${entity}`,
                    });
                    indexRelationRepository.persist(parentIndexRelationEntry);
                }
            }
        }
    }
    /**
     * Update the index entry when this event is emitted.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @param sharedContext
     * @protected
     */
    async onUpdate({ entity, data, schemaEntityObjectRepresentation, }, sharedContext = {}) {
        const { transactionManager: em } = sharedContext;
        const indexRepository = em.getRepository(_models_1.IndexData);
        const { data: data_, entityProperties } = PostgresProvider.parseData(data, schemaEntityObjectRepresentation);
        await indexRepository.upsertMany(data_.map((entityData) => {
            return {
                id: entityData.id,
                name: entity,
                data: entityProperties.reduce((acc, property) => {
                    acc[property] = entityData[property];
                    return acc;
                }, {}),
            };
        }));
    }
    /**
     * Delete the index entry when this event is emitted.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @param sharedContext
     * @protected
     */
    async onDelete({ entity, data, schemaEntityObjectRepresentation, }, sharedContext = {}) {
        const { transactionManager: em } = sharedContext;
        const indexRepository = em.getRepository(_models_1.IndexData);
        const indexRelationRepository = em.getRepository(_models_1.IndexRelation);
        const { data: data_ } = PostgresProvider.parseData(data, schemaEntityObjectRepresentation);
        const ids = data_.map((entityData) => entityData.id);
        await indexRepository.nativeDelete({
            id: { $in: ids },
            name: entity,
        });
        await indexRelationRepository.nativeDelete({
            $or: [
                {
                    parent_id: { $in: ids },
                    parent_name: entity,
                },
                {
                    child_id: { $in: ids },
                    child_name: entity,
                },
            ],
        });
    }
    /**
     * event emitted from the link modules to attach a link entity to its parent and child entities from the linked modules.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @protected
     */
    async onAttach({ entity, data, schemaEntityObjectRepresentation, }, sharedContext = {}) {
        const { transactionManager: em } = sharedContext;
        const indexRepository = em.getRepository(_models_1.IndexData);
        const indexRelationRepository = em.getRepository(_models_1.IndexRelation);
        const { data: data_, entityProperties } = PostgresProvider.parseData(data, schemaEntityObjectRepresentation);
        /**
         * Retrieve the property that represent the foreign key related to the parent entity of the link entity.
         * Then from the service name of the parent entity, retrieve the entity name using the linkable keys.
         */
        const parentPropertyId = schemaEntityObjectRepresentation.moduleConfig.relationships[0].foreignKey;
        const parentServiceName = schemaEntityObjectRepresentation.moduleConfig.relationships[0]
            .serviceName;
        const parentEntityName = this.schemaObjectRepresentation_._serviceNameModuleConfigMap[parentServiceName].linkableKeys?.[parentPropertyId];
        if (!parentEntityName) {
            throw new Error(`IndexModule error, unable to handle attach event for ${entity}. The parent entity name could not be found using the linkable keys from the module ${parentServiceName}.`);
        }
        /**
         * Retrieve the property that represent the foreign key related to the child entity of the link entity.
         * Then from the service name of the child entity, retrieve the entity name using the linkable keys.
         */
        const childPropertyId = schemaEntityObjectRepresentation.moduleConfig.relationships[1].foreignKey;
        const childServiceName = schemaEntityObjectRepresentation.moduleConfig.relationships[1]
            .serviceName;
        const childEntityName = this.schemaObjectRepresentation_._serviceNameModuleConfigMap[childServiceName].linkableKeys?.[childPropertyId];
        if (!childEntityName) {
            throw new Error(`IndexModule error, unable to handle attach event for ${entity}. The child entity name could not be found using the linkable keys from the module ${childServiceName}.`);
        }
        for (const entityData of data_) {
            /**
             * Clean the link entity data to only keep the properties that are defined in the schema
             */
            const cleanedEntityData = entityProperties.reduce((acc, property) => {
                acc[property] = entityData[property];
                return acc;
            }, {});
            await indexRepository.upsert({
                id: cleanedEntityData.id,
                name: entity,
                data: cleanedEntityData,
            });
            /**
             * Create the index relation entries for the parent entity and the child entity
             */
            const parentIndexRelationEntry = indexRelationRepository.create({
                parent_id: entityData[parentPropertyId],
                parent_name: parentEntityName,
                child_id: cleanedEntityData.id,
                child_name: entity,
                pivot: `${parentEntityName}-${entity}`,
            });
            const childIndexRelationEntry = indexRelationRepository.create({
                parent_id: cleanedEntityData.id,
                parent_name: entity,
                child_id: entityData[childPropertyId],
                child_name: childEntityName,
                pivot: `${entity}-${childEntityName}`,
            });
            indexRelationRepository.persist([
                parentIndexRelationEntry,
                childIndexRelationEntry,
            ]);
        }
    }
    /**
     * Event emitted from the link modules to detach a link entity from its parent and child entities from the linked modules.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @param sharedContext
     * @protected
     */
    async onDetach({ entity, data, schemaEntityObjectRepresentation, }, sharedContext = {}) {
        const { transactionManager: em } = sharedContext;
        const indexRepository = em.getRepository(_models_1.IndexData);
        const indexRelationRepository = em.getRepository(_models_1.IndexRelation);
        const { data: data_ } = PostgresProvider.parseData(data, schemaEntityObjectRepresentation);
        const ids = data_.map((entityData) => entityData.id);
        await indexRepository.nativeDelete({
            id: { $in: ids },
            name: entity,
        });
        await indexRelationRepository.nativeDelete({
            $or: [
                {
                    parent_id: { $in: ids },
                    parent_name: entity,
                },
                {
                    child_id: { $in: ids },
                    child_name: entity,
                },
            ],
        });
    }
}
exports.PostgresProvider = PostgresProvider;
_PostgresProvider_isReady_ = new WeakMap();
__decorate([
    (0, utils_1.InjectManager)("baseRepository_"),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostgresProvider.prototype, "query", null);
__decorate([
    (0, utils_1.InjectTransactionManager)("baseRepository_"),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostgresProvider.prototype, "onCreate", null);
__decorate([
    (0, utils_1.InjectTransactionManager)("baseRepository_"),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostgresProvider.prototype, "onUpdate", null);
__decorate([
    (0, utils_1.InjectTransactionManager)("baseRepository_"),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostgresProvider.prototype, "onDelete", null);
__decorate([
    (0, utils_1.InjectTransactionManager)("baseRepository_"),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostgresProvider.prototype, "onAttach", null);
__decorate([
    (0, utils_1.InjectTransactionManager)("baseRepository_"),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostgresProvider.prototype, "onDetach", null);
//# sourceMappingURL=postgres-provider.js.map