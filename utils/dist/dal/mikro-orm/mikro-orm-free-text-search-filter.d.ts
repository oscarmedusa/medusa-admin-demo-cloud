import { EntitySchema } from "@mikro-orm/core";
import { SqlEntityManager } from "@mikro-orm/postgresql";
import type { FindOptions, EntityClass, FindOneOptions } from "@mikro-orm/core";
export declare const FreeTextSearchFilterKey = "freeTextSearch";
interface FilterArgument {
    value: string;
    fromEntity: string;
}
export declare const mikroOrmFreeTextSearchFilterOptionsFactory: (models: (EntityClass<any> | EntitySchema)[]) => {
    cond: (freeTextSearchArgs: FilterArgument, operation: string, manager: SqlEntityManager, options?: (FindOptions<any, any> | FindOneOptions<any, any>) & {
        visited?: Set<EntityClass<any>>;
    }) => {
        $or?: undefined;
    } | {
        $or: any;
    };
    default: boolean;
    args: boolean;
    entity: string[];
};
export {};
//# sourceMappingURL=mikro-orm-free-text-search-filter.d.ts.map