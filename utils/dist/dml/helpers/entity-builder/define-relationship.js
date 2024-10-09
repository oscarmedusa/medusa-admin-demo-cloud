"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineHasOneRelationship = defineHasOneRelationship;
exports.defineHasManyRelationship = defineHasManyRelationship;
exports.defineBelongsToRelationship = defineBelongsToRelationship;
exports.defineManyToManyRelationship = defineManyToManyRelationship;
exports.defineRelationship = defineRelationship;
const core_1 = require("@mikro-orm/core");
const common_1 = require("../../../common");
const foreign_key_1 = require("../../../dal/mikro-orm/decorators/foreign-key");
const entity_1 = require("../../entity");
const has_many_1 = require("../../relations/has-many");
const has_one_1 = require("../../relations/has-one");
const many_to_many_1 = require("../../relations/many-to-many");
const parse_entity_name_1 = require("./parse-entity-name");
/**
 * Validates a many to many relationship without mappedBy and checks if the other side of the relationship is defined and possesses mappedBy.
 * @param MikroORMEntity
 * @param relationship
 * @param relatedEntity
 * @param relatedModelName
 */
function validateManyToManyRelationshipWithoutMappedBy({ MikroORMEntity, relationship, relatedEntity, relatedModelName, }) {
    /**
     * Since we don't have the information about the other side of the
     * relationship, we will try to find all the other side many to many that refers to the current entity.
     * If there is any, we will try to find if at least one of them has a mappedBy.
     */
    const potentialOtherSides = Object.entries(relatedEntity.schema)
        .filter(([, propConfig]) => many_to_many_1.ManyToMany.isManyToMany(propConfig))
        .filter(([prop, propConfig]) => {
        const parsedProp = propConfig.parse(prop);
        const relatedEntity = typeof parsedProp.entity === "function"
            ? parsedProp.entity()
            : undefined;
        if (!relatedEntity) {
            throw new Error(`Invalid relationship reference for "${relatedModelName}.${prop}". Make sure to define the relationship using a factory function`);
        }
        return (0, parse_entity_name_1.parseEntityName)(relatedEntity).modelName === MikroORMEntity.name;
    });
    if (potentialOtherSides.length) {
        const hasMappedBy = potentialOtherSides.some(([, propConfig]) => !!propConfig.parse("").mappedBy);
        if (!hasMappedBy) {
            throw new Error(`Invalid relationship reference for "${MikroORMEntity.name}.${relationship.name}". "mappedBy" should be defined on one side or the other.`);
        }
    }
    else {
        throw new Error(`Invalid relationship reference for "${MikroORMEntity.name}.${relationship.name}". The other side of the relationship is missing.`);
    }
}
/**
 * Defines has one relationship on the Mikro ORM entity.
 */
function defineHasOneRelationship(MikroORMEntity, relationship, { relatedModelName }, cascades) {
    const shouldRemoveRelated = !!cascades.delete?.includes(relationship.name);
    (0, core_1.OneToOne)({
        entity: relatedModelName,
        nullable: relationship.nullable,
        mappedBy: relationship.mappedBy || (0, common_1.camelToSnakeCase)(MikroORMEntity.name),
        cascade: shouldRemoveRelated
            ? ["persist", "soft-remove"]
            : undefined,
    })(MikroORMEntity.prototype, relationship.name);
}
/**
 * Defines has many relationship on the Mikro ORM entity
 */
function defineHasManyRelationship(MikroORMEntity, relationship, { relatedModelName }, cascades) {
    const shouldRemoveRelated = !!cascades.delete?.includes(relationship.name);
    (0, core_1.OneToMany)({
        entity: relatedModelName,
        orphanRemoval: true,
        mappedBy: relationship.mappedBy || (0, common_1.camelToSnakeCase)(MikroORMEntity.name),
        cascade: shouldRemoveRelated
            ? ["persist", "soft-remove"]
            : undefined,
    })(MikroORMEntity.prototype, relationship.name);
}
/**
 * Defines belongs to relationship on the Mikro ORM entity. The belongsTo
 * relationship inspects the related entity for the other side of
 * the relationship and then uses one of the following Mikro ORM
 * relationship.
 *
 * - OneToOne: When the other side uses "hasOne" with "owner: true"
 * - ManyToOne: When the other side uses "hasMany"
 */
function defineBelongsToRelationship(MikroORMEntity, relationship, relatedEntity, { relatedModelName }) {
    const mappedBy = relationship.mappedBy || (0, common_1.camelToSnakeCase)(MikroORMEntity.name);
    const { schema: relationSchema, cascades: relationCascades } = relatedEntity.parse();
    const otherSideRelation = relationSchema[mappedBy];
    /**
     * In DML the relationships are cascaded from parent to child. A belongsTo
     * relationship is always a child, therefore we look at the parent and
     * define a onDelete: cascade when we are included in the delete
     * list of parent cascade.
     */
    const shouldCascade = relationCascades.delete?.includes(mappedBy);
    /**
     * Ensure the mapped by is defined as relationship on the other side
     */
    if (!otherSideRelation) {
        throw new Error(`Missing property "${mappedBy}" on "${relatedModelName}" entity. Make sure to define it as a relationship`);
    }
    function applyForeignKeyAssignationHooks(foreignKeyName) {
        const hookName = `assignRelationFromForeignKeyValue${foreignKeyName}`;
        /**
         * Hook to handle foreign key assignation
         */
        MikroORMEntity.prototype[hookName] = function () {
            /**
             * In case of has one relation, in order to be able to have both ways
             * to associate a relation (through the relation or the foreign key) we need to handle it
             * specifically
             */
            if (has_one_1.HasOne.isHasOne(otherSideRelation)) {
                const relationMeta = this.__meta.relations.find((relation) => relation.name === relationship.name).targetMeta;
                this[relationship.name] ??= (0, core_1.rel)(relationMeta.class, this[foreignKeyName]);
                this[relationship.name] ??= this[relationship.name]?.id;
                return;
            }
            this[relationship.name] ??= this[foreignKeyName];
            this[foreignKeyName] ??= this[relationship.name]?.id;
        };
        /**
         * Execute hook via lifecycle decorators
         */
        (0, core_1.BeforeCreate)()(MikroORMEntity.prototype, hookName);
        (0, core_1.OnInit)()(MikroORMEntity.prototype, hookName);
    }
    /**
     * Otherside is a has many. Hence we should defined a ManyToOne
     */
    if (has_many_1.HasMany.isHasMany(otherSideRelation) ||
        many_to_many_1.ManyToMany.isManyToMany(otherSideRelation)) {
        const foreignKeyName = (0, common_1.camelToSnakeCase)(`${relationship.name}Id`);
        (0, core_1.ManyToOne)({
            entity: relatedModelName,
            columnType: "text",
            mapToPk: true,
            fieldName: foreignKeyName,
            nullable: relationship.nullable,
            onDelete: shouldCascade ? "cascade" : undefined,
        })(MikroORMEntity.prototype, foreignKeyName);
        (0, foreign_key_1.ForeignKey)()(MikroORMEntity.prototype, foreignKeyName);
        if (many_to_many_1.ManyToMany.isManyToMany(otherSideRelation)) {
            (0, core_1.Property)({
                type: relatedModelName,
                persist: false,
                nullable: relationship.nullable,
            })(MikroORMEntity.prototype, relationship.name);
        }
        else {
            // HasMany case
            (0, core_1.ManyToOne)({
                entity: relatedModelName,
                persist: false,
                nullable: relationship.nullable,
            })(MikroORMEntity.prototype, relationship.name);
        }
        applyForeignKeyAssignationHooks(foreignKeyName);
        return;
    }
    /**
     * Otherside is a has one. Hence we should defined a OneToOne
     */
    if (has_one_1.HasOne.isHasOne(otherSideRelation)) {
        const foreignKeyName = (0, common_1.camelToSnakeCase)(`${relationship.name}Id`);
        (0, core_1.OneToOne)({
            entity: relatedModelName,
            nullable: relationship.nullable,
            mappedBy: mappedBy,
            owner: true,
            onDelete: shouldCascade ? "cascade" : undefined,
        })(MikroORMEntity.prototype, relationship.name);
        Object.defineProperty(MikroORMEntity.prototype, foreignKeyName, {
            value: null,
            configurable: true,
            enumerable: true,
            writable: true,
        });
        (0, core_1.Property)({
            type: "string",
            columnType: "text",
            nullable: relationship.nullable,
            persist: false,
        })(MikroORMEntity.prototype, foreignKeyName);
        (0, foreign_key_1.ForeignKey)()(MikroORMEntity.prototype, foreignKeyName);
        applyForeignKeyAssignationHooks(foreignKeyName);
        return;
    }
    /**
     * Other side is some unsupported data-type
     */
    throw new Error(`Invalid relationship reference for "${mappedBy}" on "${relatedModelName}" entity. Make sure to define a hasOne or hasMany relationship`);
}
/**
 * Defines a many to many relationship on the Mikro ORM entity
 */
function defineManyToManyRelationship(MikroORMEntity, relationship, relatedEntity, { relatedModelName, pgSchema, }, { MANY_TO_MANY_TRACKED_RELATIONS }) {
    let mappedBy = relationship.mappedBy;
    let inversedBy;
    let pivotEntityName;
    let pivotTableName;
    /**
     * Validating other side of relationship when mapped by is defined
     */
    if (mappedBy) {
        const otherSideRelation = relatedEntity.parse().schema[mappedBy];
        if (!otherSideRelation) {
            throw new Error(`Missing property "${mappedBy}" on "${relatedModelName}" entity. Make sure to define it as a relationship`);
        }
        if (!many_to_many_1.ManyToMany.isManyToMany(otherSideRelation)) {
            throw new Error(`Invalid relationship reference for "${mappedBy}" on "${relatedModelName}" entity. Make sure to define a manyToMany relationship`);
        }
        /**
         * Check if the other side has defined a mapped by and if that
         * mapping is already tracked as the owner.
         *
         * - If yes, we will inverse our mapped by
         * - Otherwise, we will track ourselves as the owner.
         */
        if (otherSideRelation.parse(mappedBy).mappedBy &&
            MANY_TO_MANY_TRACKED_RELATIONS[`${relatedModelName}.${mappedBy}`]) {
            inversedBy = mappedBy;
            mappedBy = undefined;
        }
        else {
            MANY_TO_MANY_TRACKED_RELATIONS[`${MikroORMEntity.name}.${relationship.name}`] = true;
        }
    }
    else {
        validateManyToManyRelationshipWithoutMappedBy({
            MikroORMEntity,
            relationship,
            relatedEntity,
            relatedModelName,
        });
    }
    /**
     * Validating pivot entity when it is defined and computing
     * its name
     */
    if (relationship.options.pivotEntity) {
        if (typeof relationship.options.pivotEntity !== "function") {
            throw new Error(`Invalid pivotEntity reference for "${MikroORMEntity.name}.${relationship.name}". Make sure to define the pivotEntity using a factory function`);
        }
        const pivotEntity = relationship.options.pivotEntity();
        if (!entity_1.DmlEntity.isDmlEntity(pivotEntity)) {
            throw new Error(`Invalid pivotEntity reference for "${MikroORMEntity.name}.${relationship.name}". Make sure to return a DML entity from the pivotEntity callback`);
        }
        pivotEntityName = (0, parse_entity_name_1.parseEntityName)(pivotEntity).modelName;
    }
    if (!pivotEntityName) {
        /**
         * Pivot table name is created as follows (when not explicitly provided)
         *
         * - Combining both the entity's names.
         * - Sorting them by alphabetical order
         * - Converting them from camelCase to snake_case.
         * - And finally pluralizing the second entity name.
         */
        pivotTableName =
            relationship.options.pivotTable ??
                [MikroORMEntity.name.toLowerCase(), relatedModelName.toLowerCase()]
                    .sort()
                    .map((token, index) => {
                    if (index === 1) {
                        return (0, common_1.pluralize)((0, common_1.camelToSnakeCase)(token));
                    }
                    return (0, common_1.camelToSnakeCase)(token);
                })
                    .join("_");
    }
    (0, core_1.ManyToMany)({
        entity: relatedModelName,
        ...(pivotTableName
            ? {
                pivotTable: pgSchema
                    ? `${pgSchema}.${pivotTableName}`
                    : pivotTableName,
            }
            : {}),
        ...(pivotEntityName ? { pivotEntity: pivotEntityName } : {}),
        ...(mappedBy ? { mappedBy: mappedBy } : {}),
        ...(inversedBy ? { inversedBy: inversedBy } : {}),
    })(MikroORMEntity.prototype, relationship.name);
}
/**
 * Defines a DML entity schema field as a Mikro ORM relationship
 */
function defineRelationship(MikroORMEntity, relationship, cascades, context) {
    /**
     * We expect the relationship.entity to be a function that
     * lazily returns the related entity
     */
    const relatedEntity = typeof relationship.entity === "function"
        ? relationship.entity()
        : undefined;
    /**
     * Since we don't type-check relationships, we should validate
     * them at runtime
     */
    if (!relatedEntity) {
        throw new Error(`Invalid relationship reference for "${MikroORMEntity.name}.${relationship.name}". Make sure to define the relationship using a factory function`);
    }
    /**
     * Ensure the return value is a DML entity instance
     */
    if (!entity_1.DmlEntity.isDmlEntity(relatedEntity)) {
        throw new Error(`Invalid relationship reference for "${MikroORMEntity.name}.${relationship.name}". Make sure to return a DML entity from the relationship callback`);
    }
    const { modelName, tableName, pgSchema } = (0, parse_entity_name_1.parseEntityName)(relatedEntity);
    const relatedEntityInfo = {
        relatedModelName: modelName,
        relatedTableName: tableName,
        pgSchema,
    };
    /**
     * Defining relationships
     */
    switch (relationship.type) {
        case "hasOne":
            defineHasOneRelationship(MikroORMEntity, relationship, relatedEntityInfo, cascades);
            break;
        case "hasMany":
            defineHasManyRelationship(MikroORMEntity, relationship, relatedEntityInfo, cascades);
            break;
        case "belongsTo":
            defineBelongsToRelationship(MikroORMEntity, relationship, relatedEntity, relatedEntityInfo);
            break;
        case "manyToMany":
            defineManyToManyRelationship(MikroORMEntity, relationship, relatedEntity, relatedEntityInfo, context);
            break;
    }
}
//# sourceMappingURL=define-relationship.js.map