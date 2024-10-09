"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGraphQLRelationship = setGraphQLRelationship;
const common_1 = require("../../../common");
const entity_1 = require("../../entity");
const belongs_to_1 = require("../../relations/belongs-to");
const has_many_1 = require("../../relations/has-many");
const has_one_1 = require("../../relations/has-one");
const many_to_many_1 = require("../../relations/many-to-many");
const parse_entity_name_1 = require("../entity-builder/parse-entity-name");
function defineRelationships(modelName, relationship, relatedEntity, { relatedModelName }) {
    let extra;
    const fieldName = relationship.name;
    const mappedBy = relationship.mappedBy || (0, common_1.camelToSnakeCase)(modelName);
    const { schema: relationSchema } = relatedEntity.parse();
    const otherSideRelation = relationSchema[mappedBy];
    if (relationship.options?.mappedBy && has_one_1.HasOne.isHasOne(relationship)) {
        const otherSideFieldName = relationship.options.mappedBy;
        extra = `extend type ${relatedModelName} {\n  ${otherSideFieldName}: ${modelName}!\n}`;
    }
    let isArray = false;
    /**
     * Otherside is a has many. Hence we should defined a ManyToOne
     */
    if (has_many_1.HasMany.isHasMany(otherSideRelation) ||
        many_to_many_1.ManyToMany.isManyToMany(relationship) ||
        (belongs_to_1.BelongsTo.isBelongsTo(otherSideRelation) &&
            has_many_1.HasMany.isHasMany(relationship))) {
        isArray = true;
    }
    return {
        attribute: `${fieldName}: ${isArray ? "[" : ""}${relatedModelName}${isArray ? "]" : ""}` + (relationship.nullable ? "" : "!"),
        extra,
    };
}
function setGraphQLRelationship(entityName, relationship) {
    const relatedEntity = typeof relationship.entity === "function"
        ? relationship.entity()
        : undefined;
    if (!relatedEntity) {
        throw new Error(`Invalid relationship reference for "${entityName}.${relationship.name}". Make sure to define the relationship using a factory function`);
    }
    if (!entity_1.DmlEntity.isDmlEntity(relatedEntity)) {
        throw new Error(`Invalid relationship reference for "${entityName}.${relationship.name}". Make sure to return a DML entity from the relationship callback`);
    }
    const { modelName, tableName, pgSchema } = (0, parse_entity_name_1.parseEntityName)(relatedEntity);
    const relatedEntityInfo = {
        relatedModelName: modelName,
        relatedTableName: tableName,
        pgSchema,
    };
    return defineRelationships(entityName, relationship, relatedEntity, relatedEntityInfo);
}
//# sourceMappingURL=set-relationship.js.map