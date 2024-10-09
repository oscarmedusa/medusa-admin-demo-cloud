import { Knex } from "@mikro-orm/knex";
import { IndexTypes } from "@medusajs/framework/types";
import { QueryFormat, QueryOptions } from "../types";
export declare const OPERATOR_MAP: {
    $eq: string;
    $lt: string;
    $gt: string;
    $lte: string;
    $gte: string;
    $ne: string;
    $in: string;
    $is: string;
    $like: string;
    $ilike: string;
};
export declare class QueryBuilder {
    private readonly structure;
    private readonly entityMap;
    private readonly knex;
    private readonly selector;
    private readonly options?;
    private readonly schema;
    constructor(args: {
        schema: IndexTypes.SchemaObjectRepresentation;
        entityMap: Record<string, any>;
        knex: Knex;
        selector: QueryFormat;
        options?: QueryOptions;
    });
    private getStructureKeys;
    private getEntity;
    private getGraphQLType;
    private transformValueToType;
    private getPostgresCastType;
    private parseWhere;
    private buildQueryParts;
    private buildSelectParts;
    private transformOrderBy;
    buildQuery(countAllResults?: boolean, returnIdOnly?: boolean): string;
    buildObjectFromResultset(resultSet: Record<string, any>[]): Record<string, any>[];
}
//# sourceMappingURL=query-builder.d.ts.map