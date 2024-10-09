"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mikroOrmUpdateDeletedAtRecursively = void 0;
const core_1 = require("@mikro-orm/core");
const build_query_1 = require("../../modules-sdk/build-query");
function detectCircularDependency(manager, entityMetadata, visited = new Set(), shouldStop = false) {
    if (shouldStop) {
        return;
    }
    visited.add(entityMetadata.className);
    const relations = entityMetadata.relations;
    const relationsToCascade = relations.filter((relation) => relation.cascade?.includes("soft-remove"));
    for (const relation of relationsToCascade) {
        const branchVisited = new Set(Array.from(visited));
        const isSelfCircularDependency = entityMetadata.class === relation.entity();
        if (!isSelfCircularDependency && branchVisited.has(relation.name)) {
            const dependencies = Array.from(visited);
            dependencies.push(entityMetadata.className);
            const circularDependencyStr = dependencies.join(" -> ");
            throw new Error(`Unable to soft delete the ${relation.name}. Circular dependency detected: ${circularDependencyStr}`);
        }
        branchVisited.add(relation.name);
        const relationEntityMetadata = manager
            .getDriver()
            .getMetadata()
            .get(relation.type);
        detectCircularDependency(manager, relationEntityMetadata, branchVisited, isSelfCircularDependency);
    }
}
async function performCascadingSoftDeletion(manager, entity, value) {
    if (!("deleted_at" in entity))
        return;
    entity.deleted_at = value;
    const entityName = entity.constructor.name;
    const relations = manager.getDriver().getMetadata().get(entityName).relations;
    const relationsToCascade = relations.filter((relation) => relation.cascade?.includes("soft-remove"));
    for (const relation of relationsToCascade) {
        let entityRelation = entity[relation.name];
        // Handle optional relationships
        if (relation.nullable && !entityRelation) {
            continue;
        }
        const retrieveEntity = async () => {
            const query = (0, build_query_1.buildQuery)({
                id: entity.id,
            }, {
                relations: [relation.name],
                withDeleted: true,
            });
            return await manager.findOne(entity.constructor.name, query.where, query.options);
        };
        entityRelation = await retrieveEntity();
        entityRelation = entityRelation[relation.name];
        if (!entityRelation) {
            continue;
        }
        const isCollection = "toArray" in entityRelation;
        let relationEntities = [];
        if (isCollection) {
            if (!entityRelation.isInitialized()) {
                entityRelation = await retrieveEntity();
                entityRelation = entityRelation[relation.name];
            }
            relationEntities = entityRelation.getItems();
        }
        else {
            const wrappedEntity = (0, core_1.wrap)(entityRelation);
            let initializedEntityRelation = entityRelation;
            if (!wrappedEntity.isInitialized()) {
                initializedEntityRelation = await (0, core_1.wrap)(entityRelation).init();
            }
            relationEntities = [initializedEntityRelation];
        }
        if (!relationEntities.length) {
            continue;
        }
        await (0, exports.mikroOrmUpdateDeletedAtRecursively)(manager, relationEntities, value);
    }
    await manager.persist(entity);
}
const mikroOrmUpdateDeletedAtRecursively = async (manager, entities, value) => {
    for (const entity of entities) {
        const entityMetadata = manager
            .getDriver()
            .getMetadata()
            .get(entity.constructor.name);
        detectCircularDependency(manager, entityMetadata);
        await performCascadingSoftDeletion(manager, entity, value);
    }
};
exports.mikroOrmUpdateDeletedAtRecursively = mikroOrmUpdateDeletedAtRecursively;
//# sourceMappingURL=utils.js.map