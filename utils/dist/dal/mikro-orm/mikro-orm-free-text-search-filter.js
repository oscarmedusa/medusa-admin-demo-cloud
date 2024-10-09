"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mikroOrmFreeTextSearchFilterOptionsFactory = exports.FreeTextSearchFilterKey = void 0;
const core_1 = require("@mikro-orm/core");
exports.FreeTextSearchFilterKey = "freeTextSearch";
function getEntityProperties(entity) {
    return (entity?.prototype.__meta?.properties ??
        entity.meta?.properties);
}
function retrieveRelationsConstraints(relation, models, searchValue, visited = new Set(), shouldStop = false) {
    if (shouldStop || !relation.searchable) {
        return;
    }
    const relationClassName = relation.targetMeta.className;
    visited.add(relationClassName);
    const relationFreeTextSearchWhere = [];
    const relationClass = models.find((m) => m.name === relation.type);
    const relationProperties = getEntityProperties(relationClass);
    for (const propertyConfiguration of Object.values(relationProperties)) {
        if (!propertyConfiguration.searchable ||
            propertyConfiguration.reference !== core_1.ReferenceType.SCALAR) {
            continue;
        }
        relationFreeTextSearchWhere.push({
            [propertyConfiguration.name]: {
                $ilike: `%${searchValue}%`,
            },
        });
    }
    const innerRelations = relationClass?.prototype.__meta?.relations ??
        relationClass.meta?.relations;
    for (const innerRelation of innerRelations) {
        const branchVisited = new Set(Array.from(visited));
        const innerRelationClassName = innerRelation.targetMeta.className;
        const isSelfCircularDependency = innerRelationClassName === relationClassName;
        if (!isSelfCircularDependency &&
            branchVisited.has(innerRelationClassName)) {
            continue;
        }
        branchVisited.add(innerRelationClassName);
        const innerRelationName = !innerRelation.mapToPk
            ? innerRelation.name
            : relation.targetMeta.relations.find((r) => r.type === innerRelation.type && !r.mapToPk)?.name;
        if (!innerRelationName) {
            throw new Error(`Unable to retrieve the counter part relation definition for the mapToPk relation ${innerRelation.name} on entity ${relation.name}`);
        }
        const relationConstraints = retrieveRelationsConstraints({
            name: innerRelationName,
            targetMeta: innerRelation.targetMeta,
            searchable: innerRelation.searchable,
            mapToPk: innerRelation.mapToPk,
            type: innerRelation.type,
        }, models, searchValue, branchVisited, isSelfCircularDependency);
        if (!relationConstraints?.length) {
            continue;
        }
        relationFreeTextSearchWhere.push({
            [innerRelationName]: {
                $or: relationConstraints,
            },
        });
    }
    return relationFreeTextSearchWhere;
}
const mikroOrmFreeTextSearchFilterOptionsFactory = (models) => {
    return {
        cond: (freeTextSearchArgs, operation, manager, options) => {
            if (!freeTextSearchArgs || !freeTextSearchArgs.value) {
                return {};
            }
            const { value, fromEntity } = freeTextSearchArgs;
            if (options?.visited?.size) {
                /**
                 * When being in select in strategy, the filter gets applied to all queries even the ones that are not related to the entity
                 */
                const hasFilterAlreadyBeenAppliedForEntity = [
                    ...options.visited.values(),
                ].some((v) => v.constructor.name === freeTextSearchArgs.fromEntity);
                if (hasFilterAlreadyBeenAppliedForEntity) {
                    return {};
                }
            }
            const entityMetadata = manager.getDriver().getMetadata().get(fromEntity);
            const freeTextSearchWhere = retrieveRelationsConstraints({
                targetMeta: entityMetadata,
                mapToPk: false,
                searchable: true,
                type: fromEntity,
                name: entityMetadata.name,
            }, models, value);
            if (!freeTextSearchWhere.length) {
                return {};
            }
            return {
                $or: freeTextSearchWhere,
            };
        },
        default: true,
        args: false,
        entity: models.map((m) => m.name),
    };
};
exports.mikroOrmFreeTextSearchFilterOptionsFactory = mikroOrmFreeTextSearchFilterOptionsFactory;
//# sourceMappingURL=mikro-orm-free-text-search-filter.js.map