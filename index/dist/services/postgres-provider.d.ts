import { Context, Event, IndexTypes, RemoteQueryFunction, Subscriber } from "@medusajs/framework/types";
import { ContainerRegistrationKeys, MikroOrmBaseRepository as BaseRepository } from "@medusajs/framework/utils";
import { EntityManager, SqlEntityManager } from "@mikro-orm/postgresql";
type InjectedDependencies = {
    manager: EntityManager;
    [ContainerRegistrationKeys.QUERY]: RemoteQueryFunction;
    baseRepository: BaseRepository;
};
export declare class PostgresProvider implements IndexTypes.StorageProvider {
    #private;
    protected readonly eventActionToMethodMap_: {
        created: string;
        updated: string;
        deleted: string;
        attached: string;
        detached: string;
    };
    protected container_: InjectedDependencies;
    protected readonly schemaObjectRepresentation_: IndexTypes.SchemaObjectRepresentation;
    protected readonly schemaEntitiesMap_: Record<string, any>;
    protected readonly moduleOptions_: IndexTypes.IndexModuleOptions;
    protected readonly manager_: SqlEntityManager;
    protected readonly query_: RemoteQueryFunction;
    protected baseRepository_: BaseRepository;
    constructor(container: InjectedDependencies, options: {
        schemaObjectRepresentation: IndexTypes.SchemaObjectRepresentation;
        entityMap: Record<string, any>;
    }, moduleOptions: IndexTypes.IndexModuleOptions);
    onApplicationStart(): Promise<void>;
    protected static parseData<TData extends {
        id: string;
        [key: string]: unknown;
    }>(data: TData | TData[], schemaEntityObjectRepresentation: IndexTypes.SchemaObjectEntityRepresentation): {
        data: TData[];
        entityProperties: string[];
        parentsProperties: {
            [entity: string]: string[];
        };
    };
    protected static parseMessageData<T>(message?: Event): {
        action: string;
        data: {
            id: string;
        }[];
        ids: string[];
    } | void;
    consumeEvent(schemaEntityObjectRepresentation: IndexTypes.SchemaObjectEntityRepresentation): Subscriber<{
        id: string;
    }>;
    query<const TEntry extends string>(config: IndexTypes.IndexQueryConfig<TEntry>, sharedContext?: Context): Promise<IndexTypes.QueryResultSet<TEntry>>;
    /**
     * Create the index entry and the index relation entry when this event is emitted.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @param sharedContext
     * @protected
     */
    protected onCreate<TData extends {
        id: string;
        [key: string]: unknown;
    }>({ entity, data, schemaEntityObjectRepresentation, }: {
        entity: string;
        data: TData | TData[];
        schemaEntityObjectRepresentation: IndexTypes.SchemaObjectEntityRepresentation;
    }, sharedContext?: Context): Promise<void>;
    /**
     * Update the index entry when this event is emitted.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @param sharedContext
     * @protected
     */
    protected onUpdate<TData extends {
        id: string;
        [key: string]: unknown;
    }>({ entity, data, schemaEntityObjectRepresentation, }: {
        entity: string;
        data: TData | TData[];
        schemaEntityObjectRepresentation: IndexTypes.SchemaObjectEntityRepresentation;
    }, sharedContext?: Context): Promise<void>;
    /**
     * Delete the index entry when this event is emitted.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @param sharedContext
     * @protected
     */
    protected onDelete<TData extends {
        id: string;
        [key: string]: unknown;
    }>({ entity, data, schemaEntityObjectRepresentation, }: {
        entity: string;
        data: TData | TData[];
        schemaEntityObjectRepresentation: IndexTypes.SchemaObjectEntityRepresentation;
    }, sharedContext?: Context): Promise<void>;
    /**
     * event emitted from the link modules to attach a link entity to its parent and child entities from the linked modules.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @protected
     */
    protected onAttach<TData extends {
        id: string;
        [key: string]: unknown;
    }>({ entity, data, schemaEntityObjectRepresentation, }: {
        entity: string;
        data: TData | TData[];
        schemaEntityObjectRepresentation: IndexTypes.SchemaObjectEntityRepresentation;
    }, sharedContext?: Context): Promise<void>;
    /**
     * Event emitted from the link modules to detach a link entity from its parent and child entities from the linked modules.
     * @param entity
     * @param data
     * @param schemaEntityObjectRepresentation
     * @param sharedContext
     * @protected
     */
    protected onDetach<TData extends {
        id: string;
        [key: string]: unknown;
    }>({ entity, data, schemaEntityObjectRepresentation, }: {
        entity: string;
        data: TData | TData[];
        schemaEntityObjectRepresentation: IndexTypes.SchemaObjectEntityRepresentation;
    }, sharedContext?: Context): Promise<void>;
}
export {};
//# sourceMappingURL=postgres-provider.d.ts.map