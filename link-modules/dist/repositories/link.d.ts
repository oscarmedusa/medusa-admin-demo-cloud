import { Context, ModuleJoinerConfig } from "@medusajs/framework/types";
import { EntitySchema } from "@mikro-orm/core";
export declare function getLinkRepository(model: EntitySchema): {
    new ({ joinerConfig }: {
        joinerConfig: ModuleJoinerConfig;
    }): {
        readonly joinerConfig_: ModuleJoinerConfig;
        delete(data: any, context?: Context): Promise<void>;
        create(data: object[], context?: Context): Promise<object[]>;
        update(data: {
            entity: any;
            update: any;
        }[], context?: Context): Promise<object[]>;
        find(options?: import("@medusajs/framework/types").FindOptions<object> | undefined, context?: Context): Promise<object[]>;
        findAndCount(options?: import("@medusajs/framework/types").FindOptions<object> | undefined, context?: Context): Promise<[object[], number]>;
        upsert(data: unknown[], context?: Context): Promise<object[]>;
        upsertWithReplace(data: unknown[], config?: import("@medusajs/framework/types").UpsertWithReplaceConfig<object> | undefined, context?: Context): Promise<{
            entities: object[];
            performedActions: import("@medusajs/framework/types").PerformedActions;
        }>;
        softDelete(filters: string | string[] | (object & import("@medusajs/framework/types").BaseFilterable<object>) | (object & import("@medusajs/framework/types").BaseFilterable<object>)[], sharedContext?: Context): Promise<[object[], Record<string, unknown[]>]>;
        restore(idsOrFilter: string[] | import("@medusajs/framework/types").FilterQuery, sharedContext?: Context): Promise<[object[], Record<string, unknown[]>]>;
        applyFreeTextSearchFilters<T>(findOptions: import("@medusajs/framework/types").FindOptions<T & {
            q?: string;
        }>, retrieveConstraintsToApply: (q: string) => any[]): void;
        readonly manager_: any;
        getFreshManager<TManager = unknown>(): TManager;
        getActiveManager<TManager = unknown>({ transactionManager, manager, }?: Context): TManager;
        transaction<TManager = unknown>(task: (transactionManager: TManager) => Promise<any>, options?: {
            isolationLevel?: string;
            enableNestedTransactions?: boolean;
            transaction?: TManager;
        }): Promise<any>;
        serialize<TOutput extends object | object[]>(data: any, options?: any): Promise<TOutput>;
    };
};
//# sourceMappingURL=link.d.ts.map