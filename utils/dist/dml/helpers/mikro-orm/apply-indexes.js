"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyIndexes = applyIndexes;
exports.applyEntityIndexes = applyEntityIndexes;
const core_1 = require("@mikro-orm/core");
const common_1 = require("../../../common");
const build_indexes_1 = require("../mikro-orm/build-indexes");
/**
 * Creates indexes for a given field
 */
function applyIndexes(MikroORMEntity, tableName, field) {
    field.indexes.forEach((index) => {
        const providerEntityIdIndexStatement = (0, common_1.createPsqlIndexStatementHelper)({
            tableName,
            columns: [field.fieldName],
            unique: index.type === "unique",
            where: "deleted_at IS NULL",
        });
        providerEntityIdIndexStatement.MikroORMIndex()(MikroORMEntity);
    });
}
/**
 * Creates indexes for a MikroORM entity
 *
 * Default Indexes:
 *  - Foreign key indexes will be applied to all manyToOne relationships.
 */
function applyEntityIndexes(MikroORMEntity, tableName, entityIndexes = []) {
    const foreignKeyIndexes = applyForeignKeyIndexes(MikroORMEntity);
    const indexes = [...entityIndexes, ...foreignKeyIndexes];
    indexes.forEach((index) => {
        (0, build_indexes_1.validateIndexFields)(MikroORMEntity, index);
        const entityIndexStatement = (0, common_1.createPsqlIndexStatementHelper)({
            tableName,
            name: index.name,
            columns: index.on,
            unique: index.unique,
            where: index.where,
        });
        entityIndexStatement.MikroORMIndex()(MikroORMEntity);
    });
}
/*
  When a "oneToMany" relationship is found on the MikroORM entity, we create an index by default
  on the foreign key property.
*/
function applyForeignKeyIndexes(MikroORMEntity) {
    const foreignKeyIndexes = [];
    for (const foreignKey of getEntityForeignKeys(MikroORMEntity)) {
        foreignKeyIndexes.push({
            on: [foreignKey],
            where: "deleted_at IS NULL",
        });
    }
    return foreignKeyIndexes;
}
function getEntityForeignKeys(MikroORMEntity) {
    const properties = core_1.MetadataStorage.getMetadataFromDecorator(MikroORMEntity).properties;
    return Object.keys(properties).filter((propertyName) => properties[propertyName].isForeignKey);
}
//# sourceMappingURL=apply-indexes.js.map